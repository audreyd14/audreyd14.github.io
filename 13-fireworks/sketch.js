// Fireworks OOP
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Particle{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.radius = 3;
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
    this.opacity = 255;
  }

  update(){
    //fade over time
    this.opacity--;
    //move
    this.x += this.dx;
    this.y += this.dy;
  }

  display(){
    noStroke();
    fill(this.r, this.g, this.b, this.opacity);
    circle(this.x, this.y, this.radius*2);
  }

  isDead(){
    return this.opacity <= 0;
  }
}

let theFireworks = [];
const NUMBER_OF_FIREWORKS_PER_CLICK = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for(let someFirework of theFireworks){
    if (someFirework.isDead){
      //remove it
      let index = theFireworks.indexOf(someFirework);
      theFireworks.splice(index, 1);
    }
    else{
      someFirework.update();
      someFirework.display();
    }
  }
}

function mousePressed(){
  for(let i = 0; i < NUMBER_OF_FIREWORKS_PER_CLICK; i ++ ){
    let aFirework = new Particle(mouseX, mouseY);
    theFireworks.push(aFirework);
  }
}
