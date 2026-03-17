// Array/Object Notation Assignment
// Audrey DesChamp
// March 5/26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let timeDay;
let timeNight;
let question;
let houseBlue;
let houseGreen;
let housePink;
let houseYellow;
let houseImage;
let buildingImage;
let buildingBlue;
let buildingGreen;
let buildingPurple;
let buildingRed;
let buildingYellow;
let showDayMessage = false;
let showNightMessage = false;
let showInstructionsMessage = false;
let currentTime = "day";
let allBuildings = [];
let allHouses = [];
let startTime = 0;
let duration = 2000;
let scale;

//calling all images used throughout city builder
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  timeDay = loadImage("day-scene.png");
  timeNight = loadImage("night-scene.png");
  question = loadImage("question.png");
  houseBlue = loadImage("house-blue.png");
  houseGreen = loadImage("house-green.png");
  housePink = loadImage("house-pink.png");
  houseYellow = loadImage("house-yellow.png");
  buildingBlue = loadImage("building-blue.png");
  buildingGreen = loadImage("building-green.png");
  buildingPurple = loadImage("building-purple.png");
  buildingRed = loadImage("building-red.png");
  buildingYellow = loadImage("building-yellow.png");
};

//calling all draw functions
function draw() {
  resizeCanvas(windowWidth, windowHeight);
  scale = min(windowWidth/1000, windowHeight/1000);
  noStroke();
  dayNight();
  buttons();
  ground();
  instructions();
  messages();
  drawBuildings();
  drawHouses();
} 

//places question mark image on screen
function instructions(){

  image(question, 50, 150, 100, 100);
}

//rectangle for the grass below the buildings
function ground(){
  if (currentTime === "day"){
    fill(100, 200, 70);
    rect(0, windowHeight - windowHeight/5, windowWidth, windowHeight/5);
  }

  if (currentTime === "night"){
    fill(70, 150, 0);
    rect(0, windowHeight - windowHeight/5, windowWidth, windowHeight/5);
  }
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
    noTint();
  }

  else if (currentTime === "night"){
    image(timeNight, 0 , 0, windowWidth, windowHeight);
    tint(190);
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
    text(`Instructions: 
      ~ question mark - click to toggle instructions on/off
      ~ yellow button - change to day time 
      ~ grey button - change to night time
      ~ number keys 1-9 - place different buildings and houses
      ~ up/down arrows - increase/decrease size of last building placed
      ~ left/right arrows - increase/decrease size of last house placed
      ~ key x - erase all buildings`, windowWidth/10, windowHeight/8, windowWidth-windowWidth/10);
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
    showInstructionsMessage = false;
  }

  else if (mouseX > 105 && mouseX < 155 && mouseY > 25 && mouseY < 75){
    //changes background to night and shows night message for 2000ms
    currentTime = "night";
    startTime = millis();
    showNightMessage = true;
    showDayMessage = false;
    showInstructionsMessage = false;
  }

  if (mouseX > 50 && mouseX < 150 && mouseY > 150 && mouseY < 250){
    //toggle instructions button
    showInstructionsMessage = !showInstructionsMessage;
  }
}

function scalingBuildingsHouses(){

}
//uses keys 1,2,3 to make different building types with different w and h values, used in creating new building in the allBuildings array
function mouseClicked(){
  cityBuildings();
  cityHouses();
  function cityBuildings(){
    let newW;
    let newH;

    if (keyIsDown(49)){
      newW = buildingBlue.width;
      newH = buildingBlue.height;
      buildingImage = buildingBlue;
    }

    else if (keyIsDown(50)){
      newW = buildingGreen.width;
      newH = buildingGreen.height;
      buildingImage = buildingGreen;
    }

    else if (keyIsDown(51)){
      newW = buildingPurple.width;
      newH = buildingPurple.height;
      buildingImage = buildingPurple;
    }
    else if (keyIsDown(52)){
      newW = buildingRed.width;
      newH = buildingRed.height;
      buildingImage = buildingRed;
    }
    else if (keyIsDown(53)){
      newW = buildingYellow.width;
      newH = buildingYellow.height;
      buildingImage = buildingYellow;
    }
    
    else {
      return;
    }
    //creates new building in allBuildings array and pushes it to the end of array
    let building = {
      x: mouseX,
      w: newW,
      h: newH,
      image: buildingImage,
    };

    allBuildings.push(building);
  }

  function cityHouses(){
    let newW;
    let newH;

    if (keyIsDown(54)){
      newW = houseBlue.width;
      newH = houseBlue.height;
      houseImage = houseBlue;
    }

    else if (keyIsDown(55)){
      newW = houseGreen.width;
      newH = houseGreen.height;
      houseImage = houseGreen;
    }

    else if (keyIsDown(56)){
      newW = housePink.width;
      newH = housePink.height;
      houseImage = housePink;
    }

    else if (keyIsDown(57)){
      newW = houseYellow.width;
      newH = houseYellow.height;
      houseImage = houseYellow;
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

    let y = windowHeight - (windowHeight/5 + b.h * scale);
  
    image(b.image, b.x, y, b.w * scale, b.h * scale);
  }
}

function drawHouses(){
  for(let house of allHouses){
    
    let y = windowHeight - (windowHeight/5 + house.h * scale);

    image(house.image, house.x, y, house.w * scale, house.h * scale);
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
          b.w += b.w/10;
          b.h += b.h/10;
        }
      }

      else if (keyCode === DOWN_ARROW){

        if (b.w> 10 && b.h> 10){
          b.w -= b.w/10;
          b.h -= b.h/10;
        }
      }
    }
  }
  function houseSize(){
    if (allHouses.length > 0){

      let house = allHouses[allHouses.length - 1];

      if (keyCode === RIGHT_ARROW){

        if(house.w < windowWidth/4 && house.h < windowHeight/2){
          house.w += house.w/10;
          house.h += house.h/10;
        }
      }

      else if (keyCode === LEFT_ARROW){

        if (house.w> 10 && house.h> 10){
          house.w -= house.w/10;
          house.h -= house.h/10;
        }
      }
    }
  }
    
  //uses key x to erase all buildings and houses placed in the window
  if (key === "x"){
    eraseAll();
  }
}

