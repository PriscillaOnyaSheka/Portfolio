createCanvas(400, 400);
background(50);
colorMode(HSB);
rectMode(CENTER);
noStroke();
strokeWeight(15);

let x = width / 2;
let y = height / 2;



let h = random(0, 360);

fill(h, 50, 75);
rect(x, y, 400, 400);
fill(h, 50, 60);
rect(x, y, 300, 300);
fill(h, 50, 45);
rect(x, y, 200, 200);
fill(h, 50, 30);
rect(x, y, 100, 100);

