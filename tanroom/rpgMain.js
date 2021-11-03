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

var charSpritePosRight = 0;
var charSpritePosLeft = 0;
var charSpritePosTop = 0;
var charSpritePosBottom = 0;

var bigBgPosRight = 0;
var bigBgPosLeft = 0;
var bigBgPosTop = 0;
var bigBgPosBottom = 0;

var doorwayPosRight = 0;
var doorwayPosLeft = 0;
var doorwayPosTop = 0;
var doorwayPosBottom = 0;

var doorway2PosRight = 0;
var doorway2PosLeft = 0;
var doorway2PosTop = 0;
var doorway2PosBottom = 0;

function getPosition (item, itemId) {
  item = document.getElementById(itemId);
  itemPos = item.getBoundingClientRect();
  
    itemId+PosTop = itemPos.top;
    itemId+PosBottom = itemPos.bottom;
    itemId+PosLeft = itemPos.left;
    itemId+PosRight =  itemPos.right ;
  console.log (itemId + " top "+itemPos.top, itemId +" right "+itemPos.right, itemId + " bottom "+itemPos.bottom, itemId + " left "+itemPos.left);
}
function bgPositions () {
  getPosition (bigBg, "bigBg");
  }
function doorPositions () {
  getPosition (doorway, "doorway");
  getPosition (doorway2, "doorway2"); 
  }
function charPosition () {
  getPosition (charSprite, "charSprite");
}
function initTwo() {
  charPosition ();
  bgPositions ();
  doorPositions ();
}

function init() {
  charSprite = document.getElementById("charSprite");
  charSprite.style.position = "relative";
  charSprite.style.left = "0px";
  charSprite.style.top = "0px";
  }
function getKeyAndMove(e) {
  var key_code = e.which || e.keyCode;
  switch (key_code) {
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
  }
}
  
function moveLeft() {
  initTwo();
  if (charSprite.src === charStillSprite ||charSprite.src === charStillSpriteRight ||charSprite.src === charStillSpriteFront ||charSprite.src === charStillSpriteBack) {
  charSprite.src = charWalkSprite;
  }
  if(charSprite.left <= bigBg.left && charSprite.left <= doorway.left && charSprite.left <= doorway2.left){ 
    charSprite.style.left = parseInt(charSprite.style.left) - 5 + "px";
  }
}
function moveUp() {
  initTwo();
    if (charSprite.src === charStillSprite ||charSprite.src === charStillSpriteRight ||charSprite.src === charStillSpriteFront ||charSprite.src === charStillSpriteBack) {
  charSprite.src = charWalkSpriteBack; }
  charSprite.style.top = parseInt(charSprite.style.top) - 5 + "px";
}
function moveRight() {
  initTwo();
    if (charSprite.src === charStillSprite ||charSprite.src === charStillSpriteRight ||charSprite.src === charStillSpriteFront ||charSprite.src === charStillSpriteBack) {
  charSprite.src = charWalkSpriteRight; }
  if(charSprite.right <= bigBg.right && charSprite.right <= doorway.right && charSprite.right <= doorway2.right){ 
   charSprite.style.left = parseInt(charSprite.style.left) + 5+ "px";
  }
}

function moveDown() {
  initTwo();
    if (charSprite.src === charStillSprite ||charSprite.src === charStillSpriteRight ||charSprite.src === charStillSpriteFront ||charSprite.src === charStillSpriteBack) {
  charSprite.src = charWalkSpriteFront; }
  charSprite.style.top = parseInt(charSprite.style.top) + 5 + "px";
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
window.onload = init (); initTwo();