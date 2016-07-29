	
$(document).ready(function(){
	var wins = 0
	var losses = 0
	var	scoreTotal =0;

var random = Math.floor(Math.random() * (120 - 19 +1) + 19);

document.getElementById("randomNumber").innerHTML = random;


var randomArray = [];

function getSum(total, num) {
	scoreTotal = total + num;
}

function arraySum(item) {
     randomArray.reduce(getSum);
     document.getElementById("scoreTotal").innerHTML = scoreTotal;
}



$("#crystal1").click(function() {
	var random1 = Math.floor((Math.random() * 12) + 1);
	randomArray.push(random1);
	getSum();
	arraySum();

});

$("#crystal2").click(function() {
	var random2 = Math.floor((Math.random() * 12) + 1);
	randomArray.push(random2);
	getSum();
	arraySum();

});

$("#crystal3").click(function() {
	var random3 = Math.floor((Math.random() * 12) + 1);
	randomArray.push(random3);
	getSum();
	arraySum();

});

$("#crystal4").click(function() {
	var random4 = Math.floor((Math.random() * 12) + 1);
	randomArray.push(random4);
	getSum();
	arraySum();

});


if (random == scoreTotal) {
	wins +=1;
	document.getElementById ("alert").innerHTML = "you win";
	document.getElementById ("wins").innerHTML = "wins: " + wins;
}

if (random < scoreTotal) {
	losses +=1;
	document.getElementById ("alert").innerHTML = "you lose";
	document.getElementById ("wins").innerHTML = "losses: " + losses;
}

function restartGame () {
	randomArray = [];
	document.getElementById("alert").innerHTML = "";
}


restartGame();

});