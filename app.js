const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_VALUE = ROCK;
const DRAW = 'DRAW';
const PLAYER_WINS = 'PLAYER WINS';
const COMPUTER_WINS = 'COMPUTER WINS';

let gameIsStarted = false

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert('Invalid user choice, ROCK is selected by default');
    return DEFAULT_VALUE;
  }
  return selection;
}

const getComputerChoice = function() {
  const selection = Math.random();
  if (selection < 0.34) {
    return ROCK;
  } else if (selection < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

const declareWinner = (cChoice, pChoice = DEFAULT_VALUE) => {
  if (cChoice === pChoice) {
    return DRAW;
  } else if (cChoice === ROCK && pChoice === PAPER ||
    cChoice === PAPER && pChoice === SCISSORS ||
    cChoice === SCISSORS && pChoice === ROCK) {
      return PLAYER_WINS;
    } else {
      return COMPUTER_WINS;
    }
}

startGameBtn.addEventListener('click', function() {
  console.log('Game is starting...');
  if (gameIsStarted) {
    return;
  }
  gameIsStarted = true;
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  console.log(playerChoice, computerChoice);
  const winner = declareWinner(computerChoice, playerChoice);
  console.log(winner);
  gameIsStarted = false;
});