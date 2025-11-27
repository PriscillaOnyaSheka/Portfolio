let myName = "Priscilla Onya";

let firstPart = myName.substring(0, 1);
let spaceIndex = myName.indexOf(" ");
let secondPart = myName.substring(spaceIndex + 1, spaceIndex + 2);

createCanvas(windowWidth, windowHeight);
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
fill("white");
textAlign(CENTER, CENTER);
textSize(r);
textStyle(BOLD);
text(firstPart + "." + secondPart, cx, cy + r / 10);
fill(baseHue + 130, sat, 90);
rect(margin, margin, width - 2 * margin, 18, 12);
fill(baseHue - 50, sat, 80);
rect(margin, height - margin - 18, width - 2 * margin, 18, 12);
