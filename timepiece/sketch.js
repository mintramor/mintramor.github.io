
var myRotation;
var imageWidth = 1000;
var imageHeight = 1000;
var img2;
var month;
var img;
var c;

function preload() {
// 	month = month();
// 	if(month == 1) {
// 		img11 = loadImage("capricorn.png");
//
// 	} else if (month == 2){
// 		img12 = loadImage("Aquarius.png");
//
// 	} else if (month == 3){
// 	img13 = loadImage("Pisces");
//
// } else if (month == 4){
// 				img2 = loadImage("aries.png");
//
// } else if (month == 5){
// 	img3 = loadImage("taurus.png");
//
// } else if (month == 6){
// 	img4 = loadImage("gemini.png");
//
// } else if (month == 7){
// 	img5 = loadImage("cancer.png");
//
// } else if (month == 8){
// 	img6 = loadImage("leo.png");
//
// } else if (month == 9){
// 	img7 = loadImage("virgo.png");
//
// } else if (month == 10){
// 	img8 = loadImage("libra.png");
//
// } else if (month == 11){
// 	img9 = loadImage("scorpio.png");
//
// } else if (month == 12){
// 	img10 = loadImage("saggitarius.png");


img = loadImage("background2.png");
img1 = loadImage("rotate2.png");



}


function setup() {
	createCanvas(windowWidth, windowHeight);
  myRotation = 0;
	background(0,0,0);
	myColor = color(0, 255, 255);
	imageMode(CENTER);
	image(img, width/2, height/2);
	console.log(month);

		// image(img2, width/2, height/2);
		// 	image(img3, width/2, height/2);
		// 		image(img4, width/2, height/2);
		// 			image(img5, width/2, height/2);
		// 				image(img6, width/2, height/2);
		// 					image(img7, width/2, height/2);
		// 						image(img8, width/2, height/2);
		// 							image(img9, width/2, height/2);
		// 								image(img10, width/2, height/2);
		// 									image(img11, width/2, height/2);
		// 										image(img12, width/2, height/2);
		// 											image(img13, width/2, height/2);

}


function draw() {



myRotation+=3;
	  var rad = radians(myRotation);

push()
	  translate(width/2, height/2);
	  rotate(rad);
		var a = color(random(200));
	  stroke(a);
	  noFill();
	  rect(-6, -40, 22, 250);
	  stroke(250,250,250);
	  rect(-6, -26, 60, 250);
	  stroke(random(255),random(255),random(255));
	  ellipse(200, 206, 100, 100);
		image(img1, width/2, height/2);

		pop()








	 //fill (67,87,100,0);
	  //ellipse(56, 46, 200, 200);
	  //;


}
