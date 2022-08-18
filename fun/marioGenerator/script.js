const canvas = document.getElementById('canvas');
//canvas.width  = (window.innerWidth)/2;
//canvas.height = (window.innerHeight)/2;
const ctx = canvas.getContext('2d');
var numberOfCircles = 4;
var pos = { x: 0, y: 0 };
canvas.style.position = 'fixed';


//function windowResize() {
//  canvas.width  = (window.innerWidth)/2;
//  canvas.height = (window.innerHeight)/2;
//}

// new position from mouse event
function setPosition(e) {
  pos.x = e.layerX;
  pos.y = e.layerY;
}

function draw(e) {
  // mouse left button must be pressed
  if (e.buttons !== 1) return;
  ctx.beginPath(); // begin
  ctx.imageSmoothingEnabled= false
  ctx.filter = "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9ImZpbHRlciIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVDb21wb25lbnRUcmFuc2Zlcj48ZmVGdW5jUiB0eXBlPSJpZGVudGl0eSIvPjxmZUZ1bmNHIHR5cGU9ImlkZW50aXR5Ii8+PGZlRnVuY0IgdHlwZT0iaWRlbnRpdHkiLz48ZmVGdW5jQSB0eXBlPSJkaXNjcmV0ZSIgdGFibGVWYWx1ZXM9IjAgMSIvPjwvZmVDb21wb25lbnRUcmFuc2Zlcj48L2ZpbHRlcj48L3N2Zz4=#filter)";
  ctx.lineWidth = 5;
  ctx.lineCap = 'square';
  ctx.strokeStyle = '#c0392b';
  ctx.moveTo(pos.x, pos.y); // from
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to
  ctx.stroke(); // draw it!
}

window.setInterval(function(){
	draw();
	
}, 50);

//window.addEventListener('resize', windowResize);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', setPosition);
canvas.addEventListener('mouseenter', setPosition);

