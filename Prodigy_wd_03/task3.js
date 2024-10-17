

var game = document.getElementById("game");
var turn = document.getElementById("playerturn");
var cp = "X";
var reset = document.getElementById("reset");
var cells = document.querySelectorAll(".cell");
var gameEnd = false; // Change to boolean false
var gameArray = new Array(9).fill("");

document.addEventListener("DOMContentLoaded", function () {
  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => cellClick(index));
  });
});

function cellClick(cellIndex) {
  if (gameEnd || gameArray[cellIndex] !== ""){
    return;
  }
  gameArray[cellIndex] = cp;
  cells[cellIndex].innerText = cp;
  checkForWin();
  cp = (cp === "X") ? "O" : "X";
  turn.textContent = `Turn: ${cp}`;
}

function checkForWin() {
  var wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 4, 7],
    [1, 4, 6],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (var i = 0; i < wins.length; i++) {
    var [a, b, c] = wins[i];
    if (gameArray[a] === gameArray[b] && gameArray[b] === gameArray[c] && gameArray[a] !== "") {
      gameEnd = true;
      alert(`Player ${gameArray[a]} wins!`);
      return;
    }
  }
  if (!gameArray.includes("")) {
    gameEnd = true;
    alert("It's a draw!");
  }
}

reset.addEventListener("click", function () {
  cells.forEach((cell, index) => {
    cell.innerText = "";
  });
  gameArray = new Array(9).fill("");
  gameEnd = false; // Reset gameEnd
  cp = "X"; // Reset cp
  turn.textContent = `Turn: ${cp}`;
  cells.forEach((cell) => {
    cell.classList.add("disco");
  });
  setTimeout(() => {
    cells.forEach((cell) => {
      cell.classList.remove("disco");
    });
  }, 2000);
});

