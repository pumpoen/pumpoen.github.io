// all features listed were once used but are now obsolete, and have been archived here

//farmer
  
function buyfarmer(){
    var farmersCost = Math.floor(50 * Math.pow(1.1,farmers));     //works out the cost of this farmer
    if(apples >= farmersCost){                                   //checks that the player can afford the farmer
        farmers = farmers + 1;                                   //increases number of farmers
        aps = aps+1;                                                //increase aps
    	apples = apples - farmersCost;                          //removes the apples spent
        document.getElementById('farmersNum').innerHTML = abbreviateNumber(farmers);  //updates the number of farmers for the user
        document.getElementById('apples').innerHTML = abbreviateNumber(apples);  //updates the number of apples for the user
    }
    var nextCost = Math.floor(50 * Math.pow(1.1,farmers));       //works out the cost of the next farmer
    document.getElementById('farmersCost').innerHTML = abbreviateNumber(nextCost);  //updates the farmer cost for the user
}
//garden
function buygarden(){
    var gardensCost = Math.floor(500* Math.pow(1.1,garden));     //cost
    if(apples >= gardensCost){                                   //checks if affordable
        garden = garden + 1;                                   //increases # of gardens
        aps = aps+5;                                          // increase aps
    	apples = apples - gardensCost;                          //removes apples spent
        document.getElementById('gardensNum').innerHTML = abbreviateNumber(garden);  //updates # of gardens
        document.getElementById('apples').innerHTML = abbreviateNumber(apples);  //updates # of apples
    }
    var nextCost = Math.floor(500 * Math.pow(1.1,garden));       //works out the cost of the next garden
     document.getElementById('gardensCost').innerHTML = abbreviateNumber(nextCost); //updates the garden cost for the user
}

//orchards
function buyorchards(){
    var orchardsCost = Math.floor(8000* Math.pow(1.1,orchards));     //cost
    if(apples >= orchardsCost){                                   //checks if affordable
        orchards = orchards + 1;                                   //increases # of orchards
        aps = aps+25;                                          // increase aps
    	apples = apples - orchardsCost;                          //removes apples spent
        document.getElementById('orchardsNum').innerHTML = abbreviateNumber(orchards);  //updates # of orchards
        document.getElementById('apples').innerHTML = abbreviateNumber(apples);  //updates # of apples
    }
    var nextCost = Math.floor(8000 * Math.pow(1.1,orchards));       //works out the cost of the next orchards
     document.getElementById('orchardsCost').innerHTML = abbreviateNumber(nextCost); //updates the orchards cost for the user
}
