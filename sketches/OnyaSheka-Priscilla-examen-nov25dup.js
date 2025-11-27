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
fill("red");
circle (20, 200, size);

//3. Cirkels
for (let amount = 1; amount < 10; amount++)
{
    //5. Kleurverloop
    fill(amount * 35, 100, 100);

    // 3. Cirkels
    circle(amount * 40 + 20, 200, size);
    /*if (amount++ == true)
    {
        let kolom = random(-5,5); 
        for (j = 0; j < kolom; j++)
        {
            circle(amount * 40, i * 200 - kolom, size);
        }
    }*/
}
