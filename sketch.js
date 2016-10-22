var x=0;
var y=0;
var z=0;
var stars= ["SEXY","LOVE","★","☆","","","","","","","","","","","",""]

function setup() {
  createCanvas(windowWidth,windowHeight);
  noLoop();
}

function draw() {
  x=x+2;
  y=y+3;
  z=z+5;
  if(x>255){
    x-=255;
  }
  if(y>255){
    y-=255;
  }
  if(z>255){
    z-=255;
  }
  textSize(300);
  textAlign(CENTER,CENTER);
  text(random(stars),random(windowWidth),random(windowHeight));
  fill(x,y,z);
  stroke(20);
  strokeWeight(20);
}

function mousePressed(){
loop();

}
function mouseReleased(){
noLoop();
}
