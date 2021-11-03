
function toggleCursor(type, typeCursor) {
  var element = document.getElementById('allContent');
  var foodElement = document.getElementById('food');
  var cleanElement = document.getElementById('clean');
  var handElement = document.getElementById('hand');

  if (document.getElementById(type) === foodElement)  {
  element.classList.toggle(typeCursor);
  cleanElement.classList.toggle("noClick");  
  handElement.classList.toggle("noClick");
  }
  if (document.getElementById(type) === cleanElement)  {
  element.classList.toggle(typeCursor);
  foodElement.classList.toggle("noClick");  
  handElement.classList.toggle("noClick");
  }
  if (document.getElementById(type) === handElement)  {
  element.classList.toggle(typeCursor);
  cleanElement.classList.toggle("noClick");  
  foodElement.classList.toggle("noClick");
  }
}
//decreasing stats
function statDown () {
  document.getElementById('myImage').src='pic_bulbon.gif';
}
var energyIndex = 1;
  showEnergys(energyIndex);
  
  function plusEnergys(n) {
    showEnergys(energyIndex += n);
  }
  
  function showEnergys() {
    var i;
    var n = -1;
    var energys = document.getElementsByClassName("energyIcon1"); 
    if (n < 1) {energyIndex = energys.length}
    for (i = 0; i < energys.length; i++) {
        energys[i].src = "sprites/tirBar.png";  
    }
    energys[energyIndex-1].style.display = "none";  
  }
  
//window.setInterval(plusEnergys, 100);


//increase stats via actions
  //increase happiness by pet
  //increase hunger via food
  //increase clean by sponge
  
  
  
  