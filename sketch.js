
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground;
var leftWall,bottomWall,rightWall;
var paper,dustbin;

function preload(){
	paper =loadImage("paper.png");
	dustbin = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
	 world = engine.world;

	var options = {
		isStatic:true
	}
	ground = Bodies.rectangle(800,670,1600,20 , options);
	World.add(world,ground);
	
	 
	
 	leftWall = Bodies.rectangle(520, 610, 20,100 , {isStatic:true} );
 	World.add(world, leftWall);


 	bottomWall = Bodies.rectangle(600, 650, 200,20 , {isStatic:true} );
	 World.add(world, bottomWall);
	 bottomWall.addImage(dustbin);


 	rightWall = Bodies.rectangle(680 , 610, 20,100 , {isStatic:true} );
 	World.add(world, rightWall);
  

	paper1 = new Paper(20,200,20);
	// paper1.shapeColor= color(0,205,255);
	paper1.addImage(paper);

	
	keyPressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  
  drawSprites();

  rect(ground.position.x, ground.position.y,1600,20);

  rect(leftWall.position.x,leftWall.position.y,20,100)
  rect(bottomWall.position.x,bottomWall.position.y,140,20)
  rect(rightWall.position.x,rightWall.position.y,20,100)
 
}

function keyPressed(){
     if (keyCode === UP_ARROW){
		 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60,y:-60});
	 } 

}



   