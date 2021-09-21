const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var backGroundImg, melonImg, rabbitImg;

function preload(){
  backGroundImg = loadImage("background.png");
  melonImg = loadImage("melon.png");
  rabbitImg = loadImage("Rabbit-01.png");
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);
  rabbit = createSprite(250, 500, 50, 50);
  rabbit.addImage(rabbitImg);
  rabbit.scale = 0.3;

  button = createImg("cut_btn.png");
  button.position(230, 30);
  button.size(50,50);
  button.mouseClicked(drop);


  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
}

function draw() 
{
  background(51);
  image(backGroundImg, 0,0, displayWidth+100, displayHeight+400);
  rope.show();
  image(melonImg,fruit.position.x,fruit.position.y,80,80 );
  //ellipse(fruit.position.x,fruit.position.y,30,30);

  Engine.update(engine);
  ground.show();
  drawSprites();

 
   
}
function drop(){
  rope.break();
  fruit_con.detach();
  fruit_con = null;
  
}