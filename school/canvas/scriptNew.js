var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = [];
var y = [];
var speedX = [];
var speedY = [];
var color = [];
var faceX = [];
var faceY = [];
var numberOfCircles = 15;
var circleRadius = 35;
var imageDimensions = 40;
var img = document.getElementById("carl");
var creationCollisions = 0;



function whereCircle () {
  for (i=0; i<numberOfCircles; i=i+1) {
    faceX[i] = x[i]-20;
    faceY[i] = y[i]-20;
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

function circles () {
  for (i=0; i<numberOfCircles; i=i+1) {
  x.push(0);
  y.push(0);
  speedX.push(1);
  speedY.push(1);
  color.push("hsl(" + Math.random() * 360 + ",80%,50%)");
  }
}

function speedRandomStart (newSpeed) {
  var randomNum = getRandomInt(0, 100);
  if (randomNum > 50) {
    newSpeed = 1;
    return newSpeed;
    }
  if (randomNum < 50) {
    newSpeed = -1;
    return newSpeed;
    }
  }
  
function startPositions () {
  for (i=0; i<numberOfCircles; i=i+1) {
    x[i] =  getRandomInt(10, 810);
    y[i] =  getRandomInt(10, 410);
    speedX[i] =  speedRandomStart (speedX[i]);
    speedY[i] =  speedRandomStart (speedY[i]); 
    
    for (var j = 0; j < x.length; j = j+1) {
      if (i !== j) {
      var a = (x[i]-x[j]);
      var b = (y[i]-y[j]);
      var distance = (Math.sqrt((Math.pow(a, 2))+(Math.pow(b, 2))));
        if (distance <= (circleRadius*2)) {
          i = i - 1;
          startPositions ();
        }
      }
    }
    
  }
}



function boxBounce () {
ctx.clearRect(0,0,6000,6000);

  for (i=0; i<numberOfCircles; i=i+1) {
    
//collision start    
  for (var j = 0; j < x.length; j = j+1) {
    if (i !== j) {
      var a = (x[i]-x[j]);
      var b = (y[i]-y[j]);
      var distance = (Math.sqrt((Math.pow(a, 2))+(Math.pow(b, 2))));
        if (distance <= (circleRadius*2)) {
        tempX = speedX[i];
        tempY = speedY[i];
        speedX[i] = speedX[j];
        speedY[i] = speedY[j];
        speedX[j] = tempX;
        speedY[j] = tempY;
      }
    }
  }
//collison end    

  x[i] = (x[i] + speedX[i]);
  y[i] = (y[i] + speedY[i]);
  ctx.fillStyle = color[i];
  ctx.beginPath ();
  ctx.arc(x[i],y[i], circleRadius, 0, 2*Math.PI);
  ctx.fill();
  ctx.drawImage(img, faceX[i], faceY[i], imageDimensions, imageDimensions);

  
  if (y[i] >= 430) {
    color[i] = "hsl(" + Math.random() * 360 + ",80%,50%)";
    speedY[i] = -speedY[i];
    } 
  if (y[i] <= 0) {
    color[i] = "hsl(" + Math.random() * 360 + ",80%,50%)";
    speedY[i] = -speedY[i];
    }   
  if (x[i] >= 830) {
    color[i] = "hsl(" + Math.random() * 360 + ",80%,50%)";
    speedX[i] = -speedX[i];
    } 
  if (x[i] <= 0) {
    color[i] = "hsl(" + Math.random() * 360 + ",80%,50%)";
    speedX[i] = -speedX[i];
    }   
  }

  whereCircle();
  
}



window.setInterval(function(){
	boxBounce ();
	
}, 5);
//window.setInterval(function(){
//	location.reload();	
//}, 1000);


window.onload = function() {
  circles();
  startPositions();
  whereCircle();
};
