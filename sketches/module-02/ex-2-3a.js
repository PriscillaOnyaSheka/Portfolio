let x = 200;
let y = 200;
let sat = 50;

colorMode(HSB);
createCanvas(400, 400);
background(0, 0, 25);
noFill();
strokeWeight(200 / 10);
fill(0, 100, 100);
noFill();
stroke(210, sat, 100);

circle(x - 100, y - 50, 100);
stroke(280, sat, 100);
circle(x, y - 50, 100);

stroke(0, sat, 100);
circle(x + 100, y - 50, 100);

stroke(70, sat, 100);
circle(x - 50, y, 100);
stroke(140, sat, 100);

circle(x + 50, y, 100);