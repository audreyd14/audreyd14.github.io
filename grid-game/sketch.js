// rectangular grid array demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gameState = "start"; // start, play, gameover
let cell_size; //width and height of each cell
let line_length; //length of each line
let rectGrid; //grid of squares 
let lineGrid; //grid of lines
let rows; // amount of vertical rows
let cols; // amount of horizontal columns
let lineWidth = 10; // width of each line
let north = 0; // top line in each cell
let east = 0; //right line in each cell
let south = 0; // bottom line in each cell
let west = 0; // left line in each cell
let currentPlayer = 1; //1 = red, 2 = blue
let redTurn = true; //is it red turn?
let levelNumber = 5; //amount of rows/cols in each level
let redScore = 0; //red team points
let blueScore = 0; // blue team points
let startAndOverBackground = [70, 20, 20]; // background colour for the start and gameover screen
let bigTextSize;// larger text font size
let smallTextSize;// smaller text font size
let textSpacing; // distance b/t lines of text


function setup() {
  createCanvas(windowWidth, windowHeight);
  textStyle(BOLD);
  textFont('Courier New');
  rows = levelNumber;
  cols = levelNumber;
  rectGrid = generateGrid(cols, rows);
  lineGrid = generateLines(cols,rows);
  cell_size = min(windowHeight / levelNumber, windowWidth / levelNumber); //takes smallest height/width and divides it by 5, 10, or 15 to get the correct cell size
  line_length = cell_size;
}


function draw() {
  resizeCanvas(windowWidth, windowHeight);

  bigTextSize = min(windowWidth/15, windowHeight/15);//changes text size/spacing depending on window size
  smallTextSize = min(windowWidth/25, windowHeight/25);
  textSpacing = min(windowWidth/10, windowHeight/10);

  if (gameState === "start"){
    //start screen shows
    startGame();
  }
  else if(gameState === "playing"){
    //play screen shows
    playGame();
  }
  else if(gameState === "game over"){
    //game over screen shows
    gameOver();
  }
}


//start game
function startGame(){
  //canvas settings
  resizeCanvas(windowWidth, windowHeight);
  background(startAndOverBackground);

  //text settings
  fill("white");
  noStroke();
  textAlign(CENTER, CENTER);

  //text displayed
  textSize(bigTextSize);
  text("Lines and Boxes", width/2, height/3);

  textSize(smallTextSize);
  text("Press 1 for 5x5 grid", width/2, height/2);
  text("Press 2 for 10x10 grid", width/2, height/2 + textSpacing);
  text("Press 3 for 15x15 grid", width/2, height/2 + textSpacing*2);
}


//play game
function playGame(){
  //cell settings
  rows = levelNumber;
  cols = levelNumber;
  cell_size = min(windowHeight / levelNumber, windowWidth / levelNumber);
  line_length = cell_size;

  //canvas settings
  resizeCanvas(windowWidth, windowHeight);
  background("black");

  //game play functions
  displayGrid();
  displayLines();
  playerTurn();
  scoreDisplay();

  // check if game is over
  if (redScore + blueScore === rows*cols){
    gameState = "game over";
  }
}


//winning the game
function gameOver(){
  //canvas settingd
  resizeCanvas(windowWidth, windowHeight);
  background(startAndOverBackground);

  //text settings
  fill("white");
  textAlign(CENTER, CENTER);
  textSize(bigTextSize);

  if (redScore > blueScore){
    //if red has more boxes claimed
    fill("red");
    text("Red Wins!", windowWidth/2, windowHeight/2);
  }
  else if (blueScore > redScore){
    //if blue has more boxes claimed
    fill("blue");
    text("Blue Wins!", windowWidth/2, windowHeight/2);
  }
  else {
    //if tied
    text("Tie Game!", windowWidth/2, windowHeight/2)
  }

  //restart game
  textSize(smallTextSize);
  text("Press R to restart", windowWidth/2, textSpacing*6)
}


