let size = 16;

for (let index = 0; index < 256; index++) {
  let grid = document.createElement("div");
  grid.classList.add("grid-div");
  document.querySelector(".container").appendChild(grid);
}

//E V E N T S

const gridDivs = document.querySelectorAll(".grid-div");

gridDivs.forEach((gridDiv) => {
  gridDiv.addEventListener("mouseover", changeDivColor);
});

function changeDivColor() {
  this.style.backgroundColor = "black";
}

const gridBtn = document.querySelector("#btn-grid-div button");

gridBtn.addEventListener("click", getPrompGrid);

function getPrompGrid() {
  prompt("Number of squares per side for the new grid:");
}
