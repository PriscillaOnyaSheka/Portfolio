let ghosts = [];

function setup()
{
  createCanvas(windowWidth, 200);
  colorMode(HSB);
  textAlign(CENTER, CENTER);
  for (let i = 0; i < 12; i++)
  {
    h = i * 30;
    ghosts.push(i * 30);
  }
}

function draw()
{
  background(0);
  for (let i = 0; i < ghosts.length; i++)
  {
    drawGhost(50 + i * 50, 100, ghosts[i]);
  }
  fill("white");
  text("Press 'a' to push(), press 's' to shift()");
}

function keyTyped()
{
  if (key === 'a')
  {
    if (ghosts.length === 0)
    {
      ghosts.push(0);
    }
    else if (key === 's')
    {
      ghosts.shift();
    }
    else if (key === 'p')
    {
      ghosts.pop();
    }
    else
    {
      ghosts.push((ghosts[ghosts.length - 1] + 30) % 360);
    }
  }
}

function drawGhost(x, y, h) {
    noStroke();
    fill(h, 100, 100);
    beginShape();
    vertex(x - 20, y);
    vertex(x - 20, y + 5);
    vertex(x - 12.5, y);
    vertex(x - 7.5, y + 5);
    vertex(x, y);
    vertex(x + 7.5, y + 5);
    vertex(x + 12.5, y);
    vertex(x + 20, y + 5);
    vertex(x + 20, y);
    endShape();
    arc(x, y, 40, 80, Math.PI, Math.PI * 2);
    fill("white");
    circle(x - 7, y - 20, 10);
    circle(x + 7, y - 20, 10);
    fill("black");
    circle(x - 7, y - 20, 5);
    circle(x + 7, y - 20, 5);
}