let size = 0;
let h = 0;

function setup()
{
    createCanvas(400, 400);
    colorMode(HSB);
    background(0);
    rectMode(CENTER);
    noFill();
}

function draw()
{
    rect(width / 2, height / 2, size);
    stroke(h % 360, 100, 100);
    size += 20;
    if (size > width)
    {
        size = 0;
        h += 20;
    }
}