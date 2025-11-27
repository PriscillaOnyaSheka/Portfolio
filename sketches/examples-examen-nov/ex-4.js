  createCanvas(400, 400);
  background(10, 30, 80);
  noStroke();

  for (let col = 60; col < width; col += 80) {
    let y = height;
    let x = col;
    for (let i = 0; i < 20; i++) {
      y -= 20;
      x += random(-10, 10);
      fill(150, 200, 255, random(80, 180));
      circle(x, y, random(5, 15));
    }
  }

  for (let i = 0; i < 6; i++) {
    let x = random(50, width - 50);
    let y = random(50, height - 50);
    let w = random(40, 80);
    let h = w / 2;
    fill(color(random(230, 255), random(100, 160), 0));
    ellipse(x, y, w, h);
    let tailW = w * 0.4;
    triangle(
      x - w/2, y,
      x - w/2 - tailW, y - h/2,
      x - w/2 - tailW, y + h/2
    );
  }