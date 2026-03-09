// Array/Object Notation Assignment
// Audrey DesChamp
// March 5/26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let timeDay;
let timeNight;
let question;
let blueHouse;
let pinkHouse;
let orangeHouse;
let showDayMessage = false;
let showNightMessage = false;
let showInstructionsMessage = false;
let currentTime = "day";
let rgb = 0;
let allBuildings = [];
let allHouses = [];
let startTime = 0;
let duration = 2000;

//calling all images used throughout city builder
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  timeDay = loadImage("https://media.istockphoto.com/id/824800468/photo/sun-on-blue-sky-with-clouds.jpg?s=612x612&w=0&k=20&c=1XKIS7ggyyhj2oCZQluzIV579pkCBHq_-h9Vo4yNTmc=");
  timeNight = loadImage("https://images.stockcake.com/public/1/e/c/1ec187d3-dd14-430b-a417-86cc4eb85b1d_large/starry-night-sky-stockcake.jpg");
  question = loadImage("question.png");
  blueHouse = loadImage("blue-house.png");
  pinkHouse = loadImage("pink-house.png");
  orangeHouse = loadImage("orange-house.png");
}

//calling all draw functions
function draw() {

  noStroke();
  dayNight();
  buttons();
  ground();
  instructions();
  messages();
  drawBuildings();
} 

//places question mark image on screen
function instructions(){

  image(question, 50, 150, 100, 100);
}

//rectangle for the grass below the buildings
function ground(){

  fill(100, 200, 70);
  rect(0, windowHeight - windowHeight/5, windowWidth, windowHeight/5);
}

//circles for the day and night buttons
function buttons() {

  fill("yellow");
  circle(50, 50, 50);

  fill("grey");
  circle(130, 50, 50);
}

//sets currentTime to an image of day or night: this is changed by using the day and night buttons
function dayNight(){

  if (currentTime === "day") {
    image(timeDay, 0 , 0, windowWidth, windowHeight);
  }

  else if (currentTime === "night"){
    image(timeNight, 0 , 0, windowWidth, windowHeight);
  }
}

//all text used in the functional button messages
function messages(){

  //if button hasn't been clicked, do not show message
  if (millis() - startTime >= duration){
    showDayMessage = false;
    showNightMessage = false;
  }

  //day message text
  if (showDayMessage){
    fill("yellow");
    textSize(windowWidth/60);
    textAlign(CENTER);
    text("Changed time to day.", windowWidth/2, windowHeight/6);
  }

  //night message text
  if (showNightMessage){
    fill("grey");
    textSize(windowWidth/60);
    textAlign(CENTER);
    text("Changed time to night.", windowWidth/2, windowHeight/6);
  }

  //instructions message text
  if (showInstructionsMessage){
    fill("red");
    textSize(windowWidth/60);
    textAlign(LEFT);
    textWrap(WORD);
    text("Instructions: yellow button - change to day, grey button - change to night, key1 - building 1, key2 - building 2, key3 - building 3, up/down arrows - increase/decrease size of last building placed, mouse wheel up/down - lighten/darken building colour, key x - erase all buildings", windowWidth/10, windowHeight/8, windowWidth-windowWidth/10);
  }
}

//makes functional buttons using images from the buttons function, and instructions function 
function mousePressed(){

  if (mouseX > 25 && mouseX < 75 && mouseY > 25 && mouseY < 75){
    //changes background to day and shows day message for 2000ms
    currentTime = "day";
    startTime = millis();
    showDayMessage = true;
    showNightMessage = false;
  }

  else if (mouseX > 105 && mouseX < 155 && mouseY > 25 && mouseY < 75){
    //changes background to night and shows night message for 2000ms
    currentTime = "night";
    startTime = millis();
    showNightMessage = true;
    showDayMessage = false;
  }

  if (mouseX > 50 && mouseX < 150 && mouseY > 150 && mouseY < 250){
    //toggle instructions button
    showInstructionsMessage = !showInstructionsMessage;
  }
}

//uses keys 1,2,3 to make different building types with different w and h values, used in creating new building in the allBuildings array
function mouseClicked(){
  cityBuildings();
  cityHouses();
  function cityBuildings(){
    let newW;
    let newH;

    if (keyIsDown(49)){
      newW = 60;
      newH = 150;
    }

    else if (keyIsDown(50)){
      newW = 50;
      newH = 200;
    }

    else if (keyIsDown(51)){
      newW = 80;
      newH = 120;
    }
    
    else {
      return;
    }
    //creates new building in allBuildings array and pushes it to the end of array
    let building = {
      x: mouseX,
      w: newW,
      h: newH,
      colour: rgb,
    };

    allBuildings.push(building);
  }

  function cityHouses(){
    let newW;
    let newH;

    if (keyIsDown(52)){
      newW = blueHouse.width();
      newH = blueHouse.height();
      houseImage = blueHouse;
    }

    else if (keyIsDown(53)){
      newW = pinkHouse.width();
      newH = pinkHouse.height();
      houseImage = pinkHouse;
    }

    else if (keyIsDown(54)){
      newW = orangeHouse.width();
      newH = orangeHouse.height();
      houseImage = orangeHouse;
    }
    
    else {
      return;
    }
    //creates new building in allBuildings array and pushes it to the end of array
    let house = {
      x: mouseX,
      w: newW,
      h: newH,
      image: houseImage,
    };

    allHouses.push(house);
  }
}

//draws the a new building in the allBuilding array by using the determined values from mouseClicked function to get x, y, w, h and colour
function drawBuildings(){

  for (let b of allBuildings){

    let y = windowHeight - (windowHeight/5 + b.h);
  
    fill(b.colour);
    rect(b.x,y,b.w,b.h);
  }
}

function drawHouses(){
  for(let house of allHouses){
    
    let y = windowHeight - (windowHeight/5 + house.h);

    image(house.image, house.x, y, house.w, house.h);
  }
}
//function to erase the buildings
function eraseAll(){

  allBuildings = [];
  allHouses = [];
}

//uses the keyPressed function to change the size of the last building in the allBuildings array: up = bigger w and h, down = smaller w and h
function keyPressed(){
  buildingSize();
  houseSize();
  function buildingSize(){
    if (allBuildings.length > 0){

      let b = allBuildings[allBuildings.length - 1];

      if (keyCode === UP_ARROW){

        if(b.w < windowWidth/4 && b.h < windowHeight/2){
          b.w += 10;
          b.h += 10;
        }
      }

      else if (keyCode === DOWN_ARROW){

        if (b.w> 10 && b.h> 10){
          b.w -= 10;
          b.h -= 10;
        }
      }
    }
  }
  function houseSize(){
    if (allHouses.length > 0){

      let house = allHouses[allHouses.length - 1];

      if (keyCode === RIGHT_ARROW){

        if(house.w < windowWidth/4 && house.h < windowHeight/2){
          house.w += 10;
          house.h += 10;
        }
      }

      else if (keyCode === LEFT_ARROW){

        if (house.w> 10 && house.h> 10){
          house.w -= 10;
          house.h -= 10;
        }
      }
    }
  }
    
  //uses key x to erase all buildings and houses placed in the window
  if (key === "x"){
    eraseAll();
  }
}


//change new building's shade of grey using mouse wheel: up = lighter, down = darker
function mouseWheel(event){

  if (event.delta < 0){
    rgb  += 10;
  }

  else if (event.delta > 0) {
    rgb -= 10;
  }

  rgb = constrain(rgb, 0, 255);
}