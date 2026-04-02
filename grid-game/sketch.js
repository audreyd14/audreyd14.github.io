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
      if (rectGrid[y][x] === 0){
        fill("white");
      }
      rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);

    }
  }
}

function displayLines(){
  for (let i of allLines){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      showLineN(i.n, x, y);
      showLineE(i.e, x, y);
      showLineS(i.s, x, y);
      showLineW(i.w, x, y);
    }
  }
}
}


//NORTH
function showLineN(){
  if (i.n === 0){
    stroke(200, 200, 200);
    strokeWeight(lineWidth);
    line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH);
  }
  if (i.n === 1){
    stroke(200, 0, 0);
    strokeWeight(lineWidth);
    line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH);
  }
}
//EAST
function showLineE(){
  if (i.e === 0){
    stroke(200, 200, 200);
    strokeWeight(lineWidth);
    line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH);
  }
  if (i.e === 1){
    stroke(200, 0, 0);
    strokeWeight(lineWidth);
    line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH);
  }
}
//SOUTH
function showLineS(){
  if (i.s === 0){
    stroke(200, 200, 200);
    strokeWeight(lineWidth);
    line(x * LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH, x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH);
  }
  if (i.s === 1){
    stroke(200, 0, 0);
    strokeWeight(lineWidth);
    line(x * LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH, x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH);
  }
}
//WEST
function showLineW(){
  if (i.w === 0){
    stroke(200, 200, 200);
    strokeWeight(lineWidth);
    line(x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH);
  }
  if (i.w === 1){
    stroke(200, 0, 0);
    strokeWeight(lineWidth);
    line(x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH);
  }
}

function mousePressed(){////////////////
  let x = Math.floor(mouseX/LINE_LENGTH);
  let y = Math.floor(mouseY/LINE_LENGTH);

  toggleLinesX(x,y);
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
  let north;
  let east;
  let south;
  let west;
  //NORTH
  if( mouseY <= rows*LINE_LENGTH + lineWidth && mouseY >= rows*LINE_LENGTH - lineWidth){
    north = 1;
  }
  //EAST
  if( mouseX <= cols*LINE_LENGTH + lineWidth && mouseX >= cols*LINE_LENGTH - lineWidth){
    east = 1;
  }
  //SOUTH
  if( mouseY <= rows*LINE_LENGTH + LINE_LENGTH + lineWidth && mouseY >= rows*LINE_LENGTH +LINE_LENGTH - lineWidth){
    south = 1;
  }
  //WEST
  if( mouseX <= cols*LINE_LENGTH + LINE_LENGTH + lineWidth && mouseX >= cols*LINE_LENGTH + LINE_LENGTH - lineWidth){
    west = 1;
  }

  let lineCoords = [
    n: north,
    e: east,
    w: west,
    s: south,
  ];
  

  for(let y = 0; y < rows; y ++){
    line.push([]);
    for(let x = 0; x < cols; x++){
      line[y].push(lineCoords);
    }
  }
  return line;
}