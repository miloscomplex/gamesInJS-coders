import colors from "./colors";
import { context } from "./drawShapes";

export class Square {
  constructor(
    startingPosition,
    speed = { x: 1, y: 0 },
    color = colors.darkest
  ) {
    this.width = 10;
    this.height = 10;
    this.speed = {
      x: speed.x,
      y: speed.y
    };
    this.position = {
      x: startingPosition.x,
      y: startingPosition.y
    };
    this.color = color;
  }

  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if (
      this.position.x < 0 ||
      this.position.x > context.canvas.width - this.width
    ) {
      this.speed.x = -this.speed.x;
    }
    if (
      this.position.y < 0 ||
      this.position.y > context.canvas.height - this.height
    ) {
      this.speed.y = -this.speed.y;
    }
  }
}
