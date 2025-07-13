/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal from top-left to bottom-right
  [2, 4, 6]  // Diagonal from top-right to bottom-left
];

/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');
const resetBtnEl = document.getElementById('reset-button');

/*-------------------------------- Functions --------------------------------*/
function init() {
board = ['', '', '', '', '', '', '', '', ''];
turn = 'X';
winner = false;
tie = false;
render();
}

function render() {
updateBoard();
updateMessage();
}

function updateBoard() {
  board.forEach((sqrVal, idx) => {
    squareEls[idx].textContent = sqrVal;
  });
}

function updateMessage() {
if (winner === false && tie === false) {
 messageEl.textContent = `It's ${turn}'s Turn`;
 } else if (winner === false && tie === true) {
messageEl.textContent = "It's a Cat's Game! Meow!";
 } else {
messageEl.textContent = `${turn} Wins!`;
  }
}

function placePiece(index) {
  board[index] = turn;
}

function checkForWinner() {
winningCombos.forEach(combo => {
const [a, b, c] = combo;
 if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
winner = true;
    }
  });
}

function checkForTie() {
if (winner) {
 return;
}
 if (!board.includes('')) {
   tie = true;
  }
}

function switchPlayerTurn() {
 if (winner || tie) {
    return;
}
   turn = turn === 'X' ? 'O' : 'X';
}

function handleClick(event) {
  const squareIndex = parseInt(event.target.id);

if (board[squareIndex] !== '' || winner || tie) {
  return;
}

placePiece(squareIndex);
checkForWinner();
checkForTie();
switchPlayerTurn();
render();
}

init();

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(square => {
  square.addEventListener('click', handleClick);
});

resetBtnEl.addEventListener('click', init);