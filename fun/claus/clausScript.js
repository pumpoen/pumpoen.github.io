var scenes = document.getElementsByClassName("Scenes");
var sceneIndex = 1;
var currentPage = 0;
var finalScene = false;
var scenes = document.getElementsByClassName("Scenes");
var currentUrl = window.location.href;

function coolUrlBaby () {
  window.history.pushState('page2', 'Title', '/fun/claus?page=' + sceneIndex);
}

function getPageByUrlQuery () {
  for (i = 0; i <= scenes.length; i++) {
    if (((window.location.href) === ("https://schoolworkcity.neocities.org/fun/claus?page=" + i))||(window.location.href) === ("https://schoolworkcity.neocities.org/fun/claus/?page=" + i)) {
      sceneIndex = i;
    }
  }
}

function startupProcess () {
  restorePage();
  showScenes(sceneIndex, "script");
}

function shouldButtonShow () {
    if (sceneIndex === 1) {document.getElementById("prev").style.display = 'none';}
    if (sceneIndex > 1) {    document.getElementById("prev").style.display = 'initial';}
    if (sceneIndex === scenes.length) {
        finalScene = true;
        document.getElementById("next").style.display = 'none';}
    else {
      finalScene = false;  
      document.getElementById("next").style.display = 'initial';}}

window.setInterval(function(){
	shouldButtonShow();
}, 10);

function restorePage () {
    for (i = 0; i < scenes.length; i++) {
      scenes[i].style.display = "none";  
    }
    scenes[sceneIndex-1].style.display = "block";
}

function plusScenes(n) {
  if (finalScene === false) {
  showScenes(sceneIndex += n, "button");
  }
  coolUrlBaby ();
}

function backScenes(n) {
  showScenes(sceneIndex += n, "button");
  coolUrlBaby ();
}
 

function showScenes(n,type) {
  var i;
    if (n > scenes.length) {sceneIndex = 1;}
    if (sceneIndex === 1) {document.getElementById("prev").style.display = 'none';}
    if (sceneIndex > 1) {    document.getElementById("prev").style.display = 'initial';}
    if (n < 1) {sceneIndex = scenes.length;}
    if (n === scenes.length) {
        finalScene = true;
        document.getElementById("next").style.display = 'none';}
    else {
      finalScene = false;  
      document.getElementById("next").style.display = 'initial';}    

  // button type //
  if (type === "button") {  
    for (i = 0; i < scenes.length; i++) {
      scenes[i].style.display = "none";  
    }
    scenes[sceneIndex-1].style.display = "block";  
  }
  // script type //
  if (type === "script") {  
    for (i = 0; i < scenes.length; i++) {
    scenes[1].style.display = "none";  
  }
  scenes[sceneIndex-1].style.display = "block";  
}
  // first scene type//
  if (sceneIndex === 1) { 
    for (i = 0; i < scenes.length; i++) {
      scenes[i].style.display = "none";  
    }
    scenes[sceneIndex-1].style.display = "block";  
  }
console.log("Page has been changed. sceneIndex = " + sceneIndex);
  
}

// its time for a save function again prepare yourself idiot

function saveIndex(){
    localStorage.removeItem("save");
    currentPage = sceneIndex;
  var save = {
      sceneIndex: sceneIndex,
      currentPage: currentPage,
   };
    	localStorage.setItem("save", JSON.stringify(save));
    	console.log("Save function has been run. sceneIndex = " + sceneIndex);
}

//loading the game
function loadIndex() {
 var saveindex = JSON.parse(localStorage.getItem("save"));
  if (typeof saveindex.sceneIndex !== "undefined"){
    sceneIndex = saveindex.sceneIndex;
    currentPage =  saveindex.currentPage;
    } 
    	console.log("Load function has been run. sceneIndex = " + sceneIndex);
coolUrlBaby();
restorePage();
}

window.onload = function() {
  getPageByUrlQuery();
  startupProcess();
  coolUrlBaby();
  loadIndex();
};
