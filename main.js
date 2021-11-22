// Variables
let selectedP, selectedC;
let scoreP = 0;
let scoreC = 0;

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
      scoreC++;
    } else {
      console.log("You have won!");
      scoreP++;
    }
  } else if (selectedP === "paper") {
    if (selectedC === "scissor") {
      console.log(`The computer has won!`);
      scoreC++;
    } else {
      console.log(`You have won!`);
      scoreP++;
    }
  } else if (selectedP === "scissor") {
    if (selectedC === "rock") {
      console.log(`The computer has won!`);
      scoreC++;
    } else {
      console.log(`You have won!`);
      scoreP++;
    }
  }
  console.log(`Computer has picked ${selectedC}, and player ${selectedP}`);
};

let playGame = function () {
  for (let i = 1; i <= 5; i++) {
    playRound();
    console.log(`Round ${i}`);
  }
  scoreP > scoreC
    ? console.log(`Player has won with a score of ${scoreP} over 5`)
    : console.log(`Computer has won with a score of ${scoreC} over 5`);
};

playGame();
