function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  let choices = ['Rock', 'Raper', 'Scissors'];
  return choices[choice];
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();

  if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
    return 'You win! Rock beats Scissors';
  } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
    return 'You win! Paper beats Rock';
  } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
    return 'You win! Paper beats Rock';
  } else if (playerSelection == computerSelection) {
    return 'No winner! It is a draw';
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}
