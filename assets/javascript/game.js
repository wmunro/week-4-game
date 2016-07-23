	var Wins = 0
	var Losses = 0
	var	crystal1
	var crystal2
	var crystal3
	var crystal4

$(document).ready(function(){
// console.log("ready")

	// start game
	function startGame(){
		 crystal1 = 1 + Math.floor(Math.random()*12)
		 crystal2 = 1 + Math.floor(Math.random()*12)
		 crystal3 = 1 + Math.floor(Math.random()*12)
		 crystal4 = 1 + Math.floor(Math.random()*12)
		 randomSelector = Math.floor((Math.random() * 101) + 19)
		 UserAdd = 0


		// The attr() method sets or returns attributes and values of the selected elements.


		$('#crystal1').attr("value", crystal1);
		$('#crystal2').attr("value", crystal2);
		$('#crystal3').attr("value", crystal3);
		$('#crystal4').attr("value", crystal4);
		$('#randomNumber').html(randomSelector);
		$('#userNumber').html(UserAdd);
		
	}
	
	
	
	//start game
	startGame()

	
	$('.crystal').click(function(){
			UserAdd = Number(UserAdd)+Number($(this).val())
			// console.log(UserAdd)
			$('#userNumber').html(UserAdd)
		if (UserAdd < randomSelector){
			alert('Your a winner')
			Wins++
			$('#wins').html('wins: ' + wins)
			$('#losses').html('losses: ' + losses)
			startGame()

		}
			
	
		else if (UserAdd == randomSelector){
			alert('Your a winner')
			Wins++
			$('#wins').html('wins: ' + wins)
			$('#losses').html('losses: ' + losses)
			startGame()	
		
	}
		else {
			alert('looser')
			Losses++
			$('#wins').html('wins:' + wins)
			$('#losses').html('losses:' + losses)
			startGame()
			// console.log("wins")
			// console.log("losses")
		}

	})

	$('#restartGame').click(function(){

	startGame()
		
	});

});