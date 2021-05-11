var bgImg;
var mouseImg1,catImg1,mouseImg2,catImg2,mouseImg3,catImg3;
var mouse,cat;
function preload() {
    //load the images here
     bgImg=loadImage("images/garden.png");
     catImg1=loadAnimation("images/cat1.png");
     catImg2=loadAnimation("images/cat2.png","images/cat3.png");
     catImg3=loadAnimation("images/cat4.png");
   mouseImg1=loadAnimation("images/mouse1.png");
   mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
   mouseImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,750);
    //create tom and jerry sprites here
    cat = createSprite(800,600);
	cat.addAnimation("Img",catImg1);
	cat.scale=0.2;

    mouse = createSprite(200,600);
	mouse.addAnimation("Img",mouseImg1);
	mouse.scale=0.2;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.addAnimation("catStanding",catImg3);
        cat.changeAnimation("catStanding");

        mouse.addAnimation("mouseSearching",mouseImg3);
        mouse.changeAnimation("mouseSearching");
        cat.velocity.x=0;
        cat.x=320;
        cat.y=600;
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
      cat.frameDelay = 25;
      cat.velocity.x=-2;
  }

}
