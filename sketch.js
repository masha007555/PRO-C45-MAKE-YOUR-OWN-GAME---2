var back,back2,backImg;
var BADSImg;
var BANSImg;
var bullet, bullet1_Img,bullet2_Img;
var homeBG_Img;
var play,playImg;
var shop,shopImg,shopBG_Img;
var sun,sunImg
var gameState = "home";
var bulletsR = 10;
var tBullets = 10;
var stage_B1,stage_B2;
var shop_B;
var BM,buy,click,shoot;
var s1,s2,s3,s4,s5,s6,s7,s8;

var stage1WP = 200;
var stage1LD = -100;
var stage2WP = 200;
var stage2LD = -100;
var stage3WP = 300;
var stage3LD = -150;
var stage4WP = 200;
var stage4LD = -100;
var stage5WP = 300;
var stage5LD = -150;
var stage6WP = 300;
var stage6LD = -150;
var stage7WP = 400;
var stage7LD = -200;
var stage8WP = 750;
var stage8LD = -50;

var helicopter,helicopterAnimation;
var vHelicopter,vHelicopterAnimation;
var FH,FHImg;
var FVH,FVHImg;
var BS,BSImg;

function preload() {
  shopBG_Img = loadImage("images/shopBG.jpeg");
  backImg = loadImage("images/back.png");
  BADSImg = loadImage("images/BADS.jpeg");
  BANSImg = loadImage("images/BANS.jpeg");
  bullet1_Img = loadImage("images/bullet_1.png");
  bullet2_Img = loadImage("images/bullet_2.png");
  homeBG_Img = loadImage("images/homeBG.jpeg");
  playImg = loadImage("images/play.png");
  shopImg = loadImage("images/shop.png");
  sunImg = loadImage("images/sun.png");
  BSImg = loadImage("images/BS.png");

  helicopterAnimation = loadAnimation("images/h1.png","images/h2.png","images/h3.png","images/h4.png");
  vHelicopterAnimation = loadAnimation("images/vh1.png","images/vh2.png","images/vh3.png","images/vh4.png");

  BM = loadSound("audio/BM.mp4");
  buy = loadSound("audio/buy.mp4");
  click = loadSound("audio/click.mpeg");
  shoot = loadSound("audio/shoot.mpeg");
}

function setup() {
  createCanvas(1500,700);
  
  BM.loop();
  BM.setVolume(0.3);

  play = createSprite(1400,300,10,10);
  play.addImage(playImg);
  play.scale = 0.25;

  shop = createSprite(1400,75,10,10);
  shop.addImage(shopImg);
  shop.scale = 0.06;


  stage_B1 = createSprite(width/2,height/2,1300,600);
  stage_B1.shapeColor = "orange";
  stage_B2 = createSprite(width/2,380,1090,500);
  stage_B2.shapeColor = "lightblue";

  shop_B = createSprite(width/2,height/2,1300,600);
  shop_B.shapeColor = "lightgreen";


  s1 = createSprite(350,250,200,150);
  s1.shapeColor = "yellow";

  s2 = createSprite(600,250,200,150);
  s2.shapeColor = "brown";

  s3 = createSprite(850,250,200,150);
  s3.shapeColor = "brown";

  s4 = createSprite(1100,250,200,150);
  s4.shapeColor = "brown";

  s5 = createSprite(350,500,200,150);
  s5.shapeColor = "brown";

  s6 = createSprite(600,500,200,150);
  s6.shapeColor = "brown";

  s7 = createSprite(850,500,200,150);
  s7.shapeColor = "brown";

  s8 = createSprite(1100,500,200,150);
  s8.shapeColor = "red";


  helicopter = createSprite(1200,height/2-100);
  helicopter.addAnimation("hFlying",helicopterAnimation);

  vHelicopter = createSprite(200,height/2-100);
  vHelicopter.addAnimation("vhFlying",vHelicopterAnimation);
  vHelicopter.scale = 0.6;


  FH = createSprite(1200,height/2-150);
  FH.addAnimation("FHFlying",helicopterAnimation);

  FVH = createSprite(200,height/2-50);
  FVH.addAnimation("FVHFlying",vHelicopterAnimation);
  FVH.scale = 0.6;

  BS = createSprite(200,height/2-100);
  BS.addImage(BSImg);
  BS.scale = 0.5


  back = createSprite(160,110,10,10);
  back.addImage(backImg);
  back.scale = 0.2;

  back2 = createSprite(50,650,10,10);
  back2.addImage(backImg);
  back2.scale = 0.2;
  
}

function draw() {
  background(homeBG_Img);
  drawSprites();
  edges = createEdgeSprites();

  if (gameState ==="home"){
    home();
  }
  if (gameState === "stages"){
    stages();
  }
  if (gameState === "shop"){
    Shop();
  }

  if (gameState === "stage1"){
    stage1();
  }
  if (gameState === "stage2"){
    stage2();
  }
  if (gameState === "stage3"){
    stage3();
  }
  if (gameState === "stage4"){
    stage4();
  }
  if (gameState === "stage5"){
    stage5();
  }
  if (gameState === "stage6"){
    stage6();
  }
  if (gameState === "stage7"){
    stage7();
  }
  if (gameState === "stage8"){
    stage8();
  }

  helicopter.collide(edges);
  vHelicopter.collide(edges);
}

