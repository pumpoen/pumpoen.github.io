src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";

var apples = 0;

function appleClick(number){
    apples = apples + number;
    document.getElementById("apples").innerHTML = apples;
}


var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(apples >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	apples = apples - cursorCost;                          //removes the apples spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('apples').innerHTML = apples;  //updates the number of apples for the user
    }
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
}

window.setInterval(function(){
	
	appleClick(cursors);
}, 1000);