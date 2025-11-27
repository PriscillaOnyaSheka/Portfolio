createCanvas(400, 400);
background(0);
rectMode(CORNERS);
noStroke();
colorMode(HSB);


let x = random(100, 300);
let y = random(100, 300);
let h = 75;

fill(330, h, 100);
rect(0, 0, x, y);

rect(x, y, width, height);

stroke(255);
noFill();
rect(100, 100, 300, 300);