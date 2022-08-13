const grid = document.getElementById("container")
const clear = document.getElementById("clearBtn")
var slider = document.getElementById("sizeSlider");
var output = document.getElementById("value");
var val = slider.value;

//shows the value of the slider 
slider.oninput = function() {
    var newVal = slider.value;
  output.textContent = `${newVal} x ${newVal}`; 
  val = newVal;
  clearGrid();
  makeGrid(val);
}

window.onload = function() {
  makeGrid(val);
}

clear.onclick = function() {
  clearGrid();
}

function makeGrid(gridNumber){
  let containerSize  = Number(960);
  let gridSize = Number(gridNumber);
  for(let rowCol = 0; rowCol < gridSize ** 2; rowCol++)
  {
    let gridCell = document.createElement("div");
    gridCell.style.height = `${ (containerSize / gridSize) - 2 }px`;
    gridCell.style.width = `${ (containerSize / gridSize) - 2}px`;
    gridCell.classList.add("box");
    grid.appendChild(gridCell)
  }
  
}

function clearGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild)
  }
}