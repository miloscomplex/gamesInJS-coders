const handleAButtonPress = () => {
  console.log("pressed the a button");
};
// - Listening for user input

// get the a button
const aButton = document.querySelector("#aButton");
// listen for user input
aButton.addEventListener("click", () => {
  handleAButtonPress();
});

// get the spacebar button
const keyCharacter = " ";
// listen for user input
document.addEventListener("keydown", (event) => {
  if (event.key === keyCharacter) {
    handleAButtonPress();
  }
});

//console.log("hello this is the button we just found", aButton);
