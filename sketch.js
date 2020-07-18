let xPos = 100
let yPos = 100
let xPos2 = 300
let yPos2 = 400
function setup() {
    createCanvas(500,500);
    background(0);
}

function draw() { 
   background(0);
   fill(0,0,255);
   rect(xPos2,yPos2,25,100); 
   fill(255);
   rect(245,-5,25,505)
    
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



}