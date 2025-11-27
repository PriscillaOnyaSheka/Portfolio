createCanvas(400, 400);
background(0);
colorMode(HSB);
rectMode(CORNERS);

let x = random(100, 300);
let y = random(100, 300);

fill(300, 100, 100);
rect(0, 0, x, y);
rect(x, y, 400, 400);

