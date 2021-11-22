// Variables
let selectedP, selectedC;

// Computer play
let computerSelection = function () {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      selectedC = "rock";
      return selectedC;
    case 2:
      selectedC = "paper";
      return selectedC;
    default:
      selectedC = "scissor";
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

// Play round.
let playRound = function () {
  playerSelection();
  computerSelection();
  if (selectedP === selectedC) {
    console.log(`It's a tie`);
  } else if (selectedP === "rock") {
    if (selectedC === "paper") {
      console.log(`The computer has won!`);
    } else {
      console.log("You have won!");
    }
  } else if (selectedP === "paper") {
    if (selectedC === "scissor") {
      console.log(`The computer has won!`);
    } else {
      console.log(`You have won!`);
    }
  } else if (selectedP === "scissor") {
    if (selectedC === "rock") {
      console.log(`The computer has won!`);
    } else {
      console.log(`You have won!`);
    }
  }
  console.log(`Computer has picked ${selectedC}, and player ${selectedP}`);
};

playRound();
