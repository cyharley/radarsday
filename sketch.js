//The setup function only happens once
var salut=0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(241, 148, 138); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  strokeWeight(3);
  fill(mouseX,255,255,127); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(90,100,25,25); // center of canvas, 20px dia
  fill(93, 173, 226);
  strokeWeight(5);
  rect(mouseX-25,mouseY-25,50,50);
  fill(171, 100, 237);
  stroke(247, 249, 249);
  textSize(salut);
  textFont('Garamond');
  text('RADAR SAVES THE DAY',220,250);
}

function mousePressed(){

if (salut>=100) 
  {salut=0;
 }else{
  salut=salut+5;
 }
}