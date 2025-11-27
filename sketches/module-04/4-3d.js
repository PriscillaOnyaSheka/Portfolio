createCanvas(600, 400);
colorMode(HSB);
background(0, 0, 10);
strokeWeight(2);

for (let j = 0; j < 40; j++) {
    for (let i = 0; i < 60; i++) {
        let x = i * 10;
        let y = j * 10;
        stroke(0, 70, 100);
        let rand = floor(random(0, 2));
        if (rand == 0) {
            line(x, y, x + 10, y);
        } else if (rand == 1) {
            line(x, y, x, y + 10);
        }
    }
}



