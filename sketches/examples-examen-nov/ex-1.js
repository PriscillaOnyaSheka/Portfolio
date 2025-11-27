let allChars = "";
let phrase1X;
let phrase2X;
let phrase3X;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
  textFont('Consolas');
  textSize(12);
  textAlign(CENTER, CENTER);
  noLoop();

  for (let i = 0; i < 128; i++) {
    allChars += String.fromCharCode(i);
  }

  phrase1X = random(100, width - 100);
  phrase2X = random(100, width - 100);
  phrase3X = random(100, width - 100);
}

function draw() {
  background(0);

  let x = 0;
  while (x < width) {
    let lengte = int(random(5, 30));
    let helderheid = random(50, 100);
    fill(120, 100, helderheid);

    let y = 0;
    while (y < lengte * 16) {
      let r = round(random(0, 127));
      let char = allChars.substring(r, r + 1);
      text(char, x, y);
      y += 16;
    }

    x += 20;
  }

  textSize(60);
  textAlign(CENTER, CENTER);

  fill(60, 100, 100, 0.6);
  text("Follow", phrase1X, height / 2 - 60);

  fill(60, 10, 100, 0.6);
  text("the white", phrase2X, height / 2);

  fill(60, 100, 100, 0.6);
  text("rabbit", phrase3X, height / 2 + 60);
}