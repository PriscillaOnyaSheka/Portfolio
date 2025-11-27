createCanvas(400, 400);
noStroke();
colorMode(HSB);

let w = random(10, height / 2);
let x = 0;
let y = 0;

while (x < width) {
    fill(random(0, 360), 60, 100);
    rect(y, x, width, w + 1);
    x += w;
    w = random(10, 100);
}
