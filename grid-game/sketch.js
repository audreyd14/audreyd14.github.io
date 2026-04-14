// rectangular grid array demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const CELL_SIZE = 50;
const LINE_LENGTH = 50;
let rectGrid;
let lineGrid;
let lines;
let rows;
let cols;
let lineWidth = 10;
let north = 0;
let east = 0;
let south = 0;
let west = 0;
let currentPlayer = 1; //1 = red, 2 = blue


function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = 10;
  cols = 10;
  rectGrid = generateGrid(cols, rows);
  lineGrid = generateLines(cols,rows);
}

function draw() {
  background(220);
  displayGrid();
  displayLines();
}

function displayGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      if (rectGrid[y][x] === 0){
        fill(255);
      }
      if (rectGrid[y][x] === 1){
        fill(255, 150, 150);
      }
      if (rectGrid[y][x] === 2){
        fill(150, 150, 255);
      }

      rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function displayLines(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){

      let cell = lineGrid[y][x];

      showLineN(x, y, cell);
      showLineE(x, y, cell);
      showLineS(x, y, cell);
      showLineW(x, y, cell);
    }
  }
}

//NORTH
function showLineN(x, y, cell){
  if (cell.n === 0){
    stroke(200);
  }
  if (cell.n === 1){
    stroke(200, 0, 0);
  }
  if (cell.n === 2){
    stroke(0,0, 200);
  }
  strokeWeight(lineWidth);
  line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH);

}
//EAST
function showLineE(x, y, cell){
  if (cell.e === 0){
    stroke(200);
  }
  if (cell.e === 1){
    stroke(200, 0, 0);
  }
    if (cell.e === 2){
    stroke(0,0, 200);
  }
  strokeWeight(lineWidth);
  line(x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH);
}
//SOUTH
function showLineS(x, y, cell){
  if (cell.s === 0){
    stroke(200);
  }
  if (cell.s === 1){
    stroke(200, 0, 0);
  }
    if (cell.s === 2){
    stroke(0,0, 200);
  }
  strokeWeight(lineWidth);
  line(x * LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH, x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH);
}
//WEST
function showLineW(x, y, cell){
  if (cell.w === 0){
    stroke(200);
  }
  if (cell.w === 1){
    stroke(200, 0, 0);
  }
    if (cell.w === 2){
    stroke(0,0, 200);
  }
  strokeWeight(lineWidth);
  line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH);
}


function mousePressed(){
  let x = Math.floor(mouseX / LINE_LENGTH);
  let y = Math.floor(mouseY / LINE_LENGTH);

  if  (x < 0 || x >= cols || y < 0 || y >= rows) {
    return;
  }
  let localX = mouseX % LINE_LENGTH;
  let localY = mouseY % LINE_LENGTH;

  let edge = getEdge(localX, localY);

  toggleEdge(x, y, edge);
}

function getEdge(localX, localY){
  let margin = lineWidth;

  if(localY < margin){
    return "n";
  }
  if (localX > LINE_LENGTH - margin){
    return "e";
  }
  if (localY > LINE_LENGTH - margin){
    return "s";
  }
  if (localX < margin){
    return "w";
  }

  return null;
}

function toggleEdge(x, y, edge){
  if (!edge){
    return;
  }
  let cell = lineGrid[y][x];

  if (cell[edge] === 1 || cell[edge] === 2){
    return;
  }

  cell[edge] = currentPlayer;

  //update neighbor
  if(edge === "n" && y>0){
    lineGrid[y-1][x].s = currentPlayer;
  }
  if(edge === "e" && x < cols - 1){
    lineGrid[y][x+1].w = currentPlayer;
  }
  if(edge === "s" && y < rows - 1){
    lineGrid[y+1][x].n = currentPlayer;
  }
  if(edge === "w" && x > 0){
    lineGrid[y][x-1].e = currentPlayer;
  }

  // check for boxes
  let madeBox = false;

  if (completeBox(x, y)){
    madeBox = true;
  }

  // check neighbor too
  if (edge === "n" && y > 0){
    if (completeBox(x, y-1)) {
      madeBox = true;
    }
  }
  if (edge === "e" && x < cols - 1){
    if (completeBox(x+1, y)) {
      madeBox = true;
    }
  }
  if (edge === "s" && y < rows - 1){
    if (completeBox(x, y+1)) {
      madeBox = true;
    }
  }
  if (edge === "w" && x > 0){
    if (completeBox(x-1, y)) {
      madeBox = true;
    }
  }

  //switch turn if no box made
  if (!madeBox){
    if (currentPlayer === 1){
      currentPlayer = 2;
    }
    else {
      currentPlayer = 1;
    }
  }
}



function completeBox(x, y){
  let cell = lineGrid[y][x];

  if (
    cell.n !== 0 &&
    cell.e !== 0 &&
    cell.s !== 0 &&
    cell.w !== 0 &&
    rectGrid[y][x] === 0 //not completed already
  ){
    rectGrid[y][x] = currentPlayer;
    return true;
  }
  
  return false;
}

function generateGrid(cols, rows){
  let newGrid = [];

  for(let y = 0; y < rows; y ++){
    newGrid.push([]);
    for(let x = 0; x < cols; x++){
      newGrid[y].push(0);
    }
  }
  return newGrid;
}


function generateLines(cols, rows){

  let allLines = []; 
  for(let y = 0; y < rows; y ++){
    allLines.push([]);
    for(let x = 0; x < cols; x++){
      allLines[y].push({
        n: 0,
        e: 0,
        s: 0,
        w: 0,
      });
    }
  }
  return allLines;
}