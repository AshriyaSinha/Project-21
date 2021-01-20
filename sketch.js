var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=randone(400,1500);

}

bullet=createSprite(50,200,50,50);
wall=createSprite(1200,200,thickness,height/2); 
wall.shapeColor=color(80,80,80)
thickness = random(22,83);

car.velocityX=speed;

if(wall.x-car.x<(car.width+wall.width)/2){
  bullet.velocity=0;
  
  var deformation=0.5 * weight * speed * speed/22509;
  
  if(deformation>180){
    bullet.shapeColor=color(255,5,10);
  }

  if(deformation<180&& deformation>100){
    bullet.shapeColor=color(230,230,5);
  } 

  if(deformation<100){
    bullet.shapeColor=color(5,225,5);
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(hasColided(bullet,wall)){
    bullet.velocity=0;
    var damage = o.5 * weight * speed* speed/(thickness * thickness * thickness);
    
    if(damage>18){
      wall.shapeColor = color(255,0,0);
    }

    if(damage<18){
      wall.shapeColor = color(0,255,0);
    }
  }
}

function hasColided(lbullet,lwall)
{
  bulletRightEdge=lbullet+lbullet.width;
  wallLeftEdge=lwall+lwall.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
} 