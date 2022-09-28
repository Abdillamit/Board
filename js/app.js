const board = document.querySelector("#board");
const colors = ["#e34c3c", "#8e55ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES_NUMBER = 600;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const colors = getRandomColor();
  element.style.backgroundColor = colors;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
