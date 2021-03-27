var score=0 ;
var player;
var obs1;
var obs2;
var obs3;
var obs4;
var wormGroup;
function preload(){
  bg=loadImage("garden.jpg");
  playerImage=loadImage("rabbit2.jpg");
  snakeImage=loadImage("snake.jpg");


}
function setup(){
    createCanvas(600,600);
    edges=createEdgeSprites();

    player=createSprite(400,550,20,20);
    player.addImage(playerImage);
    player.scale=0.05;
    target=createSprite(400,40,20,20);
    
    obs1=createSprite(0,320,200,20);
    obs2=createSprite(500,350,180,20);
    obs3=createSprite(850,280,200,20);
    obs4=createSprite(0,120,200,20);
    obs5=createSprite(500,80,200,20);
    obs6=createSprite(850,150,200,20);

    player.shapeColor="white";
  target.shapeColor="yellow";
  obs1.shapeColor="red";
  obs2.shapeColor="red";
  obs3.shapeColor="red";
  obs4.shapeColor="red";
  obs5.shapeColor="red";
  obs6.shapeColor="red";

  obs1.velocityX=4;
  obs2.velocityX=4;
  obs3.velocityX=4;
  obs4.velocityX=-4;
  obs5.velocityX=-4;
  obs6.velocityX=-4;

    wormGroup=new Group();
}
function draw(){

    background(bg);
    if(keyDown("up")){
      player.y=player.y-3;
    }
    if(keyDown("down")){
      player.y=player.y+3;
    }
    if(keyDown("right")){
      player.x=player.x+3;
    }
    if(keyDown("left")){
      player.x=player.x-3;
    }

    obs1.bounceOff(edges[1])
  obs1.bounceOff(edges[0])
  obs2.bounceOff(edges[1])
  obs2.bounceOff(edges[0])
  obs3.bounceOff(edges[1])
  obs3.bounceOff(edges[0])
  obs4.bounceOff(edges[1])
  obs4.bounceOff(edges[0])
  obs5.bounceOff(edges[1])
  obs5.bounceOff(edges[0])
  obs6.bounceOff(edges[1])
  obs6.bounceOff(edges[0])

  textSize(50);
  if(player.isTouching(obs1)){
    obs1.velocityX=0;
    player.velocity=0;
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obs2)){
    obs2.velocityX=0;
    player.velocity=0;
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(target)){
    text("YOU WIN",200,200);
    //target.destroy();
    //target=null;
  }
  if(player.isTouching(obs3)){
    obs3.velocity=0;
    player.velocity=0;
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obs4)){
    obs4.velocity=0;
    player.velocity=0;
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obs5)){
    obs5.velocity=0;
    player.velocity=0;
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obs6)){
    obs6.velocity=0;
    player.velocity=0;
    text("YOU LOSE",200,200);
  }
  generateWorms();

for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    player.x=400;
    player.y=550;
    }   
  }

  drawSprites();
  
}
function generateWorms(){
  if(frameCount % 60===0){
   // console.log(frameCount);
    var worm = createSprite(100,random(350,40),50,random(3,5));
    worm.addImage(snakeImage);
    worm.scale=random(0.1,0.4);
    worm.velocityX=random(-4,4);
    wormGroup.add(worm);
    }
  }
    drawSprites();
    
 



