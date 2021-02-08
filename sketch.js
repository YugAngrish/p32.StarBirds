const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
  
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10,enemy11,enemy12,enemy13;
var starBird;
var bg;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10
var log1,log2,log3,log4,log5,log6,log7,log8,log9,log10;
var ground1,ground2;
var slingshot;
var catapult;
var gGround;

function preload(){
  bg = loadImage("bg1.png")
  changeBg();
}
function setup() {
  createCanvas(1200,500);
  
  engine = Engine.create();
  world = engine.world;


enemy1 = new Enemy(450,350);
enemy2 = new Enemy(450,300);
enemy3 = new Enemy(680,350);
enemy4 = new Enemy(680,310);
enemy5 = new Enemy(680,250);
enemy6 = new Enemy(840,200);
enemy7 = new Enemy(900,200);
enemy8 = new Enemy(960,200);
enemy9 = new Enemy(820,120)
enemy10 = new Enemy(860,120);
enemy11= new Enemy(960,120);
enemy12 = new Enemy(1010,120);
enemy13 = new Enemy(910,120)

starBird = new StarBird(260,150)

box1 = new Box(400,350)
box2 = new Box(510,350)
box3 = new Box(600,350)
box4 = new Box(750,350)
box5 = new Box(600,320)
box6 = new Box(750,320)
box7 = new Box(820,200)
box8 = new Box(1010,200);

log1 = new Log(455,330,160,20)
log2 = new Log(675,330,200,20)
log3 = new Log(675,290,200,20)
log4 = new Log(700,270,20,50)
log5 = new Log(650,270,20,50)
log6 = new Log(610,270,20,50)
log7 = new Log(750,270,20,50)
log8 = new Log(675,250,200,20)
log9 = new Log(905,150,260,20)

ground1 = new Ground(150,315,300,150);
ground2 = new Ground(700,382.5,800,15)

gGround = new Ground(930,285,300,210)
catapult = new Catapult(250,172)

slingshot = new Slingshot(starBird.body,{x:250,y:150})
  Engine.run(engine)
}

function draw() {
  if(bg)
  background(bg); 
  Engine.update(engine) 
  drawSprites();
  ground1.display();
  ground2.display();

  enemy1.display();
  enemy2.display();
  enemy3.display();
  enemy4.display();
  enemy5.display();
  enemy6.display();
  enemy7.display();
  enemy8.display();
  enemy9.display();
  enemy10.display();
  enemy11.display();
  enemy12.display();
  enemy13.display();
  
 box1.display();
 box2.display(); 
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();

 log1.display();
 log2.display();
 log3.display();
 log4.display();
 log5.display();
 log6.display();
 log7.display();
 log8.display();
 log9.display();
 
 catapult.display();
 starBird.display();
 slingshot.display();

 gGround.display();

 
 
}
function mouseDragged(){
  Matter.Body.setPosition(starBird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly()
}
function keyPressed(){
  if(keyCode===32){
    slingshot.attach(starBird.body)
  }
}
async function changeBg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var JSONresponse = await response.json();
  var dateTime = JSONresponse.datetime
  var hour = dateTime.slice(11,13)
  console.log(hour);

  if(hour>4&&hour<19){
    bg = loadImage("bg1.png")
    console.log("DayTime")
  }
  else{
 bg = loadImage("bg3.jpg")
 console.log("NightTime")
}
}