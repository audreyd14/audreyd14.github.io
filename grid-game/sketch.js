// rectangular grid array demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cell_size;
let line_length;
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
let redTurn = true;
let levelNumber = 5;
let redScore = 0;
let blueScore = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = levelNumber;
  cols = levelNumber;
  rectGrid = generateGrid(cols, rows);
  lineGrid = generateLines(cols,rows);
}

function draw() {
  resizeCanvas(windowWidth, windowHeight);
  background("black");
  cell_size = min(windowHeight / levelNumber, windowWidth / levelNumber);
  line_length = min(windowHeight / levelNumber, windowWidth / levelNumber);
  displayGrid();
  displayLines();
  scoreDisplay();
  playerTurn();
  scores();
}

// function chooseLevel(){
//   if 
// }


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

      rect(x * cell_size, y * cell_size, cell_size);
    }
  }
}

function keyPressed(){
  if (key === "1"){
    levelNumber = 5;
  }

  if (key === "2"){
    levelNumber = 10;
  }

  if (key === "3"){
    levelNumber = 15;
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

//display player's turn it is
function playerTurn(){
  if (redTurn){
    redTurn = true;
    fill("red");
    noStroke();
    textSize(windowHeight / 30);
    textAlign(RIGHT, TOP);
    text("Red Turn", windowWidth - line_length, windowHeight / 10);
  }
  if (!redTurn){
    redTurn = false;
    fill("blue");
    noStroke();
    textSize(windowHeight / 30);
    textAlign(RIGHT, TOP);
    text("Blue Turn", windowWidth - line_length, windowHeight / 10);
  }

}

//display scores
function scoreDisplay(){
  //red
  fill("red");
  noStroke();
  textSize(windowHeight / 30);
  textAlign(RIGHT, TOP);
  text(`Red score: ${redScore}`, windowWidth - line_length, (windowHeight / 10)*2);

  //blue
  fill("blue");
  noStroke();
  textSize(windowHeight / 30);
  textAlign(RIGHT, TOP);
  text(`Red score: ${blueScore}`, windowWidth - line_length, (windowHeight / 10)*2);
}

//counting scores
function scores(){
  if (completeBox === true && currentPlayer === 1){
    redScore++;
  }
  if (completeBox === true && currentPlayer === 2){
    blueScore++;
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
  line(x * line_length, y * line_length, x * line_length + line_length, y * line_length);

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
  line(x * line_length + line_length, y * line_length, x * line_length + line_length, y * line_length + line_length);
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
  line(x * line_length, y * line_length + line_length, x * line_length + line_length, y * line_length + line_length);
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
  line(x * line_length, y * line_length, x * line_length, y * line_length + line_length);
}


function mousePressed(){
  let x = Math.floor(mouseX / line_length);
  let y = Math.floor(mouseY / line_length);

  if  (x < 0 || x >= cols || y < 0 || y >= rows) {
    return;
  }
  let localX = mouseX % line_length;
  let localY = mouseY % line_length;

  let edge = getEdge(localX, localY);

  toggleEdge(x, y, edge);
}

function getEdge(localX, localY){
  let margin = lineWidth;

  if(localY < margin){
    return "n";
  }
  if (localX > line_length - margin){
    return "e";
  }
  if (localY > line_length - margin){
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
      redTurn = !redTurn;
      
    }
    else {
      currentPlayer = 1;
      redTurn = true;
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