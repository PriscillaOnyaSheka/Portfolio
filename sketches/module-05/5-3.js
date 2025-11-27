let minLeaves = 10;
let maxLeaves = 25;
let leafSize = 15;

let minBranchStep = 20;
let maxBranchStep = 100;

function setup() {
  createCanvas(400, 400);
  background(255);
  colorMode(HSB);
}

function draw() {
    let x = random(minBranchStep, maxBranchStep);
    while (x < width) {
        let amountOfLeaves = int(random(minLeaves, maxLeaves));
        drawBranch(x, amountOfLeaves);
        x += random(minBranchStep, maxBranchStep);
    }
    noLoop();
}

function drawBranch(x, amountOfLeaves) {
  stroke("sienna");
  line(x, 0, x, height);

  for (let i = 0; i < amountOfLeaves; i++) {
    let y = random(0, height);
    let direction = random([1, -1]);
    drawLeaf(x, y, direction);
  }
}

function drawLeaf(x, y, direction) {
    noStroke();
    output(direction);
    let cx = leafSize * direction;
    let cy = random(-leafSize, leafSize);
    let hue = random(60, 120);
    let saturation = random(50, 75);
    let brightness = random(25, 75);

    fill(hue, saturation, brightness);

    bezier(
        x, y,
        x + cx, y - leafSize + cy,
        x + cx, y + leafSize + cy,
        x, y
    );
}