// Variables
let playerChoice, computerChoice;
let playerScore = 0,
  computerScore = 0,
  roundNumber = 0;
// const userName = prompt(`Please enter your name:
// \n`);

// Selectors
const rpsOptions = Array.from(
  document.querySelector(".human-decision").children
);
let computerImg = document.querySelector("#computer-selection");
let roundElement = document.querySelector(".round-number");
let scoreElement = document.querySelector(".score");
let modalWindow = document.querySelector(".modal");
let closeBtn = document.querySelector("#closeBtn");
let playAgainBtns = Array.from(document.getElementsByClassName("restart"));
let resultRound = document.querySelector("#log");
let restartBtn;

// | UI
// update userName
// userName
//   ? (document.getElementById("player-name").textContent = userName)
//   : null;

// Display modal window.
let displayModal = function () {
  let modalText = document.querySelector("h2");
  modalWindow.style.display = "flex";
  if (playerScore > computerScore) {
    modalText.textContent = "You have won the game!";
  } else if (playerScore < computerScore) {
    modalText.textContent = "You have lost the game..";
  } else {
    modalText.textContent = "It's a tie!";
  }
};

// Restart game
playAgainBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    (playerScore = 0), (computerScore = 0), (roundNumber = 0);
    modalWindow.style.display = "none";
    updateScoreAndRound();
  })
);

// Close modal window
closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modalWindow.style.display = "none";
});

// | Game logic.
// Update score
function updateScoreAndRound() {
  roundElement.textContent = `Round: ${roundNumber}`;
  scoreElement.textContent = `Game Score: ${playerScore} - ${computerScore}`;
}

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
    if (roundNumber === 5) displayModal();
  });
});
