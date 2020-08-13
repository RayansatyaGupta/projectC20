var car, wall
var speed, wight

function setup() {
  speed = random(55,90)
  weight = random(400,1500)
  createCanvas(1600,400);
  car = createSprite(50,200,50,50);
  car.shapeColor = color(255);
  wall = createSprite(1500,200,60,height/2);
  car.velocityX = speed;
  
}


function draw() {
  background(0);  
  
  if (wall.x - car.x < (car.width + wall.width)/2) 
{
  
      var deformaction = 0.5 * width * speed * speed/22509;
      if (deformaction > 180)
    {
        car.shapeColor = color(255,0,0);
    }

      if (deformaction < 180 && deformaction > 100)
    {
      car.shapeColor = color(230,230,0);
    }
      if(deformaction < 100)
    {
      car.shapeColor = color(0,255,0);
    }
} 
  drawSprites();
}