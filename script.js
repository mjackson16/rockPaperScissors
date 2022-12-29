function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  let choices = ['Rock', 'Raper', 'Scissors'];
  return choices[choice];
}

function capitalize(x) {
  x = x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
  return x;
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();

  if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
    console.log('You win! Rock beats Scissors');
    return 1;
  } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
    console.log('You win! Paper beats Rock');
    return 1;
  } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
    console.log('You win! Paper beats Rock');
    return 1;
  } else if (playerSelection == computerSelection) {
    console.log('No winner! It is a draw');
    return 0;
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return -1;
  }
}

function game() {
  let round = 1;
  let playerScore = 0;
  let computerScore = 0;
  while (round < 6) {
    let playerSelection = prompt('Rock, Paper, or Scissors?');
    playerSelection = capitalize(playerSelection);

    while (
      playerSelection !== 'Rock' &&
      playerSelection !== 'Paper' &&
      playerSelection !== 'Scissors'
    ) {
      playerSelection = prompt('Not a valid choice. Rock, Paper, or Scissors?');
      playerSelection = capitalize(playerSelection);
    }

    let point = playRound(playerSelection, getComputerChoice());

    switch (point) {
      case 1:
        playerScore++;
        break;
      case -1:
        computerScore++;
        break;
      default:
        break;
    }

    round++;
  }
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log('Player wins!');
  } else if (playerScore == computerScore) {
    console.log("It's a tie! No winner.");
  } else {
    console.log('Computer wins!');
  }
}
