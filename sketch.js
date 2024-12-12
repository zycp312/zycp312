let startingY = 170;
let info = function () { };
let showInfo = 2;
let title;
let unread;
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


//days of the month, change MONTHLY
let num1Row = [27, 28, 29, 30, 31, 1, 2];
let num2Row = [3, 4, 5, 6, 7, 8, 9];
let num3Row = [10, 11, 12, 13, 14, 15, 16];
let num4Row = [17, 18, 19, 20, 21, 22, 23];
let num5Row = [24, 25, 26, 27, 28, 29, 30];


let picker;


function preload() {
  img1 = loadImage("November-removebg-preview.png");
}
function setup() {
  // Get the resized width and height based on CSS
  let canvasWidth = document.body.clientWidth * 0.8;
  let canvasHeight = document.body.clientHeight * 0.8;
    
  // Create a canvas based on the calculated size
  createCanvas(canvasWidth, canvasHeight);

 // createCanvas(933, 790);
  rectMode(CORNER);
  textAlign(CENTER);
  imageMode(CENTER);
  unread = new Unread();
  picker = createColorPicker("rgb(255, 243, 168)");
  picker.position(0, 790);
  picker.size(100, 30);
}


function draw() {
  background(picker.value());
  showInfo = 2;


  //image uploads
  {
    image(img1, 467, 45, 360, 180);
  }


  //days of the week tiles
  {
    for (let i = 0; i < 7; i += 1) {
      let x = 10 + i * (35 + 100);
      push();
      fill(256, 188, 36);
      rect(x, 100, 100, 50, 15);
      fill(0);
      textSize(15);
      textStyle(BOLD);
      text(days[i - 0], x + 50, 100 + 30);
      pop();
    }
  }


  //creates the tiles
  {
    push();
    textSize(17);
    textStyle(BOLD);
    fill(0, 0, 0);
    //TOP ROW
    for (let i = 0; i < 7; i += 1) {
      let x = 10 + i * (35 + 100);


      //extra days check
      if (i < 5) {
        fill(50, 100);
      } else {
        fill(255, 255, 255);
      }


      //drawing tiles
      push()
      noStroke();
      rect(x, startingY, 100, 100, 15);
      pop();


      if (i == 3) {
        unread = new Unread(x, startingY);
        unread.display();
      }


      //hovering?
      if (collidePointRect(mouseX, mouseY, x, startingY, 100, 100)) {
        showInfo = 1;
        title = "SAMPLE TEXT";
        if (i == 3) {
          title = "WOW";
        }
      }


      //draw text
      fill(0);
      text(num1Row[i], x + 15, startingY + 20);
    }


    //SECOND ROW, Y is always + 135
    for (let i = 0; i < 7; i += 1) {
      fill(255);
      let x = 10 + i * (35 + 100);


      //drawing tiles
      push();
      noStroke();
      rect(x, 135 + startingY, 100, 100, 15);
      pop();


      //if event
      if (i == 3) {
        unread = new Unread(x, 135 + startingY);
        if (unread != "no") {
          unread.display();
        }
      }


      //hovering?
      if (collidePointRect(mouseX, mouseY, x, startingY + 135, 100, 100)) {
        showInfo = 1;
        title = "SAMPLE TEXT";
      }


      //draw text


      fill(0);
      text(num2Row[i], x + 15, 135 + startingY + 20);
    }


    //THIRD ROW, Y is always + 260
    for (let i = 0; i < 7; i += 1) {
      fill(255);
      let x = 10 + i * (35 + 100);


      //drawing tiles
      push();
      noStroke();
      rect(x, 260 + startingY, 100, 100, 15);
      pop();


      //if event (none now)


      //hovering?
      if (collidePointRect(mouseX, mouseY, x, 260 + startingY, 100, 100)) {
        showInfo = 1;
        title = "SAMPLE TEXT";
      }


      //draw text
      fill(0);
      text(num3Row[i], x + 15, 260 + startingY + 20);
    }


    //FOURTH ROW, y is always + 385
    for (let i = 0; i < 7; i += 1) {
      fill(255);
      let x = 10 + i * (35 + 100);


      //drawing tiles
      push();
      noStroke();
      rect(x, 385 + startingY, 100, 100, 15);
      pop();


      //if event (none now)


      //hovering?
      if (collidePointRect(mouseX, mouseY, x, 385 + startingY, 100, 100)) {
        showInfo = 1;
        title = "SAMPLE TEXT";
      }


      //draw text
      fill(0);
      text(num4Row[i], x + 15, 385 + startingY + 20);
    }


    //FIFTH ROW, y is always + 510
    for (let i = 0; i < 7; i += 1) {
      fill(255);
      let x = 10 + i * (35 + 100);


      //extra days check
      if (i == 5 || i == 6) {
        fill(50, 100);
      }


      //drawing tiles
      push();
      noStroke();
      rect(x, 510 + startingY, 100, 100, 15);
      pop();


      //if event (none now)


      //hovering?
      if (collidePointRect(mouseX, mouseY, x, 510 + startingY, 100, 100)) {
        showInfo = 1;
        title = "SAMPLE TEXT";
      }


      //draw text
      fill(0);
      text(num5Row[i], x + 15, 510 + startingY + 20);
    }
    pop();
  }


  //info stuff
  {
    info = function (ti) {
      textSize(15);
      textAlign(CENTER);
      push();
      rectMode(CORNER);
      if (mouseX > 110) {
        if (mouseY < 350) {
          rect(mouseX - 150, mouseY, 150, 300, 10);
          text(ti, mouseX - 75, mouseY + 20);
        }


        if (mouseY > 350) {
          rect(mouseX - 150, mouseY - 300, 150, 300, 10);
          text(ti, mouseX - 75, mouseY - 280);
        }
      }
      if (mouseX < 110) {
        if (mouseY < 350) {
          rect(mouseX, mouseY, 150, 300, 10);
          text(ti, mouseX + 75, mouseY + 20);
        }


        if (mouseY > 350) {
          rect(mouseX, mouseY - 300, 150, 300, 10);
          text(ti, mouseX + 75, mouseY - 280);
        }
      }
      pop();
    };


    if (showInfo == 1) {
      info(title);
    }
  }
}
