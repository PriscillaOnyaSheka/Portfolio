////////////////////////////////////
//// Examen CC1 November '25    ////
//// Onya Sheka Priscilla       ////
////////////////////////////////////
createCanvas(400, 400);
colorMode(HSB);
noStroke();
//1. Achtergrond
background("black");

//2. Variabele
let size = 40;
let m = 20;
let b = 1;
fill("red");
circle (20, 200, size);

//3. Cirkels
for (let amount = 1; amount < 10; amount++)
{
    //5. Kleurverloop
    fill(amount * 35, 100, 100);

    // 3. Cirkels
    let x = m + amount * 40;
    let y = width/2;
    circle(x, y, size);
//4. Kolommen van cirkels
    let kolom = random(-5,5); 
    for (let k = 1; k < kolom; k++)
    {
        // 6. Brightness
        fill(amount * 35, 100, 75 + b);
        y = m * 2 + k * width/2;
        circle(x, y, size);
        b--;
    }
}