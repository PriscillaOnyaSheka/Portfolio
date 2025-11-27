createCanvas(innerWidth, innerHeight);
colorMode(HSB, 360, 100, 100);
background(15, 0, 95);

let margin = random(0, 100);
let cx = width / 2;
let cy = height / 2;
let r = min(width, height) * 0.25;
let baseHue = 210, sat = 70;

noStroke();
fill(baseHue, sat, 70);
circle(cx, cy, r * 2);
fill(baseHue + 130, sat, 90);
rect(margin, margin, width - 2 * margin, 18, 12);
fill(baseHue - 50, sat, 80);
rect(margin, height - margin - 18, width - 2 * margin, 18, 12);