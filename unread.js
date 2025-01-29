class Unread {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.hovering = false;
    this.shape = function () {
      push();
      fill(246, 187, 0);
      textAlign(CENTER);
      textSize(70);
      text("!", this.x + 50, this.y + 72);
      pop();
    };
  }
  display() {
    if (collidePointRect(mouseX, mouseY, this.x, this.y, 100, 100)) {
      this.hovering = true;
    }
    if (this.hovering == false) {
      // circle(this.x + 50, this.y + 50, 35);
      this.shape();
    }
  }
}
