



let font;
let textPath;

function preload() {
  font = loadFont('assets/neodgm.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(10);
  textAlign(0, 500);
  textPath = font.textToPoints('HSU GRADUATION SHOW COMMING SOON...', width/18, height/2, 100, {
    sampleFactor: 0.3,
    simplifyThreshold: 0
  });
}



function draw() {
  background(0);
  for (let i = 0; i < textPath.length; i++) {
    let d = dist(mouseX, mouseY, textPath[i].x, textPath[i].y);
    let maxDist = 1000;
    if (d < maxDist) {
      let size = map(d, 20, maxDist, 5, 10);
      fill(0 , 0, 255, 250);
      noStroke();
      ellipse(textPath[i].x, textPath[i].y, size, size);
    }
  }
}

