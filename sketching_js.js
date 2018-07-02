
let angle = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  graphics = createGraphics(windowWidth, windowHeight);
  graphics. background(255);
}

var x = 500;
var y = 300;

let r = 1;
let g = 5;
let b = 1;

function draw() {

  x = x + random(-(((windowHeight * windowWidth) / 200) * 0.006), (((windowHeight * windowWidth) / 200) * 0.006));
  y = y + random(-(((windowHeight * windowWidth) / 200) * 0.006), (((windowHeight * windowWidth) / 200) * 0.006));
  /*
  if (r < 253){
    r += 1;
  } else if (r == 253){
    break
    r -= 1;
  }
  if (g < 253){
    g += 2;
  } else if (g == 253){
    g -= 1;
  }
  if (b < 253){
    b += 1;
  } else if (b == 253) {
    b -= 1;
  }
  */

  console.log(r, g, b);

  graphics.noStroke();
  graphics.fill(30, 70, 200, random(50, 50));
  graphics.ellipse(x, y, ((windowWidth * windowHeight) * 0.0002), ((windowWidth * windowHeight) * 0.0002));

  while(x < 0 || x > windowWidth){
    x = x + random(-(((windowHeight * windowWidth) / 200) * 0.006), (((windowHeight * windowWidth) / 200) * 0.006));
  }

  while(y < 0 || y > windowHeight){
    y = y + random(-(((windowHeight * windowWidth) / 200) * 0.006), (((windowHeight * windowWidth) / 200) * 0.006));
  }

  ambientLight(255);

  background(175);

  rectMode(CENTER);
  noStroke()
  rotateX(angle);
  rotateY(angle * 0.01);

  texture(graphics);
  torus(((windowWidth + windowHeight) / 2) * 0.2, ((windowWidth + windowHeight) / 2) * 0.06);

  angle += 0.01;
}