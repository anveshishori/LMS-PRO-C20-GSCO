var car, wall;

var speed = 0;
var weight = 0;
var deformation = 0;

var testState = "pause";

function setup() {
  createCanvas(1500,400);
  car = createSprite(50, 200, 80, 50);
  car.shapeColor = "blue";
  wall = createSprite(1500,200,60, height/2);
  wall.shapeColor = "black"; 
  
}

function draw() {
  background(255,255,255); 

  text("Speed: "+ speed,1300,50);
  text("Weight: "+ weight,1300, 70);
  text("Deformation: "+ deformation, 1300, 90);
  console.log("this is : " + testState);

  if(testState === "pause"){
    text ("Press Space to Test", 500 , 100);

  }

  if(keyDown("space") && testState === "pause"){
testState = "test";
speed = random(55,90);
  weight = random (400,1500); 
  }

  if (testState === "test"){
  
   
     car.velocityX = speed;

  
  if(wall.x - car.x < wall.width/2 + car.width/2){

    car.velocityX = 0;
    deformation = (0.5*weight*speed*speed)/22500;

   

    if (deformation < 100){

      car.shapeColor = color(0,255,0);
    }    else if ( deformation>100 && deformation < 180){

      car.shapeColor = color(230,230,0);
    }    else if (deformation > 180){

      car.shapeColor = color(255,0,0);
    }
 testState = "retry";
  }
  
  
}

if (testState==="retry"){
  
text("Press r to retry!!", 500,300);

}
if(keyDown("r") && testState === "retry"){
  car.shapeColor = "blue";
  testState = "pause";
  speed = 0;
  weight = 0;
  deformation = 0;
car.x=50;
car.velocityX = 0;
 
}





  drawSprites();
}