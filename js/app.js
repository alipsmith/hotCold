
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

//variables
var randomNumVar;
var userGuess;

//on load, automatically generates random number
randomNumFunc();

// user enters number and clicks guess-button
$('form').on('submit', function() {
	event.preventDefault();
	var userGuess = $('input#userGuess').val();
	if ((userGuess > 0) && (userGuess < 101)) {
		playGame();
		clearInputField();
	}else{
		$('h2#feedback').html('Between 1 and 100!');
		clearInputField();
	}
});

//game play after user clicks guess-button
function playGame() {
	var userGuess = $('input#userGuess').val();
	$('ul#guessList').append('<li>' + userGuess + '</li>');
	guessCounter();
	resetFeedback();
	hotCold();	
}

//hot and cold feedback
function hotCold() {
	if (userGuess === randomNumVar) {
		$('h2#feedback').html('Bingo!');	
	}
	else if (userGuess >= (randomNumVar+50)) {
		$('h2#feedback').html('You\'re in the Dead Zone!');	
	}
}

// new game -->
$('.new').on('click', function() {
	clearInputField();
	resetFeedback();
	$('span#count').html('0');
	$('ul#guessList').empty();
});

// returns random integer //
function randomNumFunc() {
var randomNumVar = Math.floor(Math.random()*100);
console.log('your random number is ' + randomNumVar);
return randomNumVar;
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
 








});//document ready end   




