var apples = 0;
var click = 1;
var farmers = 0;
var garden = 0;
var orchards = 0;
var farmland = 0;
var factory = 0;
var lab = 0;
var company = 0;
var wizards = 0;
var aps = 0;



// apple clicking 
function appleClick(number) {
    apples = apples + number;
    document.getElementById("apples").innerHTML = abbreviateNumber(apples);
}
function appleClickMouse() {
    apples = apples + click;
    document.getElementById("apples").innerHTML = abbreviateNumber(apples);
}


// item buying

//test
function buy(purchaseVal, purchaseName, purchaseMult, purchaseBase){
    var purchaseCost = Math.floor(purchaseBase * Math.pow(1.1,purchaseVal));     //works out the cost of this purchase
    if(apples >= purchaseCost){                                   //checks that the player can afford the purchase
  
        purchaseVal = purchaseVal + 1;                                   //increases number of purchases
  
         aps = aps + purchaseMult;                                                //increase aps
    	apples = apples - purchaseCost;                          //removes the apples spent
        document.getElementById(purchaseName+'Num').innerHTML = purchaseVal;  //updates the number of purchases for the user
        document.getElementById('apples').innerHTML = abbreviateNumber(apples);  //updates the number of apples for the user
    if(purchaseName === "farmers"){
    farmers = purchaseVal;  
    }
    if(purchaseName === "gardens"){
    garden = purchaseVal; 
    }
    if(purchaseName === "orchards"){
    orchards = purchaseVal; 
    }
    
    }
    var nextCost = Math.floor(purchaseBase * Math.pow(1.1,purchaseVal));       //works out the cost of the next purchase
    document.getElementById(purchaseName+'Cost').innerHTML = abbreviateNumber(nextCost);  //updates the purchase cost for the user
}

//upgrades

//clickI
var hasClickI = 0;
var clickICost = 5000;
function changeColor () {
   document.getElementById('apples').innerHTML = apples;  //updates the number of apples for the user
    document.getElementById("clickI").style.backgroundColor = "#ccc1b4";   // greys it out
    document.getElementById("clickIBut").style.backgroundColor = "#d4c9bc"; // also greys it out
    document.getElementById("clickIBut").style.borderColor = "#b0a394"; // also greys it out
    document.getElementById("clickI").style.borderColor = "#b0a394"; // also greys it out
    }
function clickI(){
if(apples >= clickICost && farmers >= 20  && hasClickI <= 0){ 
    click = click*farmers;
    apples = apples -  clickICost;                          //removes the apples spent
  changeColor ();
    hasClickI = hasClickI+10;
  }
}
  
var clickUpgrade = (function clickI() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            // do something
        }
    };
})();


// clicks every second per # of purchases

window.setInterval(function(){
	appleClick(farmers);
	document.getElementById("farmersNum").innerHTML = farmers;
}, 1000);
window.setInterval(function(){
	appleClick(garden*10);
	document.getElementById("gardensNum").innerHTML = garden;
}, 1000);
window.setInterval(function(){
	appleClick(orchards*50);
	document.getElementById("orchardsNum").innerHTML = orchards;
}, 1000);

//pl

//check # of items every half second. required to update the counters on user end
window.setInterval(function(){
  document.getElementById("apples").innerHTML = apples;
   if (hasClickI >= 1){
    changeColor ();
    }
	document.getElementById("farmersNum").innerHTML = abbreviateNumber(farmers);
	document.getElementById("gardensNum").innerHTML = abbreviateNumber(garden);
	document.getElementById("aps").innerHTML = farmers + garden*10 + orchards*50;
	document.getElementById('apples').innerHTML = abbreviateNumber(apples);
  document.getElementById('farmersNum').innerHTML = abbreviateNumber(farmers);
  document.getElementById('gardensNum').innerHTML = abbreviateNumber(garden);
	document.getElementById("orchardsNum").innerHTML = abbreviateNumber(orchards);
//  document.getElementById("farmland").innerHTML = abbreviateNumber(farmland);
// 	document.getElementById("factory").innerHTML = abbreviateNumber(factory);
//	document.getElementById("lab").innerHTML = abbreviateNumber(lab);
//	document.getElementById("company").innerHTML = abbreviateNumber(company);
//	document.getElementById("wizards").innerHTML = abbreviateNumber(wizards);
	
	document.getElementById("farmersCost").innerHTML = abbreviateNumber(Math.floor(50 * Math.pow(1.1,farmers)));
	document.getElementById("gardensCost").innerHTML = abbreviateNumber(Math.floor(600 * Math.pow(1.1,garden)));
	document.getElementById("orchardsCost").innerHTML = abbreviateNumber(Math.floor(7000 * Math.pow(1.1,orchards)));
//	document.getElementById("farmlandCost").innerHTML = Math.floor(50000 * Math.pow(1.1,factory));
//	document.getElementById("factoryCost").innerHTML = Math.floor(50000 * Math.pow(1.1,factory));
//	document.getElementById("labCost").innerHTML = Math.floor(500000 * Math.pow(1.1,lab));
//	document.getElementById("companyCost").innerHTML = Math.floor(5000000 * Math.pow(1.1,company));
//	document.getElementById("wizardCost").innerHTML = Math.floor(50000000 * Math.pow(1.1,wizards));


}, 50);