function home() {
  drawSprites();

  shop.visible = true;
  play.visible = true;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = true;
  FVH.visible = true;
  BS.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("WarCopter",550,100);

  push();  
  FH.velocityX = -3;
  FVH.velocityX = 3;

  if(FH.x < -100){
    FH.x = width+100;
  }

  if(FVH.x > width+100){
    FVH.x = -100;
  }
  pop();

  if (mousePressedOver(play)){
    click.play();
    gameState = "stages";
  }

  if (mousePressedOver(shop)){
    click.play();
    gameState = "shop";
  }
}

function Shop(){
  background(shopBG_Img);
  drawSprites();

  shop.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = true;
  stage_B2.visible = false;
  shop_B.visible = true;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  push();
  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("SHOP",600,130);
  pop();

  //top line
  strokeWeight(5);
  line(100,160,1400,160);

  //LHS horizontal lines
  line(225,160,225,650);
  line(350,160,350,650);
  line(500,160,500,650);
  line(625,160,625,650);

  //mid line
  push();
  strokeWeight(10);
  line(width/2,165,width/2,645);
  pop();

  //LHS verticle lines
  line(100,550,1400,550);
  line(100,450,1400,450);
  line(100,350,width/2,350);
  line(100,250,width/2,250);

  //RHS verticle lines
  line(width/2+175,450,width/2+175,650);
  line(width/2+350,450,width/2+350,650);
  line(width/2+525,450,width/2+525,650);

  //RHS horizontal lines
  line(100,50,1400,50);
  line(100,50,100,650);
  line(100,650,1400,650);
  line(1400,50,1400,650);

  if (mousePressedOver(back)){
    click.play();
    gameState = "home";
  }
}

function stages(){
  background(shopBG_Img);
  drawSprites();

  shop.visible = false;
  play.visible = false;
  stage_B1.visible = true;
  back.visible = true;
  stage_B2.visible = true;
  shop_B.visible = false;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;

  s1.visible = true;
  s2.visible = true;
  s3.visible = true;
  s4.visible = true;
  s5.visible = true;
  s6.visible = true;
  s7.visible = true;
  s8.visible = true;

  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("STAGES",600,120);
  text("1",325,275);
  text("2",575,275);
  text("3",825,275);
  text("4",1075,275);
  text("5",325,525);
  text("6",575,525);
  text("7",825,525);
  text("8",1075,525);


  if (mousePressedOver(s1)){
    click.play();
    gameState = "stage1";
  }
  if (mousePressedOver(s2)){
    click.play();
    gameState = "stage2";
  }
  if (mousePressedOver(s3)){
    click.play();
    gameState = "stage3";
  }
  if (mousePressedOver(s4)){
    click.play();
    gameState = "stage4";
  }
  if (mousePressedOver(s5)){
    click.play();
    gameState = "stage5";
  }
  if (mousePressedOver(s6)){
    click.play();
    gameState = "stage6";
  }
  if (mousePressedOver(s7)){
    click.play();
    gameState = "stage7";
  }
  if (mousePressedOver(s8)){
    click.play();
    gameState = "stage8";
  }

 if (mousePressedOver(back)){
    click.play();
    gameState = "home";
  }
}

function stage1(){
  background(BADSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("black")
  text("STAGE-1", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage1WP,25,50);
  text("Loosing Deduction "+stage1LD,25,110);

  shop.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  helicopter.visible = true;
  vHelicopter.visible = true;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  push();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  vHelicopter.y = helicopter.y;
  pop();

  // if (helicopter.y > 1000){
  //   gameState = "stages";
  // }
  
  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
  }
}

function stage2(){
  background(BANSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("white")
  text("STAGE-2", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage2WP,25,50);
  text("Loosing Deduction "+stage2LD,25,110);

  shop.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  push();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  vHelicopter.y = helicopter.y;
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
  }
}

function stage3(){
  background(BANSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("white")
  text("STAGE-3", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage3WP,25,50);
  text("Loosing Deduction "+stage3LD,25,110);

  shop.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  vHelicopter.y = helicopter.y;
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
  }
}

function stage4(){
  background(BADSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("black")
  text("STAGE- 4", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage4WP,25,50);
  text("Loosing Deduction "+stage4LD,25,110);

  shop.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  vHelicopter.y = helicopter.y;
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
  }
}

function stage5(){
  background(BANSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("white");
  text("STAGE-5", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage5WP,25,50);
  text("Loosing Deduction "+stage5LD,25,110);

  shop.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  vHelicopter.y = helicopter.y;
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
  }
}

function stage6(){
  background(BADSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("black");
  text("STAGE- 6", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage6WP,25,50);
  text("Loosing Deduction "+stage6LD,25,110);

  shop.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  vHelicopter.y = helicopter.y;
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
  }
}

function stage7(){
  background(BADSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("black");
  text("STAGE-7", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage7WP,25,50);
  text("Loosing Deduction "+stage7LD,25,110);

  shop.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  vHelicopter.y = helicopter.y;
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
  }
}

function stage8(){
  background(BANSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("white");
  text("STAGE-8 (BOSS LEVEL)", width/2-200,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage8WP,25,50);
  text("Loosing Deduction "+stage8LD,25,110);

  shop.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = false;
  BS.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();
  helicopter.velocityX = 0;
  BS.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  BS.y = helicopter.y;
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
  }
}