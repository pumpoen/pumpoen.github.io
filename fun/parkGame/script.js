// jshint esnext: true
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.style.position = 'fixed';
ctx.canvas.width  = (window.innerWidth)*0.45;
ctx.canvas.height = (window.innerWidth)*0.32;
var numberOfRows = 4;
var numberOfColumns = 3;
var numberOfPlots = (numberOfRows*numberOfColumns);
var squareSize = 25;
var padding = 40;
var mouseX;
var mouseY;
var coords;
var x = [];
var y = [];
var boxColor = [
  "red","orange","green","dodgerblue",
  "purple", "darkcyan", "darkgoldenrod", "hotpink", 
  "orangered", "maroon", "indigo","mediumseagreen", "darkgoldenrod"
];
var currentlyClicking;
var currentMouseState = "up";
var clickingRect = [];
var audio;
var canPlay = true;
var where = 100;
var showTab = false;
var timeElapsed = 0;
var canPlay = true;
var howManyClicks = 0;
var faceSpritePos = {
face1: [0, 0, 217, 217, 390, 20, 175, 175],  
face2: [227, 0, 217, 217, 390, 20, 175, 175],  
face3: [453, 0, 217, 217, 390, 20, 175, 175],  
face4: [680, 0, 217, 217, 390, 20, 175, 175],  
//nextrow
face5: [0, 216, 217, 217, 390, 20, 175, 175],  
face6: [227, 216, 217, 217, 390, 20, 175, 175],  
face7: [453, 216, 217, 217, 390, 20, 175, 175],  
face8: [680, 216, 217, 217, 390, 20, 175, 175],  
//nextrow
face9: [0, 426, 217, 217, 390, 20, 175, 175],  
face10: [227, 426, 217, 217, 390, 20, 175, 175],  
face11: [453, 426, 217, 217, 390, 20, 175, 175],  
face12: [680, 426, 217, 217, 390, 20, 175, 175],


faceBase: [1,1,1,1,1,1,1,1],
  };

var img = document.getElementById("face");
var sprite = document.getElementById("faceSprites");
var sxInput = document.getElementById("sxInput");
var syInput = document.getElementById("syInput");
var sWidthInput = document.getElementById("sWidthInput");
var sHeightInput = document.getElementById("sHeightInput");
var dxInput = document.getElementById("dxInput");
var dyInput = document.getElementById("dyInput");
var dWidthInput = document.getElementById("dWidthInput");
var dHeightInput = document.getElementById("dHeightInput");



var dialogueOptions = [
"test",  
"You just clicked on a \nbox. Good Job! As a \nreward, you can \nobserve this face. \nClick a box again to \nget rid of me.",
"Good job, you did it! \nHow was that? You \ncan do it again if \nyou'd like.",
"You're really getting \nthe hang of this \nhuh?",
"So... I guess you're \nwaiting for the game \nto start?",
"There's not really \nmuch of a game yet, \njust me and this \nface below me. I can \nmake the face \ndisappear too.",
"But I don't really \nwant to do that. \nThere's not much \nelse here.",
"Say, let's make a \ngame. You could \npress all the buttons \nseveral times to hear \nthe sound effect.",
"There we go!",
"Yeah!",
"What a honk!",
"Okay that was so \nlame. Let's just wait \nfor the full game \nto be made.",
"...",
"...",
"...",
"Wait wait wait what's \ngoing to happen to \nme during the \nfull game?",
"This was just a \nplaceholder spot for a \ngame asset...",
"Am I going to leave?",
"Where will I go?",
"...",
"I don't want to go.",
"...",
"...",
"...",
"I think I need \nsome time alone.",
];




function howMuchTime() {
  timeElapsed = timeElapsed + 1;
  }

function resizeCanvas(){
  ctx.canvas.width  = (window.innerWidth)*0.45;
  ctx.canvas.height = (window.innerWidth)*0.32;
}

function mouseCoords(event) {
   mouseX = event.offsetX;
   mouseY = event.offsetY;
   coords = "X coords: " + mouseX + ", Y coords: " + mouseY;
   //console.log(coords);
}

function rectPos(){
  for (i=0; i<numberOfColumns; i=i+1) {
    for (j=0; j<numberOfRows; j=j+1) {
    y.push((j*padding)+10);
      x.push((i*padding)+10);
  }
  }

}



function playOnce() {
  if (canPlay === true){
    audio = new Audio("http://www.squeezehorns.com/media/sound-effects/loud-Bright-Squeeze-Horn.mp3");
    audio.play();
          if (showTab === false) {
      showTab = true;
      howManyClicks = howManyClicks + 1;    
      }
      else {
      showTab = false;
      
      }
    canPlay = false;
  }
}


