// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let timeDay;
let timeNight;
let dayNight = 255;
let x;
let y;
function setup() {
  createCanvas(500, 400);
  timeDay = loadImage("https://media.istockphoto.com/id/824800468/photo/sun-on-blue-sky-with-clouds.jpg?s=612x612&w=0&k=20&c=1XKIS7ggyyhj2oCZQluzIV579pkCBHq_-h9Vo4yNTmc=");
  timeNight = loadImage("https://images.stockcake.com/public/1/e/c/1ec187d3-dd14-430b-a417-86cc4eb85b1d_large/starry-night-sky-stockcake.jpg");
}

function draw() {
  background(dayNight);
  keyPressed();
}
  
//   dayNight();
// }


function keyPressed(){
  dayNight();
  buildings();
  function dayNight(){
    if (key === "d"){//day sky
      image(timeDay, 0 , 0);
      return background(timeDay);
    }  
    if (key === "n"){//night sky
      image(timeNight, 0 , 0);
      return background(timeNight);
    } 
  }
  
  function buildings(){
    let w;
    let h;
    x = mouseX;
    y = mouseY;
    if (key === "1"){
      w = 60;
      h = 150;
      fill(0);
      rect(x, y, w, h)
      }
    if (key === "2"){
      w = 50;
      h = 200;
      fill(0);
      rect(x, y, w, h)
    }
    if (key === "3"){
      w = 80;
      h = 120;
      fill(0);
     rect(x, y, w, h)
    }

  }
}

//city builder: 3 building types (1, 2 , 3), change color with r(up or down), g(up or down), b(up or down), change building size with mouse wheel up/down, building follows mouse cursor until clicked into place, bonus: change night/day with n/d
