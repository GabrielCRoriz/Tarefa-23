
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rectangle1
var rectangle2
var rectangle3
var angle = 60;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    

	var rectangle_options = { restitution:0.4, friction:0.02 }
    rectangle1 = Bodies.rectangle(250, 200, 150, 20, rectangle_options)
	rectangle2 = Bodies.rectangle(250, 200, 150, 20, rectangle_options)
	rectangle3 = Bodies.rectangle(300, 250, 150, 20, options)

	World.add(world, rectangle1)
	World.add(world, rectangle2)
	World.add(world, rectangle3)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Matter.Body.rotate(rotator1,angle1)
	push();
	pop();
	angle1 +=0.2;
	translate(rotator1.position.x,rotator1.position.y);
	rotate(angle1);
  rect(rectangle1.position.x, rectangle1.position.y, 150, 20)
  rect(rectangle2.position.x, rectangle2.position.y, 150, 20)
  rect(rectangle3.position.x, rectangle3.position.y, 150, 20)
  
  drawSprites();
 
}



