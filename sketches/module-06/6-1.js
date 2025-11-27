let x = 0;

function setup()
{
    createCanvas(800, 400);
    colorMode(HSB);
}

function draw()
{
    background(0);
    for (let i = 0; i <= 100; i++)
    {
    stroke(0, 100, i);
    line(x + i, 0, x + 50 + i, 200);
    line(x + 50 + i, 200, x + i, 400);
    }
    x += 2;

    if (x > width)
    {
        x = -150;
    }
}