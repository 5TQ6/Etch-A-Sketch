//VARIABLES >>
const grid = document.getElementById("container");
const clear = document.getElementById("clearBtn");
const gridBox = document.querySelectorAll(".box");
var slider = document.getElementById("sizeSlider");
var output = document.getElementById("value");
var val = slider.value;
let color = "black";


//EVENTS >>
window.onload = function() {
  makeGrid(val);
}
slider.oninput = function() { //shows the value of the slider 
    var newVal = slider.value;
  output.textContent = `${newVal} x ${newVal}`; 
  val = newVal; 
  clearGrid(); //clear the container first before making the grid to avoid overflow
  makeGrid(val);
}
clear.onclick = function() {
  clearGrid();
}

//FUNCTIONS >>
function makeGrid(gridNumber){
  let containerSize  = Number(960);
  let gridSize = Number(gridNumber);
  for(let rowCol = 0; rowCol < gridSize ** 2; rowCol++)
  {
    let gridCell = document.createElement("div");
    gridCell.style.height = `${ (containerSize / gridSize) - 2 }px`;
    gridCell.style.width = `${ (containerSize / gridSize) - 2}px`;
    gridCell.classList.add("box");
    gridCell.addEventListener('mouseover',colorSquare);
    grid.appendChild(gridCell);
  }
}
function clearGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild)
  }
}
function colorSquare() {
  this.style.backgroundColor = color;
}
function changeColor(choice){
  color = choice;

}