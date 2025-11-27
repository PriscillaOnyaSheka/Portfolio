createCanvas(600, 400);
colorMode(HSB);
noStroke();
background(0, 0, 20);

for (let i = 0; i < 50000; i++) {
    let x = random(-10, width);
    let y = random(-10, height);
    if (y < height / 4 || x < width / 4 || y > height / 4 * 3 || x > width / 4 * 3) {
        fill(0, 70, 100);

    } else {
        fill(0, 0, 100);
    }
    rect(x, y, 10);
}