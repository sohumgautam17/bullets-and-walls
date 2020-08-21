var bullet, wall, thickness;

var bullet1, wall1, thickness1;

var bullet2, wall2, thickness2;


var speed, weight;

var speed1, weight1;

var speed2, weight2;

var damage, damage1, damage2; 



function setup() {
 
  createCanvas(1510,800);
  speed=random(223,321);
  weight=random(30,52);

  speed1=random(223,321);
  weight1=random(30,52);

  speed2=random(223,321);
  weight2=random(30,52);

  thickness = random(22, 83);
  thickness1 = random(22, 83);
  thickness2 = random(22, 83);

  bullet = createSprite(50, 200, 50, 20);
  bullet.velocityX = speed;
  wall = createSprite(1200, 200, thickness, height/8);

  bullet1 = createSprite(50, 400, 50, 20);
  bullet1.velocityX = speed;
   wall1 = createSprite(1200, 400, thickness1, height/8);

   bullet2 = createSprite(50, 600, 50, 20);
   bullet2.velocityX = speed;
   wall2 = createSprite(1200, 600, thickness2, height/8);

}

function draw() {
  background("black");  
  bullet.shapeColor = (255, 255, 255);
  bullet1.shapeColor = (255, 255, 255);
  bullet2.shapeColor = (255, 255, 255);

  wall.shapeColor = (80, 80, 80);
  wall1.shapeColor = (80, 80, 80);
  wall2.shapeColor = (80, 80, 80);

  
  damage =(0.5*weight*speed*speed)/(thickness*thickness*thickness);
  if(bullet.x>1150)
   {
    bullet.velocityX = 0;
   
   
    if(damage<10)
    {
   wall.shapeColor = color(0, 255, 0);
 }
   if(damage>10){
   wall.shapeColor = color(255, 0, 0);
} 


damage1 =(0.5*weight1*speed1*speed1)/(thickness1*thickness1*thickness1);
  if(bullet1.x>1150)
   {
    bullet1.velocityX = 0;
   
   
    if(damage1<10)
    {
   wall1.shapeColor = color(0, 255, 0);
 }
   if(damage1>10){
   wall1.shapeColor = color(255, 0, 0);
} 

damage2 =(0.5*weight2*speed2*speed2)/(thickness2*thickness2*thickness2);
  if(bullet2.x>1150)
   {
    bullet2.velocityX = 0;
   
   
    if(damage2<10)
    {
   wall2.shapeColor = color(0, 255, 0);
 }
   if(damage2>10){
   wall2.shapeColor = color(255, 0, 0);
} 
  
  drawSprites();
 }
}
}
} 
