const boardElement = document.getElementById('board');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let board = Array(9).fill(null);

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function createBoard() {
  boardElement.innerHTML = '';
  board.forEach((value, index) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = index;
    cell.textContent = value || '';
    cell.addEventListener('click', handleMove, { once: true });
    boardElement.appendChild(cell);
  });
}

function handleMove(event) {
  const index = event.target.dataset.index;
  board[index] = currentPlayer;
  event.target.textContent = currentPlayer;
  if (checkWin()) {
    setTimeout(() => alert(`${currentPlayer} wins!`), 10);
    endGame();
    return;
  }
  if (board.every(cell => cell)) {
    setTimeout(() => alert('Draw!'), 10);
    endGame();
    return;
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
  return winningCombinations.some(combination => {
    return combination.every(index => board[index] === currentPlayer);
  });
}

function endGame() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.removeEventListener('click', handleMove));
}

resetButton.addEventListener('click', () => {
  board = Array(9).fill(null);
  currentPlayer = 'X';
  createBoard();
});

createBoard();
