
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var fs ;
var ell ;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer = new Hammer(600,700,100,60)
plane1 = new plane(400,700,800,100)
stone1 = new stone(700,600,10,10)

fakecircle = new circle(400,400)
poorsand = new sand(400,200);
poorsand2 = new sand(400,400);
poorsand3 = new sand(400,600);
poorsand4 = new sand(400,100);
poorsand5 = new sand(400,160);
Ion = new Iron(600,400,100,60)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 

  drawSprites();
  
hammer.display()
plane1.display();
stone1.display();
fakecircle.display();
poorsand.display();
poorsand2.display();
poorsand3.display();
poorsand4.display();
poorsand5.display();
Ion.display();

 
}



