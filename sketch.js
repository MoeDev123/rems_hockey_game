let xPos = 100
let yPos = 100
let xPos2 = 300
let yPos2 = 400
let xPosBall = 250;
let yPosBall = 250;
let xSpeedBall;
let ySpeedBall; 
let xDirectionBall = 1;
let yDirectionBall = 1;



function setup() {
    createCanvas(500,500);
    background(0);

    xSpeedBall = random(-5,5);
    ySpeedBall = (-5,5);

}


function draw() { 
   background(0);
   fill(255,255,0)
   //yellow blue side goal
   rect(475,190,25,100)
   //yellow red side goal
   rect(0,190,25,100)
   fill(255);
   //border line
   rect(245,-5,25,505)
    fill(0,0,255);
   //blue player
   rect(xPos2,yPos2,25,100); 
   
    if (keyIsDown(UP_ARROW) && yPos2 >  0 ) {
    yPos2 -= 4;
}
    if (keyIsDown(DOWN_ARROW) && yPos2 < 400 ) {
    yPos2 += 4;
}
    if (keyIsDown(LEFT_ARROW) && xPos2 > 270 ) {
    xPos2 -= 4;
}
    if (keyIsDown(RIGHT_ARROW) && xPos2 < 473 ) {
    xPos2 += 4;
}
 
    fill(255,0,0);
    //red player
    rect(xPos,yPos,25,100);
    

        if (keyIsDown(87) && yPos > 0 )  { // up 
        yPos -= 4;
 }
        if (keyIsDown(68) && xPos < 220 ) { // right 
        xPos += 4;
 }
        if (keyIsDown(65) && xPos > 0 ) { // left
        xPos -= 4;
}
        if (keyIsDown(83) && yPos < 400 ) { //down
        yPos += 4;
}


fill(0, 255, 0);
   ellipse(xPosBall, yPosBall, 50, 50);

   xPosBall += xSpeedBall * xDirectionBall;
   yPosBall += ySpeedBall * yDirectionBall;

    if (xPosBall < 25 || xPosBall > 475) {
        xDirectionBall *= -1;

    }

    if (yPosBall < 25 || yPosBall > 475) {
        yDirectionBall *= -1;

    }



    

    





}