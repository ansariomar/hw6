var rate = 0.1;
var x = 0;
var y = 0;
var target = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(0);

  fill(255);
  ellipse(x, y, 50);
  x = mouseX * rate + x * (1 - rate); // rate is 0.1, or 10% -- (1-rate) is 0.9, or 90%
  y = mouseY * rate + y * (1 - rate);
}
