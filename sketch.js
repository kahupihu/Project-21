var wall, thickness;
var bullet, speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);
  thickness=Math.round(random(22, 83));
  speed=Math.round(random(223, 321));
  weight=Math.round(random(30, 52));
  
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80, 80, 80);

  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX=speed/4;
  bullet.shapeColor=color(255);
}

function draw() {
  background(0);  
  drawSprites();
  textSize(17);
  fill("green");
  text("Bullet Speed: "+speed,15,15);
  text("Bullet Weight: "+weight,15,35);
  text("Thickness of wall: "+thickness,15,53);
  text("Damage caused by bullet: "+damage,15,71);
  //console.log("Pointer: " + World.mouseX + " , " + World.mouseY);

  collide(bullet,wall);  
  if(isTouching(bullet,wall)){
    damage = Math.round( (0.5*weight*speed*speed) / (thickness*thickness*thickness) );
    if(damage>10){wall.shapeColor="red"; }
    else{wall.shapeColor="green"; }
  }
}