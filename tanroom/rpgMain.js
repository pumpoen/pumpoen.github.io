var charSprite = null;
var dog= "doggy";
var charWalkSprite = "https://schoolworkcity.neocities.org/tanroom/rpgSprites/walkLeft.gif";
var charWalkSpriteRight = "https://schoolworkcity.neocities.org/tanroom/rpgSprites/walkRight.gif";
var charWalkSpriteFront = "https://schoolworkcity.neocities.org/tanroom/rpgSprites/walkFront.gif";
var charWalkSpriteBack = "https://schoolworkcity.neocities.org/tanroom/rpgSprites/walkBack.gif";
var charStillSprite = "https://schoolworkcity.neocities.org/tanroom/rpgSprites/standLeft.png";
var charStillSpriteRight = "https://schoolworkcity.neocities.org/tanroom/rpgSprites/standRight.png";
var charStillSpriteFront = "https://schoolworkcity.neocities.org/tanroom/rpgSprites/standFront.png";
var charStillSpriteBack = "https://schoolworkcity.neocities.org/tanroom/rpgSprites/standBack.png";

var consoleLogRun = 0;
var charSpriteTruePos = 0;
var charSpritePosRight = 0;
var charSpritePosLeft = 0;
var charSpritePosTop = 0;
var charSpritePosBottom = 0;

var bigBgTruePos = 0;
var bigBgPosRight = 0;
var bigBgPosLeft = 0;
var bigBgPosTop = 0;
var bigBgPosBottom = 0;

var doorwayTruePos = 0;
var doorwayPosRight = 0;
var doorwayPosLeft = 0;
var doorwayPosTop = 0;
var doorwayPosBottom = 0;

var doorway2TruePos = 0;
var doorway2PosRight = 0;
var doorway2PosLeft = 0;
var doorway2PosTop = 0;
var doorway2PosBottom = 0;

var bigBg2TruePos = 0;
var bigBg2PosRight = 0;
var bigBg2PosLeft = 0;
var bigBg2PosTop = 0;
var bigBg2PosBottom = 0;

var doorway3TruePos = 0;
var doorway3PosRight = 0;
var doorway3PosLeft = 0;
var doorway3PosTop = 0;
var doorway3PosBottom = 0;

var bigBg3TruePos = 0;
var bigBg3PosRight = 0;
var bigBg3PosLeft = 0;
var bigBg3PosTop = 0;
var bigBg3PosBottom = 0;

var doorway4TruePos = 0;
var doorway4PosRight = 0;
var doorway4PosLeft = 0;
var doorway4PosTop = 0;
var doorway4PosBottom = 0;

var amountOfMovement = 15;

var currentRoom = 1;

