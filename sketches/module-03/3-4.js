createCanvas(400, 400);
background(255);
colorMode(HSB);

let totalX = 100;

while (totalX < width - 100) {
    stroke(0);
    let x = random(10, 30);
    line(totalX, 0, totalX, height);

    let totalY = 0;
    while (totalY < height - 50) {
        let y = random(10, 40);
        totalY += y;
        noStroke();
        fill(0, 100, 100 - totalY / 4);
        circle(totalX, totalY, 10);

    }
    totalX += x;
}