var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("images/cave.png");
  bg2 = loadImage("images/treasure.png");
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  code = new code();
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
if(score === 3){
  background("treausre",bg2);
   clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
}
  

  

  drawSprites()
}