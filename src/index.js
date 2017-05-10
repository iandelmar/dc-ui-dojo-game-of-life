import { initGame } from './gameManager';
import * as uiControls from './uiControls';

window.onload = function () {
  document.getElementById('play').addEventListener('click', uiControls.play);
  document.getElementById('pause').addEventListener('click', uiControls.pause);
  document.getElementById('nextStep').addEventListener('click', uiControls.nextStep);
  document.getElementById('reset').addEventListener('click', uiControls.reset);
  initGame();
};
