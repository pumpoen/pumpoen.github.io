var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var img = document.getElementById("charSprite");
var imageDimensions = 400;
var posX = 0;
var posY = 0;
var sX = [0,100,0,100];
var sY = [0,0,100,100];
var frameIndex = 0;

function main() {
  ctx.clearRect(0,0,830,430);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, sX[frameIndex], sY[frameIndex], 100, 100, posX, posY, 100, 100);
    }

function changeFrame() {
  frameIndex = frameIndex +1;
  if (frameIndex === 3) {frameIndex = 0}
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
    function moveLeft() {
        posX = posX - 1;
    }
    function moveRight() {
        posX = posX + 1;
    }
    function moveDown() {
        posY = posY + 1;
    }
    function moveUp() {
        posY = posY - 1;
    }



window.setInterval(function(){
	changeFrame();
}, 100);

window.setInterval(function(){
	main();
}, 10);


window.onload = function() {
  main();
};