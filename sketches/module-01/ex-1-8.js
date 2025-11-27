createCanvas(400, 400);
background(225);

colorMode(HSB);
noFill();
noStroke();
strokeWeight(1);

fill(0, 100, 100, 0.5);
bezier(200, 200, 0, 0, 400, 0, 200, 200);
fill(20, 100, 100, 0.5);
bezier(200, 200, 400, 0, 400, 400, 200, 200);
fill(40, 100, 100, 0.5);
bezier(200, 200, 0, 400, 400, 400, 200, 200);
fill(60, 100, 100, 0.5);
bezier(200, 200, 0, 400, 0, 0, 200, 200);