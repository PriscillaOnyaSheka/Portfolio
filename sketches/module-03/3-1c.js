createCanvas(400, 400);
background(255);
noStroke();
colorMode(HSB);

for (let i = 2; i < 15; i++) {
    fill(i * 7);
    circle(i * 25, i * 25, 50);
}