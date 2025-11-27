createCanvas(400, 400);
noStroke();
colorMode(HSB);

let w = random(10, width / 2);
let h = random(10, height / 2);
let x = 0;
let y = 0;

while (y < height) {
    x = 0;
    while (x < width) {
        fill(random(0, 360), 60, 100);
        rect(x, y, w + 1, h + 1);
        x += w;
        w = random(width / 4, width);
    }
    y += h;
    h = random(0, height / 3);
    output(y);
}