//when keys are pressed
function keyPressed(){
  //change levels when key pressed
  if (key === "1"){//press key 1
    levelNumber = 5;
  }

  if (key === "2"){//press key 2
    levelNumber = 10;
  }

  if (key === "3"){//press key 3
    levelNumber = 15;
  }

  // regenerate grid when level changes
  rows = levelNumber;
  cols = levelNumber;
  rectGrid = generateGrid(cols, rows);
  lineGrid = generateLines(cols,rows);
  cell_size = min(windowHeight / levelNumber, windowWidth / levelNumber);
  line_length = cell_size;
  
  // reset scores when level changes
  redScore = 0;
  blueScore = 0;
  currentPlayer = 1;//red
  redTurn = true;

  //reset game state to playing when restarting
  gameState = "playing";
  //can press any key to restart but I said "r" because that makes more sense to the player
}




//display player's turn it is
function playerTurn(){
  if (redTurn){//red players turn
    fill("red");
    noStroke();
    textSize(smallTextSize);
    textAlign(RIGHT, TOP);
    text(`Red Turn
      click a line
      complete as many boxes as you can!`, windowWidth - textSpacing, textSpacing);
    }
    
    if (!redTurn){//blue players turn
      fill("blue");
      noStroke();
      textSize(smallTextSize);
      textAlign(RIGHT, TOP);
      text(`Blue Turn
        click a line
        complete as many boxes as you can!`, windowWidth - textSpacing, textSpacing);
      }
    }
    
    //display scores
    function scoreDisplay(){
      //red score
      fill("red");
      noStroke();
      textSize(smallTextSize);
      textAlign(RIGHT, TOP);
      text(`Red score: ${redScore}`, windowWidth - textSpacing, textSpacing*6);
      
      //blue score
      fill("blue");
      noStroke();
      textSize(smallTextSize);
      textAlign(RIGHT, TOP);
      text(`Blue score: ${blueScore}`, windowWidth - textSpacing, textSpacing*7);
    }

    
    //counting scores
    function scores(){
      if (currentPlayer === 1){//red turn ?
        redScore++;//add 1 when box is completed by red
      }
      else {
        blueScore++; //add 1 when box is completed by blue
      }
    }

    
//uses nested loops/2d arrays to display the grid of boxes
function displayGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      if (rectGrid[y][x] === 0){
        //if cell not completed
        fill(255);
      }
      if (rectGrid[y][x] === 1){
        //if cell completed by red
        fill(255, 150, 150);
      }
      if (rectGrid[y][x] === 2){
        //if cell completed by blue
        fill(150, 150, 255);
      }
      //draw cell
      rect(x * cell_size, y * cell_size, cell_size);
    }
  }
}



//display the grid of lines with nested loops /2d arrays
function displayLines(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){

      let cell = lineGrid[y][x]; //calls  on specific cell
      
      //show every side line on a cell
      showLineN(x, y, cell);
      showLineE(x, y, cell);
      showLineS(x, y, cell);
      showLineW(x, y, cell);
    }
  }
}

//NORTH line
function showLineN(x, y, cell){
  if (cell.n === 0){//if line not clicked yet
    stroke("grey");
  }
  if (cell.n === 1){//if line clicked by red
    stroke("red");
  }
  if (cell.n === 2){//if line clicked by blue
    stroke("blue");
  }
  //weight and direction of line
  strokeWeight(lineWidth);
  line(x * line_length, y * line_length, x * line_length + line_length, y * line_length);
}


//EAST line
function showLineE(x, y, cell){
  if (cell.e === 0){//if line not clicked yet
    stroke("grey");
  }
  if (cell.e === 1){
    stroke("red");//if line clicked by red
  }
  if (cell.e === 2){//if line clicked by blue
    stroke("blue");
  }
  //weight and direction of line
  strokeWeight(lineWidth);
  line(x * line_length + line_length, y * line_length, x * line_length + line_length, y * line_length + line_length);
}


