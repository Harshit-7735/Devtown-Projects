const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const messageDisplay = document.querySelector("#message h3");

const options = ["rock", "paper", "scissors"];
let playerScore = 0,
  computerScore = 0;

const randomChoice = () => options[Math.floor(Math.random() * options.length)];

const playRound = (playerSelection, computerSelection) => {
    // for round 5
    if (playerScore === 5) {
        messageDisplay.innerHTML = "You win the game!"+ " " + "Congratulations! 🎉";
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.innerHTML = playerScore;
        computerScoreDisplay.innerHTML = computerScore;
        return;
    } else if (computerScore === 5) {
        messageDisplay.innerHTML = "You lose the game!"+ " " + "Better luck next time! 😢";
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.innerHTML = playerScore;
        computerScoreDisplay.innerHTML = computerScore;
        return;
    }

  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          messageDisplay.innerHTML = "Draw! &#129396";
          break;
        case "paper":
          messageDisplay.innerHTML = "You lose! Paper beats rock. &#128534";
          computerScoreDisplay.innerHTML = ++computerScore;
          break;
        case "scissors":
          messageDisplay.innerHTML = "You win! Rock beats scissors. &#129395";
          playerScoreDisplay.innerHTML = ++playerScore;
          break;
      }
      break;
    case "paper":
      switch (computerSelection) {
        case "rock":
          messageDisplay.innerHTML = "You win! Paper beats rock. &#129395";
          playerScoreDisplay.innerHTML = ++playerScore;
          break;
        case "paper":
          messageDisplay.innerHTML = "Draw! &#129396";
          break;
        case "scissors":
          messageDisplay.innerHTML = "You lose! Scissors beats paper. &#128534";
          computerScoreDisplay.innerHTML = ++computerScore;
          break;
      }
      break;
    case "scissors":
      switch (computerSelection) {
        case "rock":
          messageDisplay.innerHTML = "You lose! Rock beats scissors. &#128534";
          computerScoreDisplay.innerHTML = ++computerScore;
          break;
        case "paper":
          messageDisplay.innerHTML = "You win! Scissors beats paper. &#129395";
          playerScoreDisplay.innerHTML = ++playerScore;
          break;
        case "scissors":
          messageDisplay.innerHTML = "Draw! &#129396";
          break;
      }
      break;
    default:
      messageDisplay.innerHTML = "Invalid input! Please try again.";
      break;
  }
};

rock.addEventListener("click", () => playRound("rock", randomChoice()));
paper.addEventListener("click", () => playRound("paper", randomChoice()));
scissors.addEventListener("click", () => playRound("scissors", randomChoice()));
