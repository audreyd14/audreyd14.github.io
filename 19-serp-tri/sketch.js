// serpinski triangle demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let initialTriangle = [
  {x:700, y:25},
  {x:200, y:700}, 
  {x:1200, y:700},
];
let theDepth = 0;
let theColors = ["red", "purple", "cyan", "green", "blue", "pink", "brown", "orange"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  sierpinski(initialTriangle, theDepth);
}

function draw() {

}

function mousePressed(){
  if(theDepth < 8){
    theDepth++;
    background("white");
    sierpinski(initialTriangle, theDepth);
  }
}

function sierpinski(points, depth){
  fill(theColors[depth]);
  triangle(points[0].x, points[0].y,
            points[1].x, points[1].y, 
            points[2].x, points[2].y);

  if( depth > 0){
    //top triangle
    sierpinski([points[0],
                midpoint(points[0], points[1]),
                midpoint(points[0], points[2])],
                depth -1);

    //bottom left triangle
    sierpinski([points[1],
                midpoint(points[0], points[1]),
                midpoint(points[1], points[2])],
                depth -1);
    
    //bottom right triangle
    sierpinski([points[2],
                midpoint(points[0], points[2]),
                midpoint(points[1], points[2])],
                depth -1);


  }
}

function midpoint(point1, point2){
  let midX = (point1.x + point2.x)/2;
  let midY = (point1.y + point2.y)/2;
  return {x:midX, y:midY};
}