function rectCollision() {
  for (var i = 0; i < x.length; i++) {
    
    if (mouseX >= x[i]){
      if (mouseX <= x[i]+squareSize){
          if (mouseY >= y[i]){
            if (mouseY <= y[i]+squareSize){
              if (currentMouseState === "down"){
              ctx.fillStyle = "#000000";
              ctx.fillRect(x[i], y[i], squareSize, squareSize);
            }
          }
        }
      }
    }
  }
}

  function debug(){
       ctx.fillStyle = "black";

    //yeet
  ctx.font = 'bold 20px serif';
  ctx.fillText(coords, 10, where+160);
  ctx.fillText("Mouse state: " + currentMouseState, 10, where+190);
  ctx.fillText("Tab able to show: " + showTab, 10, where+220);
  //time
  ctx.fillText("Time elapsed = " + timeElapsed/100, 10, where+250);
    ctx.fillText("Box has appeared " + howManyClicks + " times.", 10, where+280);
  
    //debug box positions
  for (var i = 0; i < x.length; i++) {
    ctx.fillStyle = 'blue';
    ctx.font = 'bold 16px serif';
    ctx.fillText("x:"+x[i]+" y:"+y[i], 180,(18 * i)+20);
    }
  }

function mouseStateUp(){
  currentMouseState = "up";
  canPlay = true;
}

function mouseStateDown(){
  currentMouseState = "down";
}

function fillTextMultiLine(ctx, text, x, y) {
  var lineHeight = ctx.measureText("M").width * 1.2;
  var lines = text.split("\n");
  for (var i = 0; i < lines.length; ++i) {
    ctx.fillText(lines[i], x, y);
    y += lineHeight;
  }
}

function main(){
  ctx.clearRect(0, 0, 1000, 1000);
//keep clearRect first


  ctx.drawImage(sprite, sxInput.value, syInput.value, sWidthInput.value, sHeightInput.value, dxInput.value, dyInput.value, dWidthInput.value, dHeightInput.value);    

for (i=0; i<faceSpritePos.length; i++){
  //loop through the faceSpritePos.face[num] and get it 
  }


for (i=0; i<faceSpritePos.face1.length; i++) {
  if (i===0){ tempsxInput = faceSpritePos.face1[i]}
  if (i===1){ tempsyInput = faceSpritePos.face1[i]}
  if (i===2){ tempsWidthInput = faceSpritePos.face1[i]}
  if (i===3){ tempsHeightInput = faceSpritePos.face1[i]}
  if (i===4){ tempdxInput = faceSpritePos.face1[i]}
  if (i===5){ tempdyInput = faceSpritePos.face1[i]}
  if (i===6){ tempdWidthInput = faceSpritePos.face1[i]}
  if (i===7){ tempdHeightInput = faceSpritePos.face1[i]}
  };

//  ctx.drawImage(sprite, tempsxInput, tempsyInput, tempsWidthInput, tempsHeightInput, tempdxInput, tempdyInput, tempdWidthInput, tempdHeightInput);    

//boxes
for ( i = 0; i < numberOfPlots; i++){
  ctx.fillStyle = "rgba(11, 0, 21, 1)";
  ctx.fillRect(x[i]-2, y[i]-2, squareSize+4, squareSize+4);
  ctx.fillStyle = boxColor[i];
  ctx.fillRect(x[i], y[i], squareSize, squareSize);
}
//tab shit
  if (showTab === true) {
    // darker outline box
    ctx.fillStyle = "#5c060a";
    ctx.fillRect(338, 38, 204, 384);
    //lighter one
    ctx.fillStyle = "rgba(247, 220, 221, 0.86)";
    ctx.fillRect(340, 40, 200, 380);  
    
    ctx.fillStyle = '#9c1729';
    ctx.font = 'bold 20px serif';
for ( i = 0; i < dialogueOptions.length; i++){    
  if (howManyClicks === i){
    fillTextMultiLine(ctx, dialogueOptions[howManyClicks], 350, 80);
    playOnce();    
    ctx.drawImage(img, 360, 220, 150, 150);  
  }
  if (howManyClicks >= dialogueOptions.length) {
        fillTextMultiLine(ctx, "...", 350, 80);
  }
}
    }
  //debug();
}

function faceValues() {
console.log("sx:" + sxInput.value +", sy:" +syInput.value+ ", sWidth:"+sWidthInput.value+ ", sHeight:"+sHeightInput.value+", dx:"+dxInput.value+ ", dy:"+dyInput.value+ ", dWidth:"+dWidthInput.value+ ", dHeight:"+dHeightInput.value);
console.log("(" + sxInput.value +", " +syInput.value+ ", "+sWidthInput.value+ ", "+sHeightInput.value+", "+dxInput.value+ ", "+dyInput.value+ ", "+dWidthInput.value+ ", "+dHeightInput.value + ")");

}

window.setInterval(function(){
	main();
	rectCollision();
}, 10);

window.setInterval(function(){
	howMuchTime();
}, 10);


window.onload = function() {
  rectPos();
};

window.addEventListener('resize', resizeCanvas);
canvas.addEventListener('mousedown', mouseStateDown);
canvas.addEventListener('mouseup', mouseStateUp);
canvas.addEventListener('mousemove', mouseCoords);
//canvas.addEventListener('mouseenter', setPosition);

