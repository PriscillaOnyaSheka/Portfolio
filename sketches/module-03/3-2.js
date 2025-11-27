createCanvas(600, 400);
background("#add8e6");
noStroke();
colorMode(HSB);
let barWidth = 10;
let margin = 5;
let amount = width - margin / (barWidth + margin);

for (let i = 0; i < amount; i++) {
    let randomHeight = noise(i / 5) * height;
    fill("white");
    rect(i * (barWidth + margin), height - randomHeight, barWidth, randomHeight);
}