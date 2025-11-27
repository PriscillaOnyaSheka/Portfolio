let size = 0;
let h = 0;

function setup()
{
    createCanvas(400, 400);
    colorMode(HSB);
    noStroke();
}

function draw()
{
    fill(h % 360, 100, 100);

    if (size >= 400)
    {
        h += 10;
    }
    else
    {
        size++;
    }
    background(0);
    circle (width / 2, height / 2, size);
}