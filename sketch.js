const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(900,400);
  
  engine = Engine.create();
  world = engine.world;
player1 = new Player(50,200)
  stand1 = new Ground(390,300,250,10)
  stand2 = new Ground(700,200,250,10)
  block = new Box(300,275)
  block1 =new Box(330,275)
  block2 =new Box(360,275)
  block3 =new Box(390,275)
  block4 =new Box(420,275)
  block5 =new Box(450,275)
  block6 =new Box(480,275)
  block7 =new Box(330,235)
  block8 =new Box(360,235)
  block9 =new Box(390,235)
  block10 =new Box(420,235)
  block11=new Box(450,235)
  block12 =new Box(360,195)
  block13 =new Box(390,195)
  block14 =new Box(420,195)
  block15 =new Box(390,155)
  //stand2
  block16 =new Box(640,175)
  block17=new Box(670,175)
  block18=new Box(700,175)
  block19 =new Box(730,175)
  block20=new Box(760,175)
  block21 =new Box(670,135)
  block22 =new Box(700,135)
  block23 =new Box(730,135)
  block24 =new Box(700,95)
sling1 = new Slingshot(player1.body,{x:100,y:200})
} 

function draw() {
  background(0);  
  stand1.display();
  stand2.display();
  push();
  fill("skyblue");
 block1.display();
 block2.display();
 block.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block16.display();
 block17.display();
 block18.display();
 block19.display();
 block20.display();
 fill("pink")
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block24.display();
 fill("turquoise");
 block12.display();
 block13.display();
 block14.display();
 block21.display();
 block22.display();
 block23.display();
 fill("grey");
 block15.display();
 pop();
 player1.display();
sling1.display();


}
function mouseDragged(){
  
      Matter.Body.setPosition(player1.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  sling1.fly();
  
}