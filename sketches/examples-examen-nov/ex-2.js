  createCanvas(600, 600);
  noLoop();
  background(255, 0, 0);

  let sunY = height / 2;
  let sunSize = 200;
  for (let i = sunSize; i > 0; i--) {
    let sunFill = lerpColor(color(255, 255, 0), color(255, 0, 0), i / sunSize);
    fill(sunFill);
    noStroke();
    ellipse(width / 2, sunY, i, i);
  }

  fill(0, 0, 180);
  noStroke();
  rect(0, height / 2, width, height / 2);

  for (let y = height / 2; y < height; y += 4) {
    let t = map(y, height / 2, height, 0, 1);
    let reflectionColor = lerpColor(color(255, 80, 0, 150), color(255, 200, 100, 50), t);
    stroke(reflectionColor);
    strokeWeight(1.5);
    let cx = width / 2;
    let len = random(150, 400);
    line(cx - len, y, cx + len, y);
  }