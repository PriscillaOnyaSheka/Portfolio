  createCanvas(600, 400);
  background(15, 225, 225);
  noStroke();

  fill(249, 252, 28);
  circle(width/2, height/2, 150);

  for (let i = 0; i < 8; i++) {
    let x = random(width);
    let y = random(height/2);
    drawCloud(x, y);
  }

function drawCloud(x, y) {
  fill(random(150, 255));

  let r1 = 100;
  let r2 = 60;

  circle(x, y, r1);
  circle(x - 50, y + 20, r2);
  circle(x + 50, y + 20, r2);
  rect(x - 50, y, 100, 50);
}