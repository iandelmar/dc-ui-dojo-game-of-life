import gameOfLife from './gameOfLife';

import { randomArray } from './helpers';

const GRID_HEIGHT = 25;
const GRID_WIDTH = 40;
const ALIVE_CELL_PROBABILITY = 0.8;
const BOARD = randomArray(GRID_HEIGHT, GRID_WIDTH, ALIVE_CELL_PROBABILITY);

let table;
let tbody;
let actualBoard;
let generation = 0;
let counter;

// Draw board
export function drawBoard(inputBoard) {
  let tbody = document.getElementsByTagName('tbody')[0];
  for (let i = 0; i < GRID_HEIGHT; i++) {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (let j = 0; j < GRID_WIDTH; j++) {
      let td = document.createElement('td');
      if (parseInt(inputBoard[i][j])) {
        tr.appendChild(td);
        td.className = 'alive';
      } else {
        tr.appendChild(td);
      }
    }
  }
}

// Initialize game
export function initGame() {
  actualBoard = BOARD;
  table = document.getElementById('table');
  tbody = document.createElement('tbody');
  counter = document.getElementById('counter');
  table.appendChild(tbody);
  drawBoard(actualBoard);
}

// Clear board
export function clearBoard() {
  table.removeChild(tbody);
  tbody = document.createElement('tbody');
  table.appendChild(tbody);
}

// Update generation
export function updateGeneration() {
  counter.innerHTML = 'Generation: ' + generation;
}

// Increase generation
export function increaseGeneration() {
  generation += 1;
  updateGeneration();
}

// Reset board
export function resetBoard() {
  clearBoard();
  actualBoard = randomArray(GRID_HEIGHT, GRID_WIDTH, ALIVE_CELL_PROBABILITY);
  drawBoard(actualBoard);
  generation = 0;
  updateGeneration();
}

// Next step
export function nextStep() {
  clearBoard();
  actualBoard = gameOfLife(actualBoard);
  drawBoard(actualBoard);
  increaseGeneration();
}
