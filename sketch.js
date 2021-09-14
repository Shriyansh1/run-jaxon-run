var boy, boy_running;
var path, pathImg;
var invisibleboundary1, invisibleboundary2


function preload(){
  //pre-load images
  pathImg = loadImage("path.png");

  boy_running = loadAnimation("Runner1.png","Runner2.png");
}


function setup(){
  createCanvas(400,400);
 
  //create a path sprite
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.scale=1.2;

  //creating running jaxon Sprite
  boy=createSprite( 180,380,10,10);
  boy.addAnimation("running",boy_running);
  boy.scale = 0.05;

  //creating invisible boundaries 
  invisibleboundary1=createSprite(0,200,60,400);
  invisibleboundary2=createSprite(395,200,50,400); 

  //making boundaries invisible
  invisibleboundary1.visible = true;
  invisibleboundary2.visible = true;

}


function draw() {
  background("grey");
  path.velocityY = 4;

  //jaxon move when mouse changes its position
  boy.x = World.mouseX;

  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(invisibleboundary1);
  boy.collide(invisibleboundary2); 
  



  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }


  drawSprites();
}
