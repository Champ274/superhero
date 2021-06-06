
var bg1,bg1img
var gamestate="wel"
var bg2,bg2img
var sh,shimg
var ground
var Obstacle,obimg
var score=0
var coinsgroup
var ObstaclesGroup 
var lives=3
//var rand = randomNumber(1,1000);
function preload()
{
bg1img=loadImage("c.png")
bg2img=loadImage("r1.png")
shimg=loadImage("2.png")
obimg=loadImage("aero21.png")
balimg=loadImage("hot1.png")
coinimg=loadImage("coin.png")
}

function setup() {
	createCanvas(800, 600);
bg1 = createSprite(400,300,800,500)
bg1.addImage(bg1img) 
bg1.scale=1
bg2 = createSprite(400,300,800,500)
bg2.addImage(bg2img)
bg2.scale=3.5
bg2.visible=false
sh= createSprite(350,550,20,20)
sh.addImage(shimg)
sh.scale=0.92
sh.visible=false
//sh.debug=true

bg2.y=bg2.height/2
ground=createSprite(210,300,20,600)
ground1=createSprite(580,300,20,600)
ground.visible=false
ground1.visible=false

 coinsGroup = new Group();
 ObstaclesGroup = new Group();
 balgroup= new Group();
}


function draw() {
 
  background(0);
  drawSprites();
 if(keyDown("space")){
	 gamestate="play"
 }
 if(gamestate==="play"){
bg2.visible=true
sh.visible=true
bg2.velocityY=6
spawnObstacles();
spawnbal();
spawncoin();
sh.collide(ground)
sh.collide(ground1)
if(bg2.y>600){
  bg2.y=bg2.height/4
}
if(keyDown("left")){
  sh.x=sh.x-5
}
if(keyDown("right")){
  sh.x=sh.x+5
}
textSize(25)
fill("dark blue")
text("score:"+score,670,30)
text("lives:"+lives,670,70)


for(var i=0;i<coinsGroup.length;i++){
  if(coinsGroup.get(i).isTouching(sh)){
    score=score+1
    //coinsGroup.destroyEach()
    coinsGroup.get(i).destroy()
  }
} 


for(var i=0;i<ObstaclesGroup.length;i++){
  if(ObstaclesGroup.get(i).isTouching(sh)){
    lives=lives-1
    
    ObstaclesGroup.get(i).destroy()
  }
}


for(var i=0;i<balgroup.length;i++){
  if(balgroup.get(i).isTouching(sh)){
    lives=lives-1
   
    balgroup.get(i).destroy()
  }
}
if(lives<=0){
  gamestate="end"
}
 }
  
 if(gamestate==="wel"){ textSize(30)
  stroke("dark blue")
  text("Super Hero On The Run",250,90)
  text("Press SPACE to start",250,300)
 
 }

if(gamestate==="end"){
  bg2.velocityY=0
  coinsGroup.destroyEach()
  balgroup.destroyEach()
  ObstaclesGroup.destroyEach()
  textSize(40)
  stroke("dark blue")
  text("GAME OVER!!!Nice Try",300,300)
}
 
 
 function spawnObstacles() {
  if(World.frameCount % 120 === 0) {
    var obstacle = createSprite(20,5,10,40);
    obstacle.velocityY = 8;
    obstacle.addImage(obimg)
   // obstacle.debug=true
    obstacle.setCollider('rectangle',0,0,170,200)
    obstacle.x = random(220,560);
    
              
    obstacle.scale = 0.5;
    obstacle.lifetime = 120;
    
  
    ObstaclesGroup.add(obstacle);
  }
 }
 
 function spawnbal() {
  if(World.frameCount % 207 === 0) {
    var bal = createSprite(10,5,10,40);
    bal.velocityY = 8;
    bal.addImage(balimg)
  //bal.debug=true
  bal.setCollider('rectangle',0,0,150,200)
    bal.x=random(220,560)
              
    bal.scale = 0.5;
    bal.lifetime = 130;
    balgroup.add(bal)
  
  }
 }
 function spawncoin() {
  if(World.frameCount % 287=== 0) {
    var coin = createSprite(10,5,10,40);
    coin.velocityY = 8;
    coin.addImage(coinimg)
  
    coin.x=random(220,560)
              
    coin.scale = 0.15;
    coin.lifetime = 130;
    
  coinsGroup.add(coin)
  }
 }

}



