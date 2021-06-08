const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const render = Matter.Render;

var engine , world;
var paper;
var ground;
var leftSide,bottom,rightSide;
var backgroundImg;
var paperImg;
var dustbinImg,dust;



function preload(){

backgroundImg=loadImage("back2.jpg");
dustbinImg=loadImage("dustbinim.png");
	
}

function setup() {
	createCanvas(800,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
		
	paper = new Paper (100,600,10);
	
	ground = new Ground (400,590,800,20);

	dust=createSprite(612,510,20,20);
    dust.addImage(dustbinImg)
	dust.scale=0.45;
	




	leftSide= new Dustbin (558,510,10,140);
	bottom = new Dustbin (610,575,100,10);
	rightSide= new Dustbin (665,510,10,140);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(backgroundImg);
  Engine.update(engine);

  paper.display();
  ground.display();
  leftSide.display();
  bottom.display();
  rightSide.display();
 


  drawSprites();
 
}

function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15 , y:-15})
	}
}