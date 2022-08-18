var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var img = document.getElementById("charSprite");
var imageDimensions = 200;
var posX = 10;
var posY = 10;
var spriteCoordinates = {  
    walkDownX: [230,300,370,300],
    walkDownY: [40,40,40,40],
    walkLeftX: [230,300,370,300],
    walkLeftY:  [133,133,133,133],
    walkRightX: [230,300,370,300],
    walkRightY:  [223,223,223,223],
    walkUpX: [230,300,370,300],    
    walkUpY:  [315,315,315,315],
    stillSpriteX: [300,300,300,300],
    stillSpriteDownY: [40,40,40,40],
    stillSpriteLeftY: [133,133,133,133],
    stillSpriteRightY: [223,223,223,223],
    stillSpriteUpY: [315,315,315,315],
  };
var frameIndex = 0;
var amountOfMovement = 1;
var frameChangeTime = 100;
var running = false;
var movingLeft = false;
var movingRight = false;
var movingUp = false;
var movingDown = false;
var direction = "down";

var currentSpriteX = spriteCoordinates.stillSpriteX;
var currentSpriteY = spriteCoordinates.stillSpriteDownY;


function main() {
  ctx.clearRect(0,0,8300,4300);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, currentSpriteX[frameIndex], currentSpriteY[frameIndex], 72, 72, posX, posY, 50, 50);
    }

function changeFrame() {
  frameIndex = frameIndex +1;
  if (frameIndex === 3) {frameIndex = 0}
  }
  
function whichSprite() {
  if (movingDown === true){
    currentSpriteX = spriteCoordinates.walkDownX;
    currentSpriteY = spriteCoordinates.walkDownY;
    }
  if (movingLeft === true){
    currentSpriteX = spriteCoordinates.walkLeftX;
    currentSpriteY = spriteCoordinates.walkLeftY;
    }
  if (movingRight === true){
    currentSpriteX = spriteCoordinates.walkRightX;
    currentSpriteY = spriteCoordinates.walkRightY;
    }
  if (movingUp === true){
    currentSpriteX = spriteCoordinates.walkUpX;
    currentSpriteY = spriteCoordinates.walkUpY;
    }
  }  

function getKeyAndMove(e) {
  var key_code = e.which || e.keyCode;
    switch (key_code) {
//arrow controls 
    case 37: //left arrow key
      moveLeft();
      whichSprite();
    break;
    case 38: //Up arrow key
      moveUp();
      whichSprite();
    break;
    case 39: //right arrow key
      moveRight();
      whichSprite();
    break;
    case 40: //down arrow key
      moveDown();
      whichSprite();
    break;
// run key
    case 16: //shift key
      toggleRun();
    break;    
//wasd controls    
    case 65: //a key
      moveLeft();
      whichSprite();
      break;      
    case 87: //w key
      moveUp();
      whichSprite();
      break;       
    case 68: //d key
      moveRight();
      whichSprite();
      break;       
    case 83: //s key
      moveDown();
      whichSprite();
      break;    
        }    
    }

function stopPlease () {
   movingLeft = false;
   movingRight = false;
   movingUp = false;
   movingDown = false;
 }

function toggleRun (){
  if (running === true) {
    running = false;
    }
  else if (running === false) {
    running = true;
    }    
  }

function moveLeft() {
  movingLeft = true;
  direction = "left";
}

function moveRight() {
  movingRight = true;
  direction = "right";
}
function moveDown() {
  movingDown = true;
  direction = "down";
}
function moveUp() {
  movingUp = true;
  direction = "up";
}

function getKeyAndStop(e) {
stopPlease();
    if ((direction === "left")){
      currentSpriteX = spriteCoordinates.stillSpriteX;
      currentSpriteY = spriteCoordinates.stillSpriteLeftY;
      }
    if ((direction === "right")){
      currentSpriteX = spriteCoordinates.stillSpriteX;
      currentSpriteY = spriteCoordinates.stillSpriteRightY;
      }
    if ((direction === "up")){
      currentSpriteX = spriteCoordinates.stillSpriteX;
      currentSpriteY = spriteCoordinates.stillSpriteUpY;
      }
    if ((direction === "down")){
      currentSpriteX = spriteCoordinates.stillSpriteX;
      currentSpriteY = spriteCoordinates.stillSpriteDownY;
      }
    }

function movementCheck () {
   if (movingLeft === true) {
          posX = posX - amountOfMovement;
      }
   if (movingRight === true) {
          posX = posX + amountOfMovement;
      }
   if (movingDown === true) {
          posY = posY + amountOfMovement;
      }
   if (movingUp === true) {
          posY = posY - amountOfMovement;
      }
      
  if (running === true) {
    amountOfMovement = 2;
    frameChangeTime = 10;
    }
  if (running === false) {
    amountOfMovement = 1;
    frameChangeTime = 100;
    }          
  }

var visibleControls = false;

function mobileControlToggle() {
 var controls = document.getElementById("mobileControls");
if (visibleControls === false){ controls.style.display = "block";
    visibleControls = true;
    }
else if (visibleControls === true){ controls.style.display = "none";
    visibleControls = false;
    }
  }
  
function mobileControlMoveButtons (input) {
    if (input === "left") {
      moveLeft();
      whichSprite();
    }
    else if (input === "right") {
      moveRight();
      whichSprite();
    }
    else if (direction === "up") {
      moveUp();
      whichSprite();
    }
    else if (input === "down") {
      moveDown();
      whichSprite();
    }
// run key
    else if (input === "run") {
      toggleRun();
    }
      else {
      moveUp();
      whichSprite();
    }
      //  getKeyAndStop(40)
  }  
  
  //why wont this work hate hate hate
  
window.setInterval(function(){
	changeFrame();
}, frameChangeTime);

window.setInterval(function(){
	movementCheck();
}, 10);

window.setInterval(function(){
	main();
}, 10);

window.onload = function() {
  main();
	whichSprite();
};