let ghosts = [];

function setup()
{
  createCanvas(windowWidth, 300);
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
  fill(255);
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
      ghosts.push(ghosts[ghosts.length - 1]);
    }
  }
}