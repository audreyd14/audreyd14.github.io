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
  strokeWeight(lineWidth);
  line(x * LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH);
}
//SOUTH
function showLineS(x, y, cell){
  if (cell.s === 0){
    stroke(200);
  }
  if (cell.s === 1){
    stroke(200, 0, 0);
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
  strokeWeight(lineWidth);
  line(x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH, x * LINE_LENGTH + LINE_LENGTH, y * LINE_LENGTH + LINE_LENGTH);
}


// function mousePressed(){////////////////
//   let x = Math.floor(mouseX/LINE_LENGTH);
//   let y = Math.floor(mouseY/LINE_LENGTH);

//   toggleLines(x,y);
// }



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
  // //NORTH
  // if( mouseY <= rows*LINE_LENGTH + lineWidth && mouseY >= rows*LINE_LENGTH - lineWidth){
  //   north = 1;
  // }
  // else {
  //   north = north;
  // }
  // //EAST
  // if( mouseX <= cols*LINE_LENGTH + lineWidth && mouseX >= cols*LINE_LENGTH - lineWidth){
  //   east = 1;
  // }
  // else{
  //   east = east;
  // }
  // //SOUTH
  // if( mouseY <= rows*LINE_LENGTH + LINE_LENGTH + lineWidth && mouseY >= rows*LINE_LENGTH +LINE_LENGTH - lineWidth){
  //   south = 1;
  // }
  // else{
  //   south = south;
  // }
  // //WEST
  // if( mouseX <= cols*LINE_LENGTH + LINE_LENGTH + lineWidth && mouseX >= cols*LINE_LENGTH + LINE_LENGTH - lineWidth){
  //   west = 1;
  // }
  // else{
  //   west = west;
  // }
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