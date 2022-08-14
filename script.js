//VARIABLES >>
const clear = document.getElementById("clearBtn");
const gridBox = document.querySelectorAll(".box");
var slider = document.getElementById("sizeSlider");
var output = document.getElementById("value");
var val = slider.value;
let board = document.querySelector("#container")
let color = "black";
let click = true;

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
function makeGrid(size) {
  
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.classList.add("box");
    square.addEventListener('mouseover',colorSquare);
    board.insertAdjacentElement("beforeend", square);
  }
}
function clearGrid() {
  let squares = board.querySelectorAll("div")
  squares.forEach((div) => div.style.backgroundColor = "white")
}
function colorSquare() {
  if (click)
  {
    if (color === 'random'){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
  else {
  this.style.backgroundColor = color;
    }
  }
}
function changeColor(choice){
  color = choice;
}

document.querySelector("#container").addEventListener("click", () => {
  click = !click;
})