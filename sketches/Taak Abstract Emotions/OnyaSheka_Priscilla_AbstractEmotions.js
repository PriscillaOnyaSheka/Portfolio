// https://thehobbyhopper.substack.com/p/creative-coding
//Globale vars
let kol = 12;
let rij = floor(kol * 1.5);

function setup()
{
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB);            
  noStroke();
  //Zodat het niet blijft bewegen
  noLoop();
}

function draw()
{
  background(0);
  
  let sX = width / kol;
  let sY = height / rij;
  
  const links = width * 0.25;
  const rechts = width * 0.75;
  const boven = height * 0.25;
  const ben = height * 0.75;
  
  for (let i = 0; i < kol; i++) 
  {
    for (let j = 0; j < rij; j++) {
      let x = i * sX;
      let y = j * sY;
      
      let centerX = x + sX / 2;
      let centerY = y + sY / 2;
      let inCenter = (centerX >= links && centerX <= rechts && centerY >= boven && centerY <= ben);

      //Vanbinnen warm, vanbuiten koud
      if (inCenter == true)
    {
        liefdevol(x, y, sX, sY);
    }
      else
      {
       vijandig(x, y, sX, sY);
      } 
    }
  }
}

function liefdevol(x, y, sX, sY) {
    //Gecontroleerde kleurpalet liefde (warme tinten)
  const hueP = floor(random(0, 3));
  let h;
  if (hueP === 0)
  {
    h = 330;
  }
  else if (hueP === 1)
  {
    h = 340;
  }
  else
  {
    h = 355;
  }
  fill(h, 90, 100);

  //Inspo portfolio 5.2 
  let shapePick = floor(random(0, 4));
  switch (shapePick) {
    case 0:
      circle(x + sX / 2, y + sY / 2, min(sX, sY));
      break;
    case 1:
      rect(x, y + sY / 2, sX, sY / 2, 5);
      break;
    case 2:
      rect(x, y, sX / 2, sY, 5);
      break;
    case 3:
      quad(x, y, x + sX / 2, y, x + sX, y + sY, x + sX / 2, y + sY);
  }
}

function vijandig(x, y, sX, sY) {
    //Koudere vijandige kleuren
  fill(225, random(50, 80), random(15, 35));

  //k = hvlheid vd cel voor driehoek
  const k = 0.85;
  //Willekuerige punten binnen k x s
  const x1 = x + random(sX * (1 - k) / 2, sX * (1 + k) / 2);
  const y1 = y + random(sY * (1 - k) / 2, sY * (1 + k) / 2);
  const x2 = x + random(sX * (1 - k) / 2, sX * (1 + k) / 2);
  const y2 = y + random(sY * (1 - k) / 2, sY * (1 + k) / 2);
  const x3 = x + random(sX * (1 - k) / 2, sX * (1 + k) / 2);
  const y3 = y + random(sY * (1 - k) / 2, sY * (1 + k) / 2);

  triangle(x1, y1, x2, y2, x3, y3);
}