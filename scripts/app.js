let editedPlayer = 0;
const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");

const editPLayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPLayer2BtnElement = document.getElementById("edit-player-2-btn");

const cancelConfigBtnELement = document.getElementById("cancel-config-btn");

editPLayer1BtnElement.addEventListener("click", openPlayerConfig);
editPLayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnELement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);
