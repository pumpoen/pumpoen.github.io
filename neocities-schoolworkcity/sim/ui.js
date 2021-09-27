var sceneIndex = 1;
showScenes(sceneIndex);

function plusScenes(n) {
  showScenes(sceneIndex += n);
}

function currentScene(n) {
  showScenes(sceneIndex = n);
}

function showScenes(n) {
  var i;
  var scenes = document.getElementsByClassName("Scenes");
  var dots = document.getElementsByClassName("dot");
  if (n > scenes.length) {sceneIndex = 1}    
  if (n < 1) {sceneIndex = scenes.length}
  for (i = 0; i < scenes.length; i++) {
      scenes[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  scenes[sceneIndex-1].style.display = "block";  
  dots[sceneIndex-1].className += " active";
}
