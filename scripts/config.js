function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
  playernameInputElement.focus();
  playernameInputElement.select();
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";

  formElement.firstElementChild.classList.remove("error");
  errorsOutputConfigElement.textContent = "";
  formElement.reset();
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim();

  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputConfigElement.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.querySelector("h3").textContent = enteredPlayername;
  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();
}
