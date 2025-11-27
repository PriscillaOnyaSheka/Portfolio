let x = 200;
let y = 120;
let sat = 50;
let d = 50;

colorMode(HSB);
createCanvas(400, 400);
background(0, 0, 25);
noFill();
strokeWeight(d * 2 / 10);
fill(0, 100, 100);
noFill();
stroke(210, sat, 100);
circle(x - d, y - d / 2, d);
stroke(280, sat, 100);
circle(x, y - d / 2, d);
stroke(0, sat, 100);

circle(x + d, y - d / 2, d);

stroke(70, sat, 100);

circle(x - d / 2, y, d);
stroke(140, sat, 100);

circle(x + d / 2, y, d);