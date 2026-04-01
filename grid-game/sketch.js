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
let horizontal = true;
let startLines;
let allLines = [];


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
      showLineN(lines[y][x], x, y);
      showLineE(lines[y][x], x, y);
      showLineS(lines[y][x], x, y);
      showLineW(lines[y][x], x, y);
    }
  }
}


//NORTH
function showLineN(line.n, x, y){
  if (line.n === 0){
    stroke(200, 200, 200);
    strokeWeight(lineWidth);
    line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH);
    line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH);
  }
  if (line.n === 1){
    stroke(200, 0, 0);
    strokeWeight(lineWidth);
    line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH);
  }
}
//EAST
function showLineE(line.e, x, y){
  if (line.e === 0){
    stroke(200, 200, 200);
    strokeWeight(lineWidth);
    line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH);
    line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH);
  }
  if (line.e === 1){
    stroke(200, 0, 0);
    strokeWeight(lineWidth);
    line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH);
  }
}
//SOUTH
function showLineS(line.s, x, y){
  if (line.s === 0){
    stroke(200, 200, 200);
    strokeWeight(lineWidth);
    line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH);
    line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH);
  }
  if (line.s === 1){
    stroke(200, 0, 0);
    strokeWeight(lineWidth);
    line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH);
  }
}
//WEST
function showLineW(line.w, x, y){
  if (line.w === 0){
    stroke(200, 200, 200);
    strokeWeight(lineWidth);
    line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH);
    line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH);
  }
  if (line.w === 1){
    stroke(200, 0, 0);
    strokeWeight(lineWidth);
    line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH);
  }
}

function mousePressed(){
  let x = Math.floor((mouseX*LINE_LENGTH)/ cols);
  let y = Math.floor((mouseY*LINE_LENGTH)/ rows);
  lineCorrect(x, y);
  if (horizontal === true){
    toggleLinesX(x, y);
  }
  if (horizontal === false){
    toggleLinesY(x, y);
  }
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



function lineCorrect(x,y){

  if (mouseY <= y + lineWidth || mouseY >= y - lineWidth && mouseY <= y + lineWidth){
    horizontal = true;
  }

  else if (mouseX <= x + lineWidth || mouseX >= x - lineWidth){
    horizontal = false;
  }
}

// function lineCorrect(x,y){

//   if (x % cols >= 0 - lineWidth && x % cols <= 0 + lineWidth){
//     return horizontal = true;
//   }

//   else if (y % rows >= 0 - lineWidth && y % rows <= 0 + lineWidth){
//     return horizontal = false;
//   }
// }

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

  if( mouseY <= row*LINE_LENGTH + lineWidth && )
  let lineCoords = [
    n: North,
    e: East,
    w: West,
    s: South,
  ];
  

  for(let y = 0; y < rows; y ++){
    line.push([]);
    for(let x = 0; x < cols; x++){
      line[y].push(lineCoords);
    }
  }
  return line;
}