var undefined = 0;

// saving the game
function saveGame(){
    localStorage.removeItem("save");
  var save = {
      apples: apples,
      click: click,
      hasClickI: hasClickI,
      aps: aps,
      farmers: farmers,
      garden: garden,
      orchards: orchards,
      //farmland: farmland,
      //factory: factory,
      //lab: lab,
      //company: company,
      //wizards: wizards,

      farmersCost: farmersCost,
      gardensCost: gardensCost,
      orchardsCost: orchardsCost,
      //farmlandCost: farmlandCost,
      //factoryCost: factoryCost,
      //labCost: labCost,
      //companyCost: companyCost,
      //wizardCost: wizardCost,
   };
    	localStorage.setItem("save", JSON.stringify(save));
}

//loading the game
function loadGame() {
 var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.apples !== "undefined"){
    apples = savegame.apples;} 
   if (typeof savegame.click !== "undefined"){
    click = savegame.click;}
   if (typeof savegame.hasClickI !== "undefined"){
    hasClickI = savegame.hasClickI;}
  if (typeof savegame.aps !== "undefined"){
    aps = savegame.aps;} 
  if (typeof savegame.farmers !== "undefined"){
    farmers = savegame.farmers;}
   if (typeof savegame.garden !== "undefined"){
    garden = savegame.garden;}
   if (typeof savegame.orchards !== "undefined"){
    orchards = savegame.orchards;}

  if (typeof savegame.hasClickI !== "undefined"){
    hasClickI = savegame.hasClickI;}
  if (typeof savegame.farmersCost !== "undefined"){
    farmersCost = Math.floor(50 * Math.pow(1.1,farmers));}
  if (typeof savegame.gardensCost !== "undefined"){
    gardensCost = Math.floor(600 * Math.pow(1.1,garden));}
  if (typeof savegame.orchardsCost !== "undefined"){
    orchardsCost = Math.floor(7000 * Math.pow(1.1,orchards));}

}
//number beautify

function abbreviateNumber(value) {
  if (value >= 1000){
    var suffixes = ["", "k", "mil", "bil","tril","quadril","quintil","sextil","septil","octil","nonil","decil","tredecil","quattuordecil", "quindecil", "sexdecil"];
    var suffixNum = Math.floor((""+value).length/3);
    var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(4));
    if (shortValue % 0.5 != 0) {
        shortValue = shortValue.toFixed(2);
    }
    return shortValue+suffixes[suffixNum];
}
else {
  return value;
}
}


// save text display
function saveText1 (){
  setTimeout(function(){ 
    $("#saveInfo").hide();
    $("#saveText").show();
  });
}

function saveText2 (){
  setTimeout(function(){ 
    $("#saveText").hide();
    $("#saveInfo").show();
  });
}

    //autosave
    window.setInterval(function() {
    	saveGame();
    	saveText1 ();
    }, 240000);
    
    window.setInterval(function(){
    	saveText2 ();
    }, 240000+2000);

function saveGameBetter () {
    saveGame();
    saveText1 ();
    window.setInterval(function() {
    	saveText2 ();
    }, 2000);

}


// squeeze
    var num = Math.floor(Math.random() * 15) + 1;
    var imgOfApple = document.getElementById("appleImg");

    function squeeze() {
    imgOfApple.className = "click";
    setTimeout(function(){imgOfApple.className = "noclick";},2000);
    }
    
// tabs 
//set 1
function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += "active";
}

document.getElementById("defaultOpen").click();
//set 2

function openTab2(evt, tabName2) {
  // Declare all variables
  var ii, tabContent2, tabLinks2;

  // Get all elements with class="tabContent2" and hide them
  tabContent2 = document.getElementsByClassName("tabContent2");
  for (ii = 0; ii < tabContent2.length; ii++) {
    tabContent2[ii].style.display = "none";
  }

  // Get all elements with class="tabLinks2" and remove the class "active"
  tabLinks2 = document.getElementsByClassName("tabLinks2");
  for (ii = 0; ii < tabLinks2.length; ii++) {
    tabLinks2[ii].className = tabLinks2[ii].className.replace("active2", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName2).style.display = "block";
  evt.currentTarget.className += "active2";
}

document.getElementById("defaultOpen2").click();

// settings

$( ".darkModeBut" ).on("click", function() {
    if( $( "body" ).hasClass( "darkModeBody" )) {
      $( "body" ).removeClass( "darkModeBody" );
      $( ".inner-switch" ).text( "Dark Mode OFf" );
    } else {
      $( "body" ).addClass( "darkModeBody" );
      $( ".darkModeBut" ).text( "Dark Mode On" );
    }
});