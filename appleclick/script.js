var apples = 0;
var farmers = 0;
var garden = 0;
var orchard = 0;
var farmland = 0;
var factory = 0;
var lab = 0;
var company = 0;
var wizards = 0;


// apple clicking
function appleClick(number) {
    apples = apples + number;
    document.getElementById("apples").innerHTML = apples;
}


// item buying

//farmer
function buyfarmer(){
    var farmerCost = Math.floor(50 * Math.pow(1.1,farmers));     //works out the cost of this farmer
    if(apples >= farmerCost){                                   //checks that the player can afford the farmer
        farmers = farmers + 1;                                   //increases number of farmers
    	apples = apples - farmerCost;                          //removes the apples spent
        document.getElementById('farmerNum').innerHTML = farmers;  //updates the number of farmers for the user
        document.getElementById('apples').innerHTML = apples;  //updates the number of apples for the user
    }
    var nextCost = Math.floor(50 * Math.pow(1.1,farmers));       //works out the cost of the next farmer
    document.getElementById('farmerCost').innerHTML = nextCost;  //updates the farmer cost for the user
}
//garden
function buygarden(){
    var gardenCost = Math.floor(500* Math.pow(1.1,garden));     //cost
    if(apples >= gardenCost){                                   //checks if affordable
        garden = garden + 1;                                   //increases # of gardens
    	apples = apples - gardenCost;                          //removes apples spent
        document.getElementById('gardenNum').innerHTML = garden;  //updates # of gardens
        document.getElementById('apples').innerHTML = apples;  //updates # of apples
    }
    var nextCost = Math.floor(500 * Math.pow(1.1,garden));       //works out the cost of the next garden
     document.getElementById('gardenCost').innerHTML = nextCost; //updates the garden cost for the user
}


// click the every second per # of farmers
window.setInterval(function(){
	appleClick(farmers);
	document.getElementById("farmerNum").innerHTML = farmers;
}, 1000);
window.setInterval(function(){
	appleClick(garden*5);
	document.getElementById("gardenNum").innerHTML = farmers;
}, 1000);
//pl
//check # of items every half second. required to update the counters on user end
window.setInterval(function(){
  document.getElementById("apples").innerHTML = apples;
	document.getElementById("farmerNum").innerHTML = farmers;
	document.getElementById("gardenNum").innerHTML = garden;
//	document.getElementById("orchard").innerHTML = orchard;
//  document.getElementById("farmland").innerHTML = farmland;
// 	document.getElementById("factory").innerHTML = factory;
//	document.getElementById("lab").innerHTML = lab;
//	document.getElementById("company").innerHTML = company;
//	document.getElementById("wizards").innerHTML = wizards;
	
	document.getElementById("farmerCost").innerHTML = Math.floor(50 * Math.pow(1.1,farmers));
	document.getElementById("gardenCost").innerHTML = Math.floor(500 * Math.pow(1.1,garden));
//	document.getElementById("farmlandCost").innerHTML = Math.floor(5000 * Math.pow(1.1,farmland));
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
      farmers: farmers,
      garden: garden,
      orchard: orchard,
      farmland: farmland,
      factory: factory,
      lab: lab,
      company: company,
      wizards: wizards,

      farmerCost: farmerCost,
      gardenCost: garden,
      orchardCost: orchardCost,
      farmlandCost: farmlandCost,
      factoryCost: factoryCost,
      labCost: labCost,
      companyCost: companyCost,
      wizardCost: wizardCost,
   };
    	localStorage.setItem("save", JSON.stringify(save));
}
function loadGame() {
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.apples !== "undefined"){
    apples = savegame.apples;} 
  if (typeof savegame.farmers !== "undefined"){
    farmers = savegame.farmers;}
  if (typeof savegame.farmerCost !== "undefined"){
    farmerCost = Math.floor(50 * Math.pow(1.1,farmers));}
}

// kill rogue decimals
function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
document.getElementById('apples').innerHTML = prettify(apples);
document.getElementById('farmerNum').innerHTML = prettify(farmers);
document.getElementById('gardenNum').innerHTML = prettify(garden);

}


    function saveText1 (){
         setTimeout(function(){ 
         $("#saveText").show();
        })
   }
   
   function saveText2 (){
         setTimeout(function(){ 
          $("#saveText").hide();
         })
    }
    
    //autosave
    window.setInterval(function() {
    	saveGame();
    	saveText1 ();
    }, 240000);
    
    window.setInterval(function(){
    	saveText2 ();
    }, 240000+5000);

    var num = Math.floor(Math.random() * 15) + 1;
    var imgOfApple = document.getElementById("appleImg");

    function squeeze() {
    imgOfApple.className = "click";
    setTimeout(function(){imgOfApple.className = "noclick";},350);
    }






