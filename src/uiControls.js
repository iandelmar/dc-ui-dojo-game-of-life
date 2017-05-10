import * as gameManager from './gameManager'

let run = false;

// run button
export function play() {
  if (!run) {
    run = setInterval(gameManager.nextStep, 500);
  }
}

// Pause button
export function pause() {
  clearInterval(run);
  run = false;
}

// Next step button
export function nextStep() {
  if (run) {
    pause();
  }
  gameManager.nextStep();
}

// Reset button
export function reset() {
  if (run) {
    pause();
  }
  gameManager.resetBoard();
}
