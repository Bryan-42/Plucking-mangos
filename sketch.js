const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone,tree,ground;
var mango1,mango2,mango3,mango4,mango5;
var mango6,mango7,mango8,mango9,mango10;
var boy;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stone  = new Stone(500,200,60,60);

	boy = new Boy(stone.body,{x:50, y:550});

	tree = new Tree(555,450,500,500)

	ground = new Ground(400,690,800,10);
	
	mango1 = new Mango(385,365,40,40);
	mango2 = new Mango(446,389,40,40);
	mango3 = new Mango(475,301,40,40);
	mango4 = new Mango(584,361,40,40);
	mango5 = new Mango(543,271,40,40);
	mango6 = new Mango(510,377,40,40);
	mango7 = new Mango(620,288,40,40);
	mango8 = new Mango(720,388,40,40);
	mango9 = new Mango(680,324,40,40);
	mango10 = new Mango(630,394,40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(211,211,211);

  stone.display();
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  boy.display();
}
function mouseDragged(){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    boy.fly();
}

function keyPressed(){
    if(keyCode === 32){
       boy.attach(stone.body);
    }
}
function detectcollision(lstone,lmango){
	
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

	if(distance<-lmango.width,lmango.height+lstone.width,lmango.height){
		Matter.Body.setStatic(lmango.body,false);
	}
}