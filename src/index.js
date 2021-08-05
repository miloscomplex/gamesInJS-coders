import "./userInput";
import { context } from "./drawShapes";
import { Square } from "./Square";

import "./styles.css";
import colors from "./colors";

// - Update loops

const square = new Square({ x: 10, y: 10 });
const square2 = new Square({ x: 10, y: 30 }, { x: 2, y: 1 }, colors.dark);

const update = () => {
  // do something
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  // get the square
  // move the square
  square.update();
  square2.update();
  // draw the square
  square.draw();
  square2.draw();

  requestAnimationFrame(update);
};

requestAnimationFrame(update);