function getPosition (item, itemId) {
  item = document.getElementById(itemId);
  itemPos = item.getBoundingClientRect();

  if (itemId === "charSprite") {
    charSpriteTruePos = itemPos,
    charSpritePosTop = Math.round(itemPos.top),
    charSpritePosBottom = Math.round(itemPos.bottom),
    charSpritePosLeft = Math.round(itemPos.left),
    charSpritePosRight =  Math.round(itemPos.right) ;
  }
 if (currentRoom === 1) { 
   if (itemId === "bigBg") {
    bigBgTruePos = itemPos,
    bigBgPosTop = Math.round(itemPos.top),
    bigBgPosBottom = Math.round(itemPos.bottom),
    bigBgPosLeft = Math.round(itemPos.left),
    bigBgPosRight =  Math.round(itemPos.right) ;
  }
    if (itemId === "doorway") {
    doorwayTruePos = itemPos,
    doorwayPosTop = Math.round(itemPos.top),
    doorwayPosBottom = Math.round(itemPos.bottom),
    doorwayPosLeft = Math.round(itemPos.left),
    doorwayPosRight =  Math.round(itemPos.right) ;
  }    
  if (itemId === "doorway2") {
    doorway2TruePos = itemPos,
    doorway2PosTop = Math.round(itemPos.top),
    doorway2PosBottom = Math.round(itemPos.bottom),
    doorway2PosLeft = Math.round(itemPos.left),
    doorway2PosRight =  Math.round(itemPos.right);
  }
}
 if (currentRoom === 2) { 
   if (itemId === "bigBg2") {
    bigBg2TruePos = itemPos,
    bigBg2PosTop = Math.round(itemPos.top),
    bigBg2PosBottom = Math.round(itemPos.bottom),
    bigBg2PosLeft = Math.round(itemPos.left),
    bigBg2PosRight =  Math.round(itemPos.right) ;
  }
    if (itemId === "doorway3") {
    doorway3TruePos = itemPos,
    doorway3PosTop = Math.round(itemPos.top),
    doorway3PosBottom = Math.round(itemPos.bottom),
    doorway3PosLeft = Math.round(itemPos.left),
    doorway3PosRight =  Math.round(itemPos.right) ;
  }
 }  
if (currentRoom === 3) { 
   if (itemId === "bigBg3") {
    bigBg3TruePos = itemPos,
    bigBg3PosTop = Math.round(itemPos.top),
    bigBg3PosBottom = Math.round(itemPos.bottom),
    bigBg3PosLeft = Math.round(itemPos.left),
    bigBg3PosRight =  Math.round(itemPos.right) ;
  }
    if (itemId === "doorway4") {
    doorway4TruePos = itemPos,
    doorway4PosTop = Math.round(itemPos.top),
    doorway4PosBottom = Math.round(itemPos.bottom),
    doorway4PosLeft = Math.round(itemPos.left),
    doorway4PosRight =  Math.round(itemPos.right) ;
  }    
}

 if ((consoleLogRun < 1) && (itemId === "bigBg"  || itemId === "doorway" || itemId === "doorway2") ) {
   consoleLogRun = (consoleLogRun+2);
  console.log (itemId + " top "+Math.round(itemPos.top), itemId +" right "+Math.round(itemPos.right), itemId + " bottom "+Math.round(itemPos.bottom), itemId + " left "+Math.round(itemPos.left));
  }
if (itemId === "charSprite") {
  console.log (itemId + " top "+Math.round(itemPos.top), itemId +" right "+Math.round(itemPos.right), itemId + " bottom "+Math.round(itemPos.bottom), itemId + " left "+Math.round(itemPos.left));
  }
}

function bgPositions () {
 if (currentRoom === 1) {  
   getPosition (bigBg, "bigBg");
   }
 if (currentRoom === 2) {  
   getPosition (bigBg2, "bigBg2"); 
   }
 if (currentRoom === 3) {  
   getPosition (bigBg3, "bigBg3"); 
   }   
  }
  
function doorPositions () {
  if (currentRoom === 1) { 
    getPosition (doorway, "doorway");
    getPosition (doorway2, "doorway2");
    }
 if (currentRoom === 2) {  
    getPosition (doorway3, "doorway3");
  }
 if (currentRoom === 3) {  
    getPosition (doorway4, "doorway4");
  }  
}  
  
function charPosition () {
  getPosition (charSprite, "charSprite");
}

function initTwo() {
  charPosition ();
  bgPositions ();
  doorPositions ();
}

var initRun = 0;

function init() {
  if (initRun < 2) {
  charSprite = document.getElementById("charSprite");
  charSprite.style.position = "relative";
  charSprite.style.left = "0px";
  charSprite.style.top = "0px";
  initRun = initRun + 2;
  }
}
  
function newRoom(newRoom, lastRoom) {
var room = document.getElementById(newRoom);
room.style.display = 'block';
var oldRoom = document.getElementById(lastRoom);
oldRoom.style.display = 'none';
}

function changeRoom () {
  initTwo();
  //right yellow room
  if ((currentRoom === 1) && (charSpritePosRight-40 > doorway2PosLeft)) {
    newRoom("roomTwo", "roomOne");
    currentRoom = 2;
    charSprite.style.left = -550 + "px";
  }
  //left purple room
    if ((currentRoom === 1) && (charSpritePosLeft+40 < doorwayPosRight)) {
    newRoom("roomThree", "roomOne");
    currentRoom = 3;
    charSprite.style.left = 50 + "px";
  }
  //return to main from yellow
    if ((currentRoom === 2) && (charSpritePosLeft+40 < doorway3PosRight)) {
    newRoom("roomOne", "roomTwo");
    currentRoom = 1;
    charSprite.style.left = 50 + "px";
  }
  //return to main from purple
    if ((currentRoom === 3) && (charSpritePosRight-40 > doorway2PosLeft)) {
    newRoom("roomOne", "roomThree");
    currentRoom = 1;
    charSprite.style.left = -550 + "px";
  }
}  
  
