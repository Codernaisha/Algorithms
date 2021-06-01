var fr,mr;
var princessnishal;

function setup() {
  createCanvas(800,800);
 mr=createSprite(200,200,80,30);
 fr=createSprite(400,200,50,80);
 princessnishal = createSprite(300,300,50,80);
 princessnishal.debug = true;
 fr.debug = true;
 mr.debug = true;
}

function draw() {
  background("teal");  
 mr.x = mouseX;
 mr.y = mouseY;
 if(isTouching(princessnishal,mr)) {
   princessnishal.shapeColor = "pink";
 }
 else {
   princessnishal.shapeColor = "blue";
 }
  drawSprites();
}
