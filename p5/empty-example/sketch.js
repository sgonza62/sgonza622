var canvas;

//scene 1 Images
var doorButton;
var scene1Pic;

//scene 2 images
var scene2Pic;

//scene 3 images
var scene3Pic;

//scene 4(Lake) Images
var lakePic1;
var lakePic2;
var lakePic3;
var lakePic4;
var lakePic5;



//scene4(river) Images
var riverPic1;
var riverPic2;
var riverPic3;
var riverPic4;
var riverPic5;


var greeting;


function preload(){
doorButton = loadImage('../images/door.png');
scene1Pic = loadImage('../images/scene1.png');

scene2Pic = loadImage('../images/scene2done.png');

scene3Pic = loadImage('../images/scene3.png');

lakePic1 = loadImage('../images/scene4.png');
lakePic2 = loadImage('../images/scene4.5lake.png');
lakePic3 = loadImage('../images/scene4lakefish1.png');


riverPic1 = loadImage('../images/scene4river.png');
riverPic2 = loadImage('../images/scene4.5river.png');
riverPic3 = loadImage('../images/scene4riverfish1.png');



}



function setup(){
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style("z-index", "-1");
beginning();
}

function beginning(){
background(255);
greeting1 = 'You are hungry and depressed; your only source of food is fish. When you are ready, open the door to grab your things and leave.';
textSize(32);
text(greeting1, 10, 10, 700, 700);


image(doorButton, windowWidth-500, windowHeight-550);
image(scene1Pic, windowWidth-1350, windowHeight-550);


s1button = createButton('Open')
s1button.position(1240, 430);
s1button.mousePressed(scene2);
}



function scene2(){
background(255);
s1button.remove()

image(scene2Pic, 5, 20);


s2slider = createSlider(0, 100, 0);
s2slider.position(650, 600);
s2slider.input(scene3);

}



function mouseClicked(){
s2slider.remove()
}

function scene3(){
background(255);
image(scene3Pic, 30, 150);

button1 = createButton('Lake')
button1.position(300,600);
button1.mousePressed(Lake);

button2 = createButton('River')
button2.position(1150,600);
button2.mousePressed(River);
}

function Lake(){
background(255);
button1.remove();
button2.remove();
image(lakePic1, 20,0);
castlakebutton = createButton('Cast your fishing rod')
castlakebutton.position(500, 500);
castlakebutton.mousePressed(Lakecast);
}

function Lakecast(){
  background(255);
  castlakebutton.remove();
  image(lakePic2, 20, 0);
  reellake = createButton('Reel the rod in')
  reellake.position(500, 500);
  reellake.mousePressed(lakefish);
}

function lakefish(){
  background(255);
  reellake.remove();
  image(lakePic3, 20, 0);
  reelagain = createButton('Click Here')
  reelagain.position(500, 500);
  reelagain.mousePressed(fishtalk);

}
function fishtalk(){
reelagain.remove();
fish1 = '"What do you call a fake noodle? An Impasta."';
textSize(32);
text(fish1, 350, 350, 450, 450);
end1 = createButton('End')
end1.position(500, 500);
end1.mousePressed(endstory2);
}

function endstory2(){
end1.remove();
  background(0);

}



function River(){
background(255);
button1.remove();
button2.remove();
image(riverPic1, 20, 0);
castriverbutton = createButton('Cast your fishing rod')
castriverbutton.position(500, 500);
castriverbutton.mousePressed(rivercast);
}


function rivercast(){
background(255);
castriverbutton.remove();
image(riverPic2, 20, 0);
reelriver = createButton('Reel the rod in')
reelriver.position(500, 500);
reelriver.mousePressed(riverfish);
}

function riverfish(){
  background(255);
  reelriver.remove();
  image(riverPic3, 20, 0);
  reelagain2 = createButton('Click Here')
  reelagain2.position(500, 500);
  reelagain2.mousePressed(fishtalk2);

}

function fishtalk2(){
reelagain2.remove();
fish2= '"Want to hear a joke about paper? Nevermind it is tearable."';
textSize(32);
text(fish2, 350, 350, 450, 450);
end = createButton('End')
end.position(500, 500);
end.mousePressed(endstory);
}

function endstory(){
end.remove();
background(0);

}


function draw(){


}


function windowResized(){
  canvas = createCanvas(windowWidth, windowHeight);
}