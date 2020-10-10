//variables are being created . . .
  var bullet
  var wall
  var thickness

  var speed
  var weight

function setup() {
  
//canvas is being created . . .
  createCanvas(1600,400);

//speed and weight are being given random variables . . .
  speed=random(223, 321);
  weight=random(30, 52);
  thickess=random(22, 83);

//sprites are being displayed . . .
  bullet = createSprite(50, 200, 50, 15);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
//background is being set . . . 
  background("orange");  

//bullet velocity is being set . . .
  bullet.velocityX = speed;

//wall damage changes color for wall . . .
  if(hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage > 10) {
      wall.shapeColor = color(255, 0, 0);
    }

    if(damage < 10) {
      wall.shapeColor = color(0, 255, 0);
    }
  }


  drawSprites();
}

function hasCollided(lbullet, lwall) {
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge) {
    return true
  }
    return false;
}


