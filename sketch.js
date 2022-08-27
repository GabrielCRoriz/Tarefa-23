
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rectangle1
var rectangle2
var rectangle3

//faltou criar variaveis de angulos para os outros objetos, pois cada um terá sua própria configuração 
var angle = 60;
var angle2 = 60;
var angle3 = 60;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    

	//faltou definir o objeto como estatico 
	var rectangle_options = { isStatic: true, 
				 estitution:0.4, friction:0.02 }
	
    	rectangle1 = Bodies.rectangle(250, 200, 150, 20, rectangle_options);
	rectangle2 = Bodies.rectangle(250, 200, 150, 20, rectangle_options);
	rectangle3 = Bodies.rectangle(300, 250, 150, 20, rectangle_options);

	World.add(world, rectangle1)
	World.add(world, rectangle2)
	World.add(world, rectangle3)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	push();
	translate(rectangle1.position.x,rectangle1.position.y);
	rotate(angle);
	rect(0, 0, 150, 20);
        pop();
	angle1 +=0.2;

//agora é possível criar a configuração para os outros objetos sempre entre push() e pop(); para que cada um gire em torno do próprio eixo e em direções diferentes
	push();
	angle1 +=0.2;
	translate(rectangle2.position.x,rectangle2.position.y);
	rotate(angle2);
	rect(0, 0, 150, 20);
	pop();
	angle2 -=0.5;

  rect(rectangle3.position.x, rectangle3.position.y, 150, 20)
  
  drawSprites();
 
}



