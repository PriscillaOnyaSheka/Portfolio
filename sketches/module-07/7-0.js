let x = [];
let y = [];
let speedX = [];
let speedY = [];
let size = [];
let h = [];

function setup()
{
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    noStroke();
    for (let i = 0; i < 100; i++)
    {
    x[i] = random(50, width - 50);
    y[i] = random(50, height - 50);
    speedX[i] = random(-5, 5);
    speedY[i] = random(-5, 5);
    size[i] = random(10, 50);
    h[i] = random(0, 360);
    }

    //output(x);
    //output(y);
    
}

function draw()
{
    background(0, 0.1);
    for (let i = 0; i < 3; i++)
    {
        fill(h[i], 100, 200);
        circle(x[i], y[i], size[i]);

    if (x[i] >= (width  - size / 2 ) || x[i] <= size / 2)
    {
        speedX[i] *= -1;
    }

    if (y[i] >= (height - size / 2) || y[i] <= size / 2)
    {
        speedY[i] *= -1;
    }
    }

    x[i] += speedX[i];
    y[i] += speedY[i];
    h[i]++;
}