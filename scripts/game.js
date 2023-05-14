function startNewGame() {
  if (players[0].name && players[1].name) {
    gameAreaElement.style.display = "block";
    errorsOutputPlayersElement.textContent = "";
  } else {
    errorsOutputPlayersElement.textContent = "Please enter valid players name!";
    return;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function switchPlayer(params) {
  if (!activePlayer) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectedField = event.target;

  if (selectedField.tagName != "LI") {
    return;
  }
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] != 0) {
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  switchPlayer();
}
