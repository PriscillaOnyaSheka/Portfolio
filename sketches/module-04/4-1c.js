createCanvas(600, 400);
colorMode(HSB);
noStroke();
background(0, 0, 20);

for (let i = 0; i < 50000; i++) {
    let x = random(-10, width);
    let y = random(-10, height);
    if (y < height / 3) {
        fill(0, 70, 100);
    } else if (y > height / 3 * 2) {
        fill(200, 70, 100);
    } else {
        fill(60, 0, 100);
    }
    rect(x, y, 10);
}