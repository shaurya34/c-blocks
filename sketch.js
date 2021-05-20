const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var blueb,pinkb,redb,yellowb,lava
var bImg,pImg,rImg,yImg,lImg


function preload(){
  bImg = loadImage("blue block.png")
  pImg = loadImage("pink block.png")
  rImg = loadImage("red block.png")
  yImg = loadImage("yellow block.png")
  lImg = loadImage("lava.png")

}

function setup() {
  createCanvas(800,400);
  blueb = createSprite(500, 200, 50, 50);
  blueb.addImage(bImg)
  pinkb = createSprite(400, 200, 50, 50);
  pinkb.addImage(pImg)
  redb = createSprite(600, 200, 50, 50);
  redb.addImage(rImg)
  yellowb = createSprite(700, 200, 50, 50);
  yellowb.addImage(yImg)
  lava = createSprite(400, 370, 800, 60);
  
  lava.shapeColor = rgb(255,77,0)
}

function draw() {
  background(0);  
  drawSprites();
}