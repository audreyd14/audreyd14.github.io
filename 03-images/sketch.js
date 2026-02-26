// image demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let marioImg;

function preload() {
  marioImg = loadImage("mario.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(marioImg, mouseX, mouseY, marioImg.width*10, marioImg.height*0.25);
}
