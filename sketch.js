let xPositions = [];
let yPositions = [];
let sizes = [];

let wave = 5;
let waveHeight = 40;
let colors = [];


function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  colors = [
    color(255, 0, 100),
    color(255, 220, 0),
    color(0, 255, 200),
    color(150, 0, 255),
    color(0, 180, 255)
  ];

  for (let x = 20; x < width; x += 30) {
    for (let y = 20; y < height; y += 30) {
      xPositions.push(x);
      yPositions.push(y);
      sizes.push(random(10, 25));
    }

}

}


function draw() {
  // Set background to black
  background(0, 55);


    wave += 0.07;

  // loop thtough shapes
  for (let i = 0; i < xPositions.length; i++) {

    
    let x = xPositions[i];
    let y = yPositions[i] + sin(x * 0.03 + wave) * waveHeight;

    if (i % 2 == 0) {
      fill(colors[i % colors.length]);
    } else {
      fill(colors[(i + 2) % colors.length]);
    }

    // Draw a shape at its new place
    let size = sizes[i] + sin(wave + i) * 5;

    if (i % 3 == 0) {
      circle(x, y, size);
    } else {
      square(x, y, size);
    }
  }
}

// keyboard function
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    wave += 3;
    waveHeight += 3;

    // Reset wave height if it gets too large
    if (waveHeight > 60) {
      waveHeight = 15;
    }
  }
  

  return false;
}
