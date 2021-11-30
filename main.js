// Variables
let playerChoice, computerChoice;
let playerScore = 0;
let computerScore = 0;

let roundNumber = 0;
const userName = prompt(`Please enter your name:
\n`);
const rpsOptions = Array.from(
  document.querySelector(".human-decision").children
);
let computerImg = document.querySelector("#computer-selection");
let roundElement = document.querySelector(".round-info");
let scoreElement = document.querySelector(".score");

// update userName
userName
  ? (document.getElementById("player-name").textContent = userName)
  : null;

// Update score
let updateScoreAndRound = function () {
  roundElement.textContent = `Round: ${roundNumber}`;
  scoreElement.textContent = `Game Score: ${playerScore} - ${computerScore}`;
};

// Computer selection.
let computerSelection = function () {
  let options = ["rock", "paper", "scissor"];
  let randomNum = Math.floor(Math.random() * 3);
  computerChoice = options[randomNum];
  computerImg.style.display = "block";
  computerImg.src = `./icons/${options[randomNum]}.png`;
  computerImg.alt = `An image of a ${options[randomNum]}`;
  return computerChoice;
};

// Player Selection
rpsOptions.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    // Play round.
    if (e.target.className === "rps") {
      computerSelection();
      playerChoice = e.target.id;
    }
    if (playerChoice === computerChoice) {
      roundNumber++;
      updateScoreAndRound();
      console.log("Its a tie!");
    } else if (playerChoice === "rock") {
      if (computerChoice === "paper") {
        computerScore++, roundNumber++;
        updateScoreAndRound();
      } else {
        playerScore++, roundNumber++;
        updateScoreAndRound();
      }
    } else if (playerChoice === "paper") {
      if (computerChoice === "scissor") {
        computerScore++, roundNumber++;
        updateScoreAndRound();
      } else {
        playerScore++, roundNumber++;
        updateScoreAndRound();
      }
    } else if (playerChoice === "scissor") {
      if (computerChoice === "rock") {
        computerScore++, roundNumber++;
        updateScoreAndRound();
      } else {
        playerScore++, roundNumber++;
        updateScoreAndRound();
      }
    }
  });
});
