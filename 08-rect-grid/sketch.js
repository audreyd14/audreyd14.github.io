// rectangular grid array demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const CELL_SIZE = 100;
let grid;
let rows;
let cols;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = Math.floor(height/CELL_SIZE);
  cols = Math.floor(width/CELL_SIZE);
  grid = generateRandomGrid(cols, rows);

}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      if (grid[y][x] === 1){
        fill("black");
      }
      if (grid[y][x] === 0){
        fill("white");
      }
      rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);

    }
  }
}

function mousePressed(){
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);

  toggleGrid(x, y);

  toggleGrid(x+1, y);
  toggleGrid(x-1, y);
  toggleGrid(x, y+1);
  toggleGrid(x, y-1);
}

function toggleGrid(x, y){
  if (x>=0 && x< cols && y >=0 && y< rows){
    if (grid[y][x] ===1){
      grid[y][x] = 0;
    }

    else if (grid[y][x] === 0){
      grid[y][x] = 1;
    }
  }
}

function generateRandomGrid(cols, rows){
  let newGrid = [];

  for(let y = 0; y < rows; y ++){
    newGrid.push([]);
    for(let x = 0; x < cols; x++){
      if(random(100) < 50){
        newGrid[y].push(1);
      }
      else {
        newGrid[y].push(0);
      }
    }
  }
  return newGrid;
}

function keyPressed(){
  if (key === "r"){
    grid = generateRandomGrid(cols, rows);
  }
  if (key === "e"){
    grid = generateEmptyGrid(cols, rows);
  }
}

function generateEmptyGrid(cols, rows){
  let newGrid = [];

  for(let y = 0; y < rows; y ++){
    newGrid.push([]);
    for(let x = 0; x < cols; x++){
      newGrid[y].push(0);
    }
  }
  return newGrid;
}