function getKeyAndMove(e) {
  changeRoom (); 
  var key_code = e.which || e.keyCode;
  switch (key_code) {
    case 16: //shift key
      runFast();
      break;
     case 37: //left arrow key
      moveLeft();
      break;
    case 38: //Up arrow key
      moveUp();
      break;     
    case 39: //right arrow key
      moveRight();
      break;     
    case 40: //down arrow key
      moveDown();
      break;

     case 65: //a key
      moveLeft();
      break;      
    case 87: //w key
      moveUp();
      break;       
    case 68: //d key
      moveRight();
      break;       
    case 83: //s key
      moveDown();
      break;      
  }
}
function getKeyAndStop(e) {
  var key_code = e.which || e.keyCode;

  switch (key_code) {
    case 37: //left arrow key
      stopLeft();
      break;
    case 38: //Up arrow key
      stopUp();
      break;
    case 39: //right arrow key
      stopRight();
      break;
    case 40: //down arrow key
      stopDown();
      break;

       case 65: //a key
      stopLeft();
      break;      
    case 87: //w key
      stopUp();
      break;       
    case 68: //d key
      stopRight();
      break;       
    case 83: //s key
      stopDown();
      break;  
  }
}
var isRunning = 0;

function runFast () {
  if (isRunning === 1){
  amountOfMovement = 10;
  isRunning = 0;
  }
  if (isRunning === 0){
  amountOfMovement = 5;
    isRunning = 1;
  }
} 
 
function moveWithBoundaries (direction, negOrPos) {
  var correctionForMovement = 50;

//room 1 collision
    if (currentRoom === 1) {
      if (direction === "left") {
          if ((charSpritePosLeft > bigBgPosLeft && (charSpritePosBottom < doorwayPosTop||charSpritePosBottom < doorway2PosTop) ) || charSpritePosLeft > doorwayPosLeft && (charSpritePosBottom > doorwayPosTop||charSpritePosBottom > doorway2PosTop)) {
          charSprite.style.left = parseInt(charSprite.style.left) - amountOfMovement + "px";
          }
      }
      if (direction === "right") {
          if (charSpritePosRight < bigBgPosRight && (charSpritePosBottom < doorwayPosTop||charSpritePosBottom < doorway2PosTop) || charSpritePosRight < doorway2PosRight && (charSpritePosBottom > doorwayPosTop||charSpritePosBottom > doorway2PosTop)) {
          charSprite.style.left = parseInt(charSprite.style.left) + amountOfMovement + "px";
          }
      }
      if (direction === "up") {
          if (charSpritePosBottom-40 > bigBgPosTop && ((charSpritePosLeft > bigBgPosLeft) && (charSpritePosRight < bigBgPosRight)) || charSpritePosTop +40 > doorwayPosTop && (charSpritePosRight > bigBgPosLeft)|| charSpritePosTop +40 > doorway2PosTop && (charSpritePosLeft < bigBgPosRight)) {
          charSprite.style.top = parseInt(charSprite.style.top) - amountOfMovement + "px";
          }
      }
      if (direction === "bottom") {
          if (charSpritePosBottom+10 < bigBgPosBottom || charSpritePosBottom+10 < doorwayPosBottom || charSpritePosBottom+10 < doorway2PosBottom) {
          charSprite.style.top = parseInt(charSprite.style.top) + amountOfMovement + "px";
          }  
      }
    }
    
//room 2 collision    
if (currentRoom === 2) {
      if (direction === "left") {
          if ((charSpritePosLeft > bigBg2PosLeft && ((charSpritePosBottom > doorway3PosTop)||(charSpritePosBottom<doorway3PosBottom))) 
          || ((charSpritePosBottom > doorway3PosTop) && (charSpritePosBottom<doorway3PosBottom)) && (charSpritePosLeft > doorway3PosLeft) ) {
          charSprite.style.left = parseInt(charSprite.style.left) - amountOfMovement + "px";
          }
      }
      if (direction === "right") {
          if (charSpritePosRight < bigBg2PosRight && (charSpritePosBottom < doorway3PosTop) || charSpritePosRight < bigBg2PosRight && (charSpritePosBottom > doorway3PosTop)) {
          charSprite.style.left = parseInt(charSprite.style.left) + amountOfMovement + "px";
          }
      }
      if (direction === "up") {
          if (charSpritePosBottom-40 > bigBg2PosTop && ((charSpritePosLeft > bigBg2PosLeft) && (charSpritePosRight < bigBg2PosRight)) // defines top of bg boundry
          || charSpritePosTop +40 > doorway3PosTop && (charSpritePosRight > bigBg2PosLeft)) {
          charSprite.style.top = parseInt(charSprite.style.top) - amountOfMovement + "px";
          }
      }
      if (direction === "bottom") {
          if (charSpritePosBottom+10 < bigBg2PosBottom || charSpritePosBottom+10 < doorway3PosBottom) {
          charSprite.style.top = parseInt(charSprite.style.top) + amountOfMovement + "px";
          }  
      }
    }
//room 3 collision    
if (currentRoom === 3) {
      if (direction === "left") {
          if (charSpritePosLeft > bigBg3PosLeft) {
          charSprite.style.left = parseInt(charSprite.style.left) - amountOfMovement + "px";
          }
      }
if (direction === "right") {
    if ((charSpritePosRight < bigBg3PosRight && ((charSpritePosBottom > doorway4PosTop)||(charSpritePosBottom<doorway4PosBottom))) 
        || ((charSpritePosBottom > doorway4PosTop) && (charSpritePosBottom<doorway4PosBottom)) && (charSpritePosRight < doorway4PosRight) ) {
        charSprite.style.left = parseInt(charSprite.style.left) + amountOfMovement + "px";
        }
      }
      if (direction === "up") {
          if (charSpritePosBottom-40 > bigBg3PosTop && ((charSpritePosLeft > bigBg3PosLeft) && (charSpritePosRight < bigBg3PosRight)) // defines top of bg boundry
          || charSpritePosTop +40 > doorway4PosTop && (charSpritePosRight > bigBg3PosLeft)) {
          charSprite.style.top = parseInt(charSprite.style.top) - amountOfMovement + "px";
          }
      }
      if (direction === "bottom") {
          if (charSpritePosBottom+10 < bigBg3PosBottom || charSpritePosBottom+10 < doorway4PosBottom) {
          charSprite.style.top = parseInt(charSprite.style.top) + amountOfMovement + "px";
          }  
      }
    }  
}
  
