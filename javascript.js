function populateGrid(size) {
  let container = document.querySelector(".container");
  let grid = document.querySelectorAll(".grid-div");

  let amount = size * size;
  let toggleFlag = true;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  grid.forEach((divs) => {
    divs.remove();
  });

  for (let index = 0; index < amount; index++) {
    let gridDiv = document.createElement("div");
    gridDiv.classList.add("grid-div");
    container.insertAdjacentElement("beforeend", gridDiv);
    gridDiv.addEventListener("mouseover", changeDivColor);
    gridDiv.addEventListener("click", toggleDrawing(toggleFlag));
  }
}

populateGrid(16);

function changeDivColor() {
  this.style.backgroundColor = "black";
}

const gridBtn = document.querySelector("#new-grid-btn");
gridBtn.addEventListener("click", getPrompGrid);

function getPrompGrid() {
  let promptAns = prompt("Number of squares per side for the new grid:");
  promptValidation(promptAns);
}

function promptValidation(promptAns) {
  if (promptAns < 2 || promptAns > 100) {
    alert("Try with a value greater than 1 and less than 101");
  } else {
    populateGrid(promptAns);
  }
}

const resetBtn = document.querySelector("#reset-grid-btn");
resetBtn.addEventListener("click", resetGrid);

function resetGrid() {
  let grid = document.querySelectorAll(".grid-div");
  grid.forEach((div) => {
    div.style.backgroundColor = "white";
  });
}

function toggleDrawing(toggleFlag) {
  if (toggleFlag) {
  }
}
