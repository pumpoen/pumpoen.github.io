var liftSprite = null;
var forkSprite= null;
var liftStopSprite = "https://schoolworkcity.neocities.org/school/img/forklift.png";
var forkStopSprite = "https://schoolworkcity.neocities.org/school/img/forklift2.png";
var liftMoveSprite = "https://schoolworkcity.neocities.org/school/img/forkliftMove.gif";
var forkMoveSprite = "https://schoolworkcity.neocities.org/school/img/forkliftMove2.gif";

var liftTruePos = 0;
var liftPosRight = 0;
var liftPosLeft = 0;
var liftPosTop = 0;
var liftPosBottom = 0;

var consoleLogRun = 0;

var rectangleTruePos = 0;
var rectanglePosRight = 0;
var rectanglePosLeft = 0;
var rectanglePosTop = 0;
var rectanglePosBottom = 0;

var finishTruePos = 0;
var finishPosRight = 0;
var finishPosLeft = 0;
var finishPosTop = 0;
var finishPosBottom = 0;

var time = 0;
var displayTime = 0;

initRun = 0;

var moving = true;

function init() {
  if (initRun < 2) {
  liftSprite = document.getElementById("forkliftOne");
  liftSprite.style.position = "relative";
  liftSprite.style.left = "0px";
  liftSprite.style.top = "0px";
  initRun = initRun + 2;
  }
}


function getPosition (item, itemId) {
  item = document.getElementById(itemId);
  itemPos = item.getBoundingClientRect();


   if (itemId === "theRectangle") {
    rectangleTruePos = itemPos,
    rectanglePosTop = Math.round(itemPos.top),
    rectanglePosBottom = Math.round(itemPos.bottom),
    rectanglePosLeft = Math.round(itemPos.left),
    rectanglePosRight =  Math.round(itemPos.right) ;
 }
 
   if (itemId === "forkliftOne") {
    liftTruePos = itemPos,
    liftPosTop = Math.round(itemPos.top),
    liftPosBottom = Math.round(itemPos.bottom),
    liftPosLeft = Math.round(itemPos.left),
    liftPosRight =  Math.round(itemPos.right) ;
 } 

   if (itemId === "finishLine") {
    finishTruePos = itemPos,
    finishPosTop = Math.round(itemPos.top),
    finishPosBottom = Math.round(itemPos.bottom),
    finishPosLeft = Math.round(itemPos.left),
    finishPosRight =  Math.round(itemPos.right) ;
 }

 if ((consoleLogRun < 1) && (itemId === "theRectangle" || itemId === "finishLine") ) {
   consoleLogRun = (consoleLogRun+2);
  console.log (itemId + " top "+Math.round(itemPos.top), itemId +" right "+Math.round(itemPos.right), itemId + " bottom "+Math.round(itemPos.bottom), itemId + " left "+Math.round(itemPos.left));
 }
  if (itemId === "forkliftOne") {
  console.log (itemId + " top "+Math.round(itemPos.top), itemId +" right "+Math.round(itemPos.right), itemId + " bottom "+Math.round(itemPos.bottom), itemId + " left "+Math.round(itemPos.left));
  }
}

function liftPosition () {
  getPosition (liftSprite, "forkliftOne");
}
function rectanglePosition () {
  getPosition (theRectangle, "theRectangle");
}
function finishPosition () {
  getPosition (finishLine, "finishLine");
}

function initTwo() {
  liftPosition ();
  rectanglePosition ();
  finishPosition ();
}


function timerIncrease () {
  time = (time + 1);
  document.getElementById("timer").innerHTML = "time: " + abbreviateNumber(time);
}

var hasGameBeenWon = false;

function gameWin () {
if ((liftPosRight >= finishPosLeft) &&(hasGameBeenWon === false)){
    document.getElementById("win").style.display = "block";
    document.getElementById('finalTime').innerHTML = abbreviateNumber(time);  //updates final time for user
    hasGameBeenWon = true;
  }
}

document.getElementById("win").addEventListener("click", resetGame);

function resetGame() {
  liftSprite.style.position = "relative";
  liftSprite.style.left = "0px";
  liftSprite.style.top = "0px";
  document.getElementById("win").style.display = "none";
  time = 0;
  displaytime = 0;
}

window.setInterval(function(){
timerIncrease();
}, 10);

function abbreviateNumber(value) {
    newValue = (value/100);
    return newValue;
}

function getKeyAndMove(e) { 
  var key_code = e.which || e.keyCode;
  switch (key_code) {
    case 39: //right arrow key
      moveRight();
      break;     
  }
}


function getKeyAndStop(e) {
  var key_code = e.which || e.keyCode;

  switch (key_code) {
    case 39: //right arrow key
      stopRight();
      break;
  }
}

function stopRight () {
  initTwo();
//  if (moving === false) {
  liftSprite.src = liftStopSprite;
  liftSprite.style.left = parseInt(liftSprite.style.left) + 0 + "px";
  moving = true;
//  }
}

function moveRight() {
  initTwo();
  gameWin ();
  if ((liftSprite.src) === (liftStopSprite)) {
    liftSprite.src = liftMoveSprite;
    }
  if (moving === true) {
    liftSprite.style.left = parseInt(liftSprite.style.left) + 5 + "px";
    setTimeout(setMoveToFalse, 1000); 
  }
  else {
   liftSprite.src = liftStopSprite;
 }
}


function setMoveToFalse(){
 moving = false 
}

window.onload = init (); initTwo ();