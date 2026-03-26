// rectangular grid array demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const CELL_SIZE = 50;
const LINE_LENGTH = 50;
let grid;
let lines;
let rows;
let cols;
let lineWidth = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = 10;
  cols = 10;
  grid = generateGrid(cols, rows);
  lines = generateLines(cols, rows);
}

function draw() {
  background(220);
  displayGrid();
  displayLines();
}

function displayGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      if (grid[y][x] === 0){
        fill("white");
      }
      rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);

    }
  }
}

function displayLines(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      if (lines[y][x] === 0){
        stroke(200, 200, 200);
        strokeWeight(lineWidth);
        line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH);
        line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH);
      }
      if (lines[y][x] === 1){
        stroke(200, 0, 0);
        strokeWeight(lineWidth);
        line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH);
      }
      if (lines[y][x] === 2){
        stroke(200, 0, 0);
        strokeWeight(lineWidth);
        line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH , y * LINE_LENGTH + LINE_LENGTH);
      }

    }
  }
}



function mousePressed(){
  let x = Math.floor(mouseX/LINE_LENGTH);
  let y = Math.floor(mouseY/LINE_LENGTH);

  toggleLinesX(x, y);
  toggleLinesY(x, y);
}

function toggleLinesX(x, y){
  if (x>=0 && x< cols && y >=0 && y< rows){
    if (lines[y][x] === 1){
      lines[y][x] = 0;
    }

    else if (lines[y][x] === 0){
      lines[y][x] = 1;
    }
  }
}

function toggleLinesY(x, y){
  if (x>=0 && x< cols && y >=0 && y< rows){
    if (lines[y][x] === 2){
      lines[y][x] = 0;
    }

    else if (lines[y][x] === 0){
      lines[y][x] = 2;
    }
  }
}

function lineCorrect(x,y){
  let onX = false;
  let onY = false;

  if (x % cols >= 0 - lineWidth && x % cols <= 0 + lineWidth){
    onX = true;
    return lineCorrect = true;
  }

  if (y % rows >= 0 - lineWidth && y % rows <= 0 + lineWidth){
    onY = true;
    return lineCorrect = false;
  }
}

// function toggleGrid(x, y){
//   if (x>=0 && x< cols && y >=0 && y< rows){
//     if (grid[y][x] === 1){
//       grid[y][x] = 0;
//     }

//     else if (grid[y][x] === 0){
//       grid[y][x] = 1;
//     }
//   }
// }

// function generateRandomGrid(cols, rows){
//   let newGrid = [];

//   for(let y = 0; y < rows; y ++){
//     newGrid.push([]);
//     for(let x = 0; x < cols; x++){
//       if(random(100) < 50){
//         newGrid[y].push(1);
//       }
//       else {
//         newGrid[y].push(0);
//       }
//     }
//   }
//   return newGrid;
// }

function keyPressed(){
  if (key === "r"){
    grid = generateRandomGrid(cols, rows);
  }
  if (key === "e"){
    grid = generateEmptyGrid(cols, rows);
  }
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
  let newLines = [];

  for(let y = 0; y < rows; y ++){
    newLines.push([]);
    for(let x = 0; x < cols; x++){
      newLines[y].push(0);
    }
  }
  return newLines;
}