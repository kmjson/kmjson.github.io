let fireworks = [];
let gravity;
let letter;
let textCounter = 0;
let font;

let counter = 0;
let pos = [0,150,300,450,600,0,150,300,450,0,150,300];

function preload() {
  font = loadFont('fonts/ARIMO-ITALIC.TTF');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  letter = 'HAPPY BDAY MOM'.replace(/\s/g, '').split('');
  textCounter = 0;
  gravity = createVector(0, 0.2);
  addFirework();
  setInterval(addFirework, 2000);
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  renderFireworks();
}

function addFirework() {
  fireworks.push(new Firework(pos[counter%12]+10));
  counter++;
}

function renderFireworks() {
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}