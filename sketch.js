var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300,300,10,20)
  ghost.addImage(ghostImg)
  ghost.scale = .3

doorsGroup = new Group()
climbersGroup = new Group()
invisibleBlockGroup = new Group()
  
}

function draw() {
  background(200);
  
  if(gameState==="play") 
  {
    if(keyDown("left_arrow"))
    ghost.x=ghost.x-3

    if(keyDown("right_arrow"))
    ghost.x=ghost.x+3

    if(keyDown("space"))
    ghost.velocityY = -10

    ghost.velocityY=ghost.velocityY+.8
  
  if(tower.y > 400){
      tower.y = 300
    }
 spawndoors()
 if(climbersGroup.isTouching(ghost)){
   ghost.velocityY = 0
 } 
 


 if(invisibleBlockGroup.isTouching(ghost)){
   ghost.destroy()
   gameState = "end"
 }

drawSprites()
}

if(gameState==="end"){
  fill("yellow")
  text("gameover",300,300)
}
}




function spawndoors(){
 if(frameCount % 240===0){
door = createSprite(200,-50)
door.addImage(doorImg)
door.velocityY=1
door.x=Math.round(random(100,400))

ghost.depth=door.depth
ghost.depth+=1


climber = createSprite(200,10)
climber.addImage(climberImg)
climber.velocityY=1
climber.x=door.x

invisibleBlock = createSprite(200,50)
invisibleBlock.width=climber.width
invisibleBlock.height = 2
invisibleBlock.x=door.x
invisibleBlock.velocityY = 1

doorsGroup.add(door)
climbersGroup.add(climber)
invisibleBlockGroup.add(invisibleBlock)

invisibleBlock.debug = true
 } 


}

