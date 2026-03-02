// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let timeDay;
let timeNight;
let x;
let y;
let rgb = 0;
let w;
let h;
function setup() {
  createCanvas(windowWidth, windowHeight);
  timeDay = loadImage("https://media.istockphoto.com/id/824800468/photo/sun-on-blue-sky-with-clouds.jpg?s=612x612&w=0&k=20&c=1XKIS7ggyyhj2oCZQluzIV579pkCBHq_-h9Vo4yNTmc=");
  timeNight = loadImage("https://images.stockcake.com/public/1/e/c/1ec187d3-dd14-430b-a417-86cc4eb85b1d_large/starry-night-sky-stockcake.jpg");
}

function draw() {
  buttons();
  ground();
} 

function buttons() {
  fill("yellow");
  circle(50, 50, 50);

  fill("grey");
  circle(130, 50, 50);
}

function ground(){
  fill("green");
  noStroke();
  rect(0, windowHeight - windowHeight/5, windowWidth, windowHeight/5);
}
function mousePressed(){
  if (mouseX > 25 && mouseX < 75 && mouseY > 25 && mouseY < 75){
    image(timeDay, 0 , 0);
    return background(timeDay);
  }
  else if (mouseX > 105 && mouseX < 155 && mouseY > 25 && mouseY < 75){
    image(timeNight, 0 , 0);
    return background(timeNight);
  }
}

function mouseClicked(){
  buildings();
}

function buildings(){
  x = mouseX;
  if (keyIsDown(49)){
    w = 60;
    h = 150;
    y = windowHeight - (windowHeight/5 + h);
    fill(rgb);
    rect(x, y, w, h);
  }
  if (keyIsDown(50)){
    w = 50;
    h = 200;
    y = windowHeight - (windowHeight/5 + h);
    fill(rgb);
    rect(x, y, w, h);
  }
  if (keyIsDown(51)){
    w = 80;
    h = 120;
    y = windowHeight - (windowHeight/5 + h);
    fill(rgb);
    rect(x, y, w, h);
  }
}

function keyPressed(){
  if (key === 38){
    w += w;
    h += h;
  }
  else if (key === 40){
    w -= w;
    h -= h;
  }
}

function mouseWheel(event){
  if (event.delta < 0){
    rgb  += 10;
  }
  else if (event.delta > 0) {
    rgb -= 10;
  }
}
//city builder: 3 building types (1, 2 , 3), change color with r(up or down), g(up or down), b(up or down), change building size with mouse wheel up/down, building follows mouse cursor until clicked into place, bonus: change night/day with n/d
