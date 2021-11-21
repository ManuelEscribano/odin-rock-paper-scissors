// Variables
let selectedP, selectedC;

// Computer play
let computerSelection = function () {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      selectedC = "rock";
      console.log("rock");
      return selectedC;
    case 2:
      selectedC = "paper";
      console.log("paper");
      return selectedC;
    default:
      selectedC = "scissor";
      console.log("scissor");
      return selectedC;
  }
};

// Player selection
let playerSelection = function () {
  do {
    selectedP = prompt(
      `Choose your weapon!
      \n Will you take "Rock", "Paper" or "Scissor"?
      \n`
    ).toLowerCase();
  } while (
    selectedP != "rock" &&
    selectedP != "paper" &&
    selectedP != "scissor"
  );
  return selectedP;
};
