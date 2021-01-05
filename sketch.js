const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  var canvas = createCanvas(1600,600);

  engine = Engine.create();
  world = engine.world;
 
  

 g1 = new Ground(710,500,350,15);
 g2 = new Ground(1300,300,250,15);
 g3 = new Ground(width/2,600,1700,20);
 b1 = new Block(590,470 ,30 ,40);
 b2 = new Block(630,470 ,30 ,40);
 b3 = new Block(670,470 ,30 ,40);
 b4 = new Block(710,470 ,30 ,40);
 b5 = new Block(750,470 ,30 ,40);
 b6 = new Block(790,470 ,30 ,40);
 b7 = new Block(830,470 ,30 ,40);
 b8 = new Block(630,420 ,30 ,40);
 b9 = new Block(670,420 ,30 ,40);
 b10 = new Block(710,420 ,30 ,40);
 b11 = new Block(750,420 ,30 ,40);
 b12 = new Block(790,420 ,30 ,40);
 b13 = new Block(670,370 ,30 ,40);
 b14 = new Block(710,370 ,30 ,40);
 b15 = new Block(750,370 ,30 ,40);
 b16 = new Block(710,320 ,30 ,40);
 b17 = new Block(1220,270, 30, 40);
 b18 = new Block(1260,270, 30, 40);
 b19 = new Block(1300,270, 30, 40);
 b20 = new Block(1340,270, 30, 40);
 b21 = new Block(1380,270, 30, 40);
 b22 = new Block(1260,220, 30, 40);
 b23 = new Block(1300,220, 30, 40);
 b24 = new Block(1340,220, 30, 40);
 b25 = new Block(1300,170, 30, 40);
 eg = new BaseClass(100,200,30,30);
//  polygon = new Polygon(80,210,40); 
//  slingShot = new SlingShot(polygon,{x:100,y:200});


}

function draw() {
  background(48,22,8);
  Engine.update(engine); 
  
  textSize(20);
  fill(255);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 450, 70);
  
 g1.display();
 g2.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 b10.display();
 b11.display();
 b12.display();
 b13.display();
 b14.display();
 b15.display();
 b16.display();
 b17.display();
 b18.display();
 b19.display();
 b20.display();
 b21.display();
 b22.display();
 b23.display();
 b24.display();
 b25.display();
 eg.display();
//  polygon.display();
//  slingShot.display();
  
}               

/*function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}*/