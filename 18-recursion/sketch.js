// circle recursion demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawCircle(width/2, width/2);
}

function drawCircle(x, radius){
  let fillColor = random(0, 255);
  fill(fillColor);
  circle(x, height/2, radius*2);
  //exit clause
  if(radius > 10){
    drawCircle(x-radius/2, radius/2);
    drawCircle(x+radius/2, radius/2);
  }
}