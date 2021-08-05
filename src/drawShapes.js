import colors from "./colors";
// - Displaying shapes on a canvas
// get the canvas element
const canvas = document.querySelector("canvas");
// get the canvas context
export const context = canvas.getContext("2d");

// draw things
context.fillStyle = colors.dark;
context.fillRect(100, 100, 100, 100);

context.fillStyle = colors.darkest;
context.fillRect(0, 10, 10, 10);

// draw a circle
context.beginPath();
context.arc(100, 100, 50, 0, Math.PI * 2);
context.fill();

// remove pixels from canvas
context.clearRect(105, 105, 90, 90);
