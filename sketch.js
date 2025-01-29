let startingY = 170;
let info = function () {};
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
let drawAll;

//days of the month, change MONTHLY
let num1Row = [26, 27, 28, 29, 30, 31, 1];
let num2Row = [2, 3, 4, 5, 6, 7, 8];
let num3Row = [9, 10, 11, 12, 13, 14, 15];
let num4Row = [16, 17, 18, 19, 20, 21, 22];
let num5Row = [23, 24, 25, 26, 27, 28, 1];

let picker;

function preload() {
  // img1 = loadImage("November-removebg-preview.png");
}
function setup() {
  createCanvas(747, 632);
  rectMode(CORNER);
  textAlign(CENTER);
  imageMode(CENTER);
  unread = new Unread();
  picker = createColorPicker("rgb(255, 243, 168)");
  picker.position(0, 790);
  picker.size(100, 30);

  drawAll = function (scaleFactor) {
    //image uploads
    {
      // image(img1, 467, 45, 360, 180);
    }

    //days of the week tiles
    {
      for (let i = 0; i < 7; i += 1) {
        let x = 10 + i * (35 + 100);
        x *= scaleFactor;
        push();
        fill(256, 188, 36);
        rect(
          x,
          100 * scaleFactor + 10,
          100 * scaleFactor,
          50 * scaleFactor,
          15
        );
        fill(0);
        textSize(15 * scaleFactor);
        textStyle(BOLD);
        text(days[i - 0], x + 50 * scaleFactor, (100 + 30) * scaleFactor + 10);
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
        x *= scaleFactor;

        //extra days check
        if (i < 6) {
          fill(50, 100);
        } else {
          fill(255, 255, 255);
        }

        //drawing tiles
        push();
        noStroke();
        rect(
          x,
          startingY * scaleFactor + 10,
          100 * scaleFactor,
          100 * scaleFactor,
          15
        );
        pop();

       /* if (i == 3) {
          unread = new Unread(x - 10, startingY * scaleFactor - 5 + 10);
          unread.display();
        }
        */

        //hovering?
        if (
          collidePointRect(
            mouseX,
            mouseY,
            x,
            startingY * scaleFactor + 10,
            100 * scaleFactor,
            100 * scaleFactor
          )
        ) {
          showInfo = 1;
          title = "SAMPLE TEXT";
 //         if (i == 3) {
  //          title = "WOW";
   //       }
        }

        //draw text
        fill(0);
        text(num1Row[i], x + 15 * scaleFactor, startingY * scaleFactor + 30);
      }

      //SECOND ROW, Y is always + 135
      for (let i = 0; i < 7; i += 1) {
        fill(255);
        let x = 10 + i * (35 + 100);
        x *= scaleFactor;

        //drawing tiles
        push();
        noStroke();
        rect(
          x,
          (startingY + 135) * scaleFactor,
          100 * scaleFactor,
          100 * scaleFactor,
          15
        );
        pop();

        //if event
  //      if (i == 3) {
      //    unread = new Unread(x - 10, (135 + startingY) * scaleFactor - 5);
      //    if (unread != "no") {
      //      unread.display();
      //    }
    //    }

        //hovering?
        if (
          collidePointRect(
            mouseX,
            mouseY,
            x,
            (startingY + 135) * scaleFactor,
            100 * scaleFactor,
            100 * scaleFactor
          )
        ) {
          showInfo = 1;
          title = "SAMPLE TEXT";
       //   if(i == 3){
       //     title = "WOW"
        //  }
        }

        //draw text

        fill(0);
        text(
          num2Row[i],
          x + 15,
          (135 + startingY + 20 / scaleFactor) * scaleFactor
        );
      }

      //THIRD ROW, Y is always + 260
      for (let i = 0; i < 7; i += 1) {
        fill(255);
        let x = 10 + i * (35 + 100);
        x *= scaleFactor;

        //drawing tiles
        push();
        noStroke();
        rect(
          x,
          (260 + startingY) * scaleFactor,
          100 * scaleFactor,
          100 * scaleFactor,
          15
        );
        pop();

        //if event (none now)
        /*
        if (i == 3) {
          unread = new Unread(x - 10, (260 + startingY) * scaleFactor - 5);
          if (unread != "no") {
            unread.display();
          }
        }
        */

        //hovering?
        if (
          collidePointRect(
            mouseX,
            mouseY,
            x,
            (260 + startingY) * scaleFactor,
            100 * scaleFactor,
            100 * scaleFactor
          )
        ) {
          showInfo = 1;
          title = "SAMPLE TEXT";
        }

        //draw text
        fill(0);
        text(num3Row[i], x + 15, (260 + startingY + 20) * scaleFactor + 5);
      }

      //FOURTH ROW, y is always + 385
      for (let i = 0; i < 7; i += 1) {
        fill(255);
        let x = 10 + i * (35 + 100);
        x *= scaleFactor;

        //drawing tiles
        push();
        noStroke();
        rect(
          x,
          (385 + startingY) * scaleFactor,
          100 * scaleFactor,
          100 * scaleFactor,
          15
        );
        pop();

        //if event (none now)
        /* if (i == 3) {
          unread = new Unread(x - 10, (385 + startingY) * scaleFactor - 5);
          if (unread != "no") {
            unread.display();
          }
        }*/

        //hovering?
        if (
          collidePointRect(
            mouseX,
            mouseY,
            x,
            (385 + startingY) * scaleFactor,
            100 * scaleFactor,
            100 * scaleFactor
          )
        ) {
          showInfo = 1;
          title = "SAMPLE TEXT";
        }

        //draw text
        fill(0);
        text(num4Row[i], x + 15, (385 + startingY + 20) * scaleFactor + 5);
      }

      //FIFTH ROW, y is always + 510
      for (let i = 0; i < 7; i += 1) {
        fill(255);
        let x = 10 + i * (35 + 100);
        x *= scaleFactor;

        //extra days check
        if (i == 6) {
          fill(50, 100);
        }

        //drawing tiles
        push();
        noStroke();
        rect(
          x,
          (510 + startingY) * scaleFactor,
          100 * scaleFactor,
          100 * scaleFactor,
          15
        );
        pop();

        //if event
        if (i == 0) {
          unread = new Unread(x - 10, (510 + startingY) * scaleFactor - 5);
          if (unread != "no") {
            unread.display();
          }
        }

        //hovering?
        if (
          collidePointRect(
            mouseX,
            mouseY,
            x,
            (510 + startingY) * scaleFactor,
            100 * scaleFactor,
            100 * scaleFactor
          )
        ) {
          showInfo = 1;
          title = "SAMPLE TEXT";
          if(i == 0){
            title = "PARK FELLOWSHIP"
          }
        }

        //draw text
        fill(0);
        text(num5Row[i], x + 15, (510 + startingY + 20) * scaleFactor + 5);
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
  };
}

function draw() {
  background(picker.value());
  showInfo = 2;
  drawAll(0.8);
}
