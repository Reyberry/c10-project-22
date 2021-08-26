const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob;
var bob2;
var bob3;
var bob4;
var bob5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
    var bob_options={
		resitution:0.8
	};
	var roof_options={
		isStatic:true			
	}
   
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob = Bodies.circle(200,100,20,20,bob_options);
    World.add(world,bob);
	bob2 = Bodies.circle(100,20,20,40,bob_options);
	World.add(world,bob2);
	bob3 = Bodies.circle(200,20,20,10,bob_options);
	World.add(world,bob3);
	bob4 = Bodies.circle(200,40,20,10,bob_options);
	World.add(world,bob4);
	bob5 = Bodies.circle(200,40,20,20,bob_options);
	World.add(world,bob5);
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display()

  
  //create ellipse shape for multiple bobs here
  ellipse(bob.position.x,bob.position.y,10);
  ellipse(bob2.position.x,bob2.position.y,10);
  ellipse(bob3.position.x,bob2.position.y,10);
  ellipse(bob4.position.x,bob4.position.y,10);
  ellipse(bob5.position.x,bob5.position.y,10);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
if (keyPressed(up_arrow)){
 Matter.Body.applyForce(10,200,0.8);
}