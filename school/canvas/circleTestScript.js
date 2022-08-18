var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = [30,90,150,210,270,80];
var y = [50,50,50,50,50,50];
var numberOfCircles = 4;
var circleRadius = 20;
var img = document.getElementById("img");


function boxBounce () {
ctx.clearRect(0,0,600,600);

  for (i=0; i<numberOfCircles; i=i+1) {
ctx.fillStyle = "hsl(" + Math.random() * 360 + ",80%,50%)";
ctx.beginPath ();
ctx.arc(x[i],y[i], circleRadius, 0, 2*Math.PI);
ctx.fill();
  }
ctx.drawImage(img, 30, 30, image.width*2, image.height * 2);

  
  
}



window.setInterval(function(){
	boxBounce ();
	
}, 500);
//window.setInterval(function(){
//	location.reload();	
//}, 1000);


window.onload = function() {
  boxBounce ();
};
