import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import game from "./json/game.json";
import Wizard from "./js/wizard.js";

let gameLoop;

function setValues() {
  let wizOneName = document.getElementById("wiz-0-name");
  wizOneName.innerText = game.players[1].name;

  let wizTwoName = document.getElementById("wiz-1-name");
  wizTwoName.innerText = game.players[2].name;

  let wizOneHp = document.getElementById("wiz-0-health");
  wizOneHp.innerText = game.players[1].health;

  let wizTwoHp = document.getElementById("wiz-1-health");
  wizTwoHp.innerText = game.players[2].health;
}

function displayWizard() {
  setValues();
  gameLoop = setInterval(() => {
    setValues();
  }, 2000);

  document.querySelectorAll(".wiz-card").forEach((wiz) => {
    wiz.classList.remove("invisible");
  });
  document.getElementById("hit").classList.remove("invisible");
}

function startGame() {
  game.started = true;
  let players = Array(game.players);

  const wizardOne = new Wizard("hermione", 100);
  players.push(wizardOne);
  const wizardTwo = new Wizard("voldemort", 90);
  players.push(wizardTwo);
  game.players = players;

  displayWizard(0);
  displayWizard(1);
}

function handleStart() {
  startGame();
  this.parentElement.removeChild(this);
}

document.getElementById("start").addEventListener("click", handleStart);

addEventListener("unload",() => {
  clearInterval(gameLoop);
});