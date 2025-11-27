createCanvas(400, 400);
rectMode(CORNERS);
noStroke();
colorMode(HSB);

let x = random(100, 300);
let y = random(100, 300);
let h = 75;

fill(50, h, 100);
rect(0, 0, x, y);
fill(150, h, 100);
rect(x, 0, width, y);
fill(270, h, 100);
rect(0, y, x, height);
fill(330, h, 100);
rect(x, y, width, height);