
$(document).ready(function(){
	

// user enters number and clicks guess-button
$('form').on('submit', function() {
	event.preventDefault();
	guessedNumber=$('input#userGuess').val();
	console.log(guessedNumber);
	if ((guessedNumber > 0) && (guessedNumber < 101)) {
		clearInputField();
		buildGuessList();
	}else{
		$('h2#feedback').html('Between 1 and 100!');
		clearInputField();
	}
});

//game play after user clicks guess-button
function buildGuessList() {
	$('ul#guessList').append('<li>' + guessedNumber + '</li>');
	guessCounter();
	resetFeedback();
	hotColdFeedback();	
}

//hot and cold feedback
function hotColdFeedback() {
	if (guessedNumber == randomNumVar) {
		$('h2#feedback').html('Bingo!');	
	}
	else if (guessedNumber >= (randomNumVar+50)) {
		$('h2#feedback').html('You\'re in the Dead Zone!');	
	}
}

// new game -->
$('.new').on('click', function() {
	clearInputField();
	resetFeedback();
	randomNumFunc();
	$('span#count').html('0');
	$('ul#guessList').empty();
});

// returns random integer //
function randomNumFunc() {
var randomNumVar = Math.floor((Math.random() * 100) + 1);
console.log('your random number is ' + randomNumVar);
}

//reset feedback field
function resetFeedback() {
	$('h2#feedback').html('Make Your Guess!');
}

//guess counter
function guessCounter () {
		var guessCount = parseInt($('#count').html()) + 1;
		$('span#count').text(guessCount++);	
}

//clear input field
function clearInputField () {
	$('input#userGuess').val('');
}
 

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});






});//document ready end   