function moveLeft() {
  initTwo();
  if (charSprite.src === charStillSprite ||charSprite.src === charStillSpriteRight ||charSprite.src === charStillSpriteFront ||charSprite.src === charStillSpriteBack) {
  charSprite.src = charWalkSprite;
  }
  moveWithBoundaries ("left");
}
function moveUp() {
  initTwo();
    if (charSprite.src === charStillSprite ||charSprite.src === charStillSpriteRight ||charSprite.src === charStillSpriteFront ||charSprite.src === charStillSpriteBack) {
  charSprite.src = charWalkSpriteBack; }
 moveWithBoundaries ("up");
}
function moveRight() {
  initTwo();
    if (charSprite.src === charStillSprite ||charSprite.src === charStillSpriteRight ||charSprite.src === charStillSpriteFront ||charSprite.src === charStillSpriteBack) {
  charSprite.src = charWalkSpriteRight;}
  moveWithBoundaries ("right");
}
function moveDown() {
  initTwo();
    if (charSprite.src === charStillSprite ||charSprite.src === charStillSpriteRight ||charSprite.src === charStillSpriteFront ||charSprite.src === charStillSpriteBack) {
  charSprite.src = charWalkSpriteFront; }
  moveWithBoundaries ("bottom");
}

function stopLeft () {
  charSprite.src = charStillSprite;
}
function stopRight () {
  charSprite.src = charStillSpriteRight;
}
function stopUp () {
  charSprite.src = charStillSpriteBack;
}
function stopDown () {
  charSprite.src = charStillSpriteFront;
}


 //stolen from cruze https://crusewycoff1.github.io/ //
    setInterval(function () {
      if(rising === true){
        if (risevalue < 100){
          y = y - 1
          risevalue = risevalue + 1
        }
      }
      if(risevalue === 100){
        if(rising === true){
          rising = false
          falling = true
        }
      }
        if(falling === true){
          y = y + crouch
        }  
      if(y >= 430){
        falling = false
        risevalue = 0
      }

      if(goright === true){
        x = x + 1
      }
      if(goleft === true){
        x = x - 1
      }
      shinji.style.top = y + "px"
      shinji.style.left = x + "px"
    }, 1) // 1000ms = 1 second





window.onload = init (); initTwo();