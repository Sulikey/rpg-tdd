import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import game from "./json/game.json";
import Wizard from "./js/wizard.js";

let gameLoop;
let startButton;

function fight() {
  if (game.turn) {
    game.players[2].rollDamage();
    game.players[1].damage(game.players[2].roll);
    game.turn = 0;
  } else {
    game.players[1].rollDamage();
    game.players[2].damage(game.players[1].roll);
    game.turn = 1;
  }
}

function setValues() {
  let wizOneName = document.getElementById("wiz-0-name");
  wizOneName.innerText = game.players[1].name;

  let wizTwoName = document.getElementById("wiz-1-name");
  wizTwoName.innerText = game.players[2].name;

  let wizOneHp = document.getElementById("wiz-0-health");
  wizOneHp.innerText = game.players[1].health;

  let wizTwoHp = document.getElementById("wiz-1-health");
  wizTwoHp.innerText = game.players[2].health;

  game.players.forEach((wiz) => {
    if (wiz.health !== undefined) {
      if (wiz.health === 0) {
        game.started = false;
        document.getElementById("hit").classList.add("invisible");
        document.querySelectorAll(".wiz-card").forEach((wizCard) => {
          wizCard.classList.add("invisible");
        });
        document.getElementById("start-spot").appendChild(startButton);
      }
    }
  });
}

function displayWizard() {
  setValues();
  gameLoop = setInterval(() => {
    setValues();
  }, 400);

  document.querySelectorAll(".wiz-card").forEach((wiz) => {
    wiz.classList.remove("invisible");
  });
  document.getElementById("hit").classList.remove("invisible");
  document.getElementById("hit").addEventListener("click", fight);
}

function initPlayers() {
  game.players = [];
  let players = Array(game.players);

  const wizardOne = new Wizard("Hermione", 100);
  players.push(wizardOne);
  const wizardTwo = new Wizard("Lord Voldemort", 90);
  players.push(wizardTwo);
  game.players = players;
}

function startGame() {
  game.started = true;
  initPlayers();

  displayWizard(0);
  displayWizard(1);
}

function handleStart() {
  startGame();
  startButton = this;
  this.parentElement.removeChild(this);
}

document.getElementById("start").addEventListener("click", handleStart);

addEventListener("unload",() => {
  clearInterval(gameLoop);
});