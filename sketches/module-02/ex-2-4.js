let y = 200;
let waveHeight = 100;

createCanvas(400, 400);
colorMode(HSB);
noStroke();
background(180, 75, 75);

fill(180, 75, 50);
rect(0, y, 400, height - y);
ellipse(0, y, 100, waveHeight);
fill(180, 75, 75);
ellipse(100, y, 100, waveHeight);
fill(180, 75, 50);
ellipse(200, y, 100, waveHeight);
fill(180, 75, 75);
ellipse(300, y, 100, waveHeight);
fill(180, 75, 50);
ellipse(400, y, 100, waveHeight);