//SOUTH line
function showLineS(x, y, cell){
  if (cell.s === 0){//if line not clicked yet
    stroke("grey");
  }
  if (cell.s === 1){
    stroke("red");//if line clicked by red
  }
  if (cell.s === 2){
    stroke("blue");//if line clicked by blue
  }
  //weight and direction of line
  strokeWeight(lineWidth);
  line(x * line_length, y * line_length + line_length, x * line_length + line_length, y * line_length + line_length);
}


//WEST line
function showLineW(x, y, cell){
  if (cell.w === 0){//if line not clicked yet
    stroke("grey");
  }
  if (cell.w === 1){
    stroke("red");//if line clicked by red
  }
  if (cell.w === 2){
    stroke("blue");//if line clicked by blue
  }
  //weight and direction of line
  strokeWeight(lineWidth);
  line(x * line_length, y * line_length, x * line_length, y * line_length + line_length);
}


//when mouse is pressed, change the variables of a line
function mousePressed(){
  let x = Math.floor(mouseX / line_length);//what column?
  let y = Math.floor(mouseY / line_length);//what row?

  //if off of screen do not return anything
  if  (x < 0 || x >= cols || y < 0 || y >= rows) {
    return;
  }

  let localX = mouseX % line_length; //what veritcal line?
  let localY = mouseY % line_length; //what horizontal line?

  let edge = getEdge(localX, localY); //exact location of line clicked

  toggleEdge(x, y, edge); //toggle the color change on the line
}


//what edge of the cell was clicked
function getEdge(localX, localY){
  let margin = lineWidth;

  if(localY < margin){//clicked top line?
    return "n";
  }
  if (localX > line_length - margin){//clicked right line?
    return "e";
  }
  if (localY > line_length - margin){//clicked bottom line?
    return "s";
  }
  if (localX < margin){//clicked left line?
    return "w";
  }

  return null; //clicked no line?
}


//change the line variables
function toggleEdge(x, y, edge){
  if (!edge){//no line clicked
    return;
  }

  let cell = lineGrid[y][x];//what cell?

  if (cell[edge] === 1 || cell[edge] === 2){//if cell edge is red or blue it cannot be changed
    return;
  }

  cell[edge] = currentPlayer; //clicked line will be either blue or red depening on who the current player is

  //update neighboring cell's adjacent line
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
  let madeBox = false;//no box made

  if (completeBox(x, y)){
    madeBox = true;//box made
  }

  // check neighbor cell too
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

  //switch player turn if no box made
  if (!madeBox){
    if (currentPlayer === 1){
      currentPlayer = 2;//blue turn
      redTurn = !redTurn; // not red turn
      
    }
    else {
      currentPlayer = 1;//red turn?
      redTurn = true;
    }
  }
}


//has a box been completed
function completeBox(x, y){
  let cell = lineGrid[y][x];//what cell?

  if (
    cell.n !== 0 &&//north line is blue or red
    cell.e !== 0 &&//east line is blue or red
    cell.s !== 0 &&//south line is blue or red
    cell.w !== 0 &&//west line is blue or red
    rectGrid[y][x] === 0 //cell is not completed already
  ){
    rectGrid[y][x] = currentPlayer;//give this cell to the current player who placed the completing line
    scores(); //update score
    return true; //tell the toggle function that a box has been completed
  }
  
  return false;//no box made
}


//generate a 2d array for the grid of boxes
function generateGrid(cols, rows){
  let newGrid = [];//empty array

  for(let y = 0; y < rows; y ++){
    newGrid.push([]);//push empty rows
    for(let x = 0; x < cols; x++){
      newGrid[y].push(0); //push blank boxes
    }
  }
  return newGrid;
}


//generate a 2d array for the grid of lines
function generateLines(cols, rows){
  let allLines = []; //empty array

  for(let y = 0; y < rows; y ++){
    allLines.push([]);//push empty rows
    for(let x = 0; x < cols; x++){
      allLines[y].push({//push blank lines for each edge of a cell
        n: 0,//north
        e: 0,//east
        s: 0,//south
        w: 0,//west
      });
    }
  }
  return allLines;
}