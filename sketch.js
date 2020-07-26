let xPos = 100
let yPos = 200
let xPos2 = 400
let yPos2 = 200
let xPosB = 260
let yPosB = 250
let xDirection = 1
let yDirection = 1
let myTop;
let myBottom;
let myLeft;
let myRight;
let myT2;
let myR2;
let myL2;
let myB2;
let myT3;
let myB3;
let myR3;
let myL3;
function setup() {
    createCanvas(500,500);
    background(0);
    rectMode(CENTER);
}
function draw() {
   background(0);
     fill(255);
    rect(255,-5,10,1100); 
    fill(0,0,255);
    rect(xPos,yPos,40,100); 
  
    fill(255,0,0);
    rect(xPos2,yPos2,40,100);
    
    if (keyIsDown(87) && yPos > 50 ) { // up 
        yPos -= 3;
    }
    if (keyIsDown(68) && xPos < 223.05 ) { // right 
        xPos += 3;
    }
    if (keyIsDown(65) && xPos > 25 ) { // left
        xPos -= 3;
    }
    if (keyIsDown(83) && yPos < 450 ) { //down
        yPos += 3;
    }
 
    if (keyIsDown(UP_ARROW) && yPos2 >  50 ) {
        yPos2 -= 3;
    }
    if (keyIsDown(DOWN_ARROW) && yPos2 < 450 ) {
        yPos2 += 3;
    }
    if (keyIsDown(LEFT_ARROW) && xPos2 > 283.05 ) {
        xPos2 -= 3;
    }
    if (keyIsDown(RIGHT_ARROW) && xPos2 < 475 ) {
        xPos2 += 3;
    }
    fill(0,255,0);
    ellipse(xPosB,yPosB,50,50)
 
    xPosB -= 3 * xDirection
    yPosB += 3 * yDirection
    if(xPosB < 25 || xPosB > 500) {
        xDirection *= -1;
    }  
    if(yPosB < 25 || yPosB > 500) {
        yDirection *= -1;
    }
    myLeft = xPosB-25;
    myRight = xPosB+25;
    myBottom = yPosB+25;
    myTop = yPosB-25;
    myR2 = xPos+20;
    myT2 = yPos-50;
    myB2 = yPos+50;
    myL2 = xPos-20;
    myL3 = xPos2-20;
    myB3 = yPos2+50;
    myR3 = xPos2+20;
    myT3 = yPos2-50;
    if (!(myLeft > myR3 || myL3 > myRight || myTop > myB3 || myT3 > myBottom)) {
        xDirection*= -1;
        yDirection*= -1;
    }
   else if (!(myLeft > myR2 || myL2 > myRight || myTop > myB2 || myT2 > myBottom)) {
        xDirection*= -1;
        yDirection*= -1;
    }
}