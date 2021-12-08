var pc, pcimg;
var npc, npcimg;
var bg, bgimg;
var stricker, strickerimg;



function preload(){
  pcimg=loadImage("PC.png")
  npcimg=loadImage("Npc.png")
  bgimg=loadImage("Background.png")

}
function setup() {
  createCanvas(600,400);

  bg=createSprite(300,200,600,400);
  bg.addImage(bgimg);
  bg.scale=4
}

function draw() {
  background(255,255,255);  
  drawSprites();
}