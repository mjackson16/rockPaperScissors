function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  let choices = ['Rock', 'Paper', 'Scissors'];
  return choices[choice];
}
