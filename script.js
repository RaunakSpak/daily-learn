const board = document.getElementById('board');
const winnerDisplay = document.getElementById('winner');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let gameActive = true;
let gameState = Array(9).fill(null);

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function createBoard() {
    board.innerHTML = '';
    gameState = Array(9).fill(null);
    currentPlayer = 'X';
    gameActive = true;
    winnerDisplay.textContent = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
    }
}

function handleCellClick(e) {
    const cell = e.target;
    const index = cell.dataset.index;

    if (!gameActive || gameState[index]) return;

    cell.textContent = currentPlayer;
    cell.classList.add('taken');
    gameState[index] = currentPlayer;

    if (checkWinner()) {
        winnerDisplay.textContent = `Player ${currentPlayer} Wins!`;
        gameActive = false;
        return;
    }

    if (!gameState.includes(null)) {
        winnerDisplay.textContent = `It's a Draw!`;
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
    });
}

resetButton.addEventListener('click', createBoard);

createBoard();
