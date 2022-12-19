let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

for (let index = 0; index < 256; index++) {
  let grid = document.createElement("div");
  grid.classList.add("grid-div");
  document.querySelector(".container").appendChild(grid);
}

//E V E N T S

const gridDivs = document.querySelectorAll(".grid-div");

gridDivs.forEach((gridDiv) => {
  gridDiv.addEventListener("mouseover", changeDivColor);
  //gridDiv.addEventListener("mouseover", resetDivColor);
});

function changeDivColor() {
  this.style.backgroundColor = "black";
}
