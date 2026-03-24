const CELL_SIZE = 50;
let grid;
let rows;
let cols;
let liveCell;
let deadCell;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = 2;
  cols = 2;
  grid = generateEmptyGrid(cols, rows);

}

function draw() {
  background(220);
  strokeWeight(10);
  liveCell = stroke(255, 0, 0);
  deadCell = stroke(100, 100, 100);
  displayGrid();
}

function displayGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      line(x * CELL_SIZE, y * CELL_SIZE, x * CELL_SIZE, y *CELL_SIZE+CELL_SIZE);
      line(x * CELL_SIZE, y * CELL_SIZE, x * CELL_SIZE+CELL_SIZE, y *CELL_SIZE);
    }
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

function toggleCell(x, y) {
  if (x >= 0 && x < cols && y >= 0 && y < rows) {
    if (grid[y][x] === liveCell) {
      grid[y][x] = deadCell;
    }
    else if (grid[y][x] === deadCell) {
      grid[y][x] = liveCell;
    }
  }
}

function mousePressed(){
  let x = mouseX;
  let y = mouseY;

  toggleCell(x,y);
}