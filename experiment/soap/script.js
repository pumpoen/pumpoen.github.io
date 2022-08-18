var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
var x = [];
var y = [];
var speedX = [];
var speedY = [];
var color = [];
var faceX = [];
var faceY = [];
var numberOfCircles = 20;
var circleRadius = 35;
var imageDimensions = 60;
var img = document.getElementById("carl");
var img2 = document.getElementById("hatelife");
var creationCollisions = 0;
var objSpeed = 4;
var soapWidth = 90;
var soapHeight = 160;

objSpeed = document.getElementById("speedInput").value;

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
  speedX.push(objSpeed);
  speedY.push(objSpeed);
  color.push("hsl(" + Math.random() * 360 + ",80%,50%)");
  }
}

function speedRandomStart (newSpeed) {
  var randomNum = getRandomInt(0, 100);
  if (randomNum > 50) {
    newSpeed = objSpeed;
    return newSpeed;
    }
  if (randomNum < 50) {
    newSpeed = -objSpeed;
    return newSpeed;
    }
  }
  
function startPositions () {
  for (i=0; i<numberOfCircles; i=i+1) {
    x[i] =  getRandomInt(10, ctx.canvas.width-20);
    y[i] =  getRandomInt(10, ctx.canvas.height-20);
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

var soapImg = [];
for (var i = 0; i < 49; i++) {
  soapImg[i] = new Image();
  soapImg[i].src = "https://schoolworkcity.neocities.org/experiment/soap/frames/"+i+".gif";
}

function drawAnimatedImage(arr,x,y,angle,factor,changespeed) {
    if (!factor) {
        factor = 1;
    }
    if (!changespeed) {
        changespeed = 1;
    }
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle * Math.PI / 180);
    if (!!arr[Math.round(Date.now()/changespeed) % arr.length]) {
    ctx.drawImage(arr[Math.round(Date.now()/changespeed) % arr.length], -(arr[Math.round(Date.now()/changespeed) % arr.length].width * factor / 2), -(arr[Math.round(Date.now()/changespeed) % arr.length].height * factor / 2), arr[Math.round(Date.now()/changespeed) % arr.length].width * factor, arr[Math.round(Date.now()/changespeed) % arr.length].height * factor);
    }
    ctx.restore();
}

    var soapImg = [];
    function setup () {
        for (var i = 0; i < 49; i++) {
        soapImg[i] = new Image();
        soapImg[i].src = "https://schoolworkcity.neocities.org/experiment/soap/frames/"+i+".gif";
      }
    }
  setup();
var spinDegree = 0;
var scale = 0.3;
var framespeed = 20;

function spin(){
  if (spinDegree === 359.9){
    spinDegree = 0}
    spinDegree = spinDegree+0.1;
  }
 
function requestAnimationFrame(gifX, gifY) {
    if (soapImg.length == 49) {
    spin();
    drawAnimatedImage(soapImg, gifX, gifY, spinDegree, scale, framespeed);
   }
}


function boxBounce () {
ctx.clearRect(0,0,6000,6000);
  for (i=0; i<numberOfCircles; i=i+1) {

//requestAnimationFrame(300,300);
    
//collision start    
  for (var j = 0; j < x.length; j = j+1) {
    if (i !== j) {
      var a = (x[i]-x[j]);
      var b = (y[i]-y[j]);
      var distance = (Math.sqrt((Math.pow(a, 2))+(Math.pow(b, 2))));
        if (distance <= (soapWidth)) {
          if (distance <= (soapHeight)) {
        tempX = speedX[i];
        tempY = speedY[i];
        speedX[i] = speedX[j];
        speedY[i] = speedY[j];
        speedX[j] = tempX;
        speedY[j] = tempY;
        }
      }
    }
  }
//collison end    

  x[i] = (x[i] + speedX[i]);
  y[i] = (y[i] + speedY[i]);
 // ctx.fillStyle = color[i];
 ctx.save();
  ctx.beginPath();
  ctx.translate( (x[i]-65)+soapWidth/2, (y[i]-100)+soapHeight/2);
  ctx.rotate(spinDegree * Math.PI / 180);
// ctx.rect(x[i]-65, y[i]-100, soapWidth, soapHeight);
  ctx.rect(-soapWidth/2, -soapHeight/2, soapWidth, soapHeight);
//  ctx.stroke();
    ctx.restore();

//  ctx.beginPath ();
//  ctx.arc(x[i],y[i], circleRadius, 0, 2*Math.PI);
//  ctx.fill();
  requestAnimationFrame(faceX[i],faceY[i]);

  
  if (y[i] >= ctx.canvas.height) {
    color[i] = "hsl(" + Math.random() * 360 + ",80%,50%)";
    speedY[i] = -speedY[i];
    } 
  if (y[i] <= 0) {
    color[i] = "hsl(" + Math.random() * 360 + ",80%,50%)";
    speedY[i] = -speedY[i];
    }   
  if (x[i] >= ctx.canvas.width) {
    color[i] = "hsl(" + Math.random() * 360 + ",80%,50%)";
    speedX[i] = -speedX[i];
    } 
  if (x[i] <= 0) {
    color[i] = "hsl(" + Math.random() * 360 + ",80%,50%)";
    speedX[i] = -speedX[i];
    }   
  }

  whereCircle();
  
  ctx.drawImage(img2, window.innerWidth/2.2, window.innerHeight/2.1);
}



window.setInterval(function(){
	boxBounce ();
	
}, 1);
//window.setInterval(function(){
//	location.reload();	
//}, 1000);


window.onload = function() {
  circles();
  startPositions();
  whereCircle();
};
