
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground,ground_sprite;
var left,left_Sprite,right,right_Sprite,base,base_Sprite;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;

	ground_sprite = createSprite(400,660,800,20);
	ground_sprite.shapeColor = color(255,255,0);

    base_Sprite=createSprite(600, 640, 100,20);
	base_Sprite.shapeColor=color(255);

	leftSide_Sprite= createSprite(550,600,20,100);
	leftSide_Sprite.shapeColor=color(255);

	rightSide_Sprite= createSprite(650,600,20,100);
	rightSide_Sprite.shapeColor= color(255);

	base = Bodies.rectangle(600, 640, 100, 20, {isStatic:true} );
	World.add(world,base);

	paper1 = new Paper(20,200,20);
	paper1.shapeColor= color(0,205,255);
     keyPressed();

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  
  drawSprites();
 
}

function keyPressed(){
     if (keyCode === UP_ARROW){
		 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	 } 

}



   
