
$(document).ready(function(){
	
var randomNumVar;


randomNumFunc();

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

//builds guess list after user clicks guess-button
function buildGuessList() {
	$('ul#guessList').append('<li>' + guessedNumber + '</li>');
	guessCounter();
	resetFeedback();
	hotColdFeedback();	
}

//hot and cold feedback
function hotColdFeedback() {
	var differenceNum = Math.abs(randomNumVar-guessedNumber);
	if (guessedNumber == randomNumVar) {
		$('h2#feedback').html('Bingo! Are you a psychic or do you just guess like one?<br>Hit NEW GAME to play again.');
		$('input').prop('disabled', true);
	}
	else if (differenceNum >= 50) {
		$('h2#feedback').html('Freezing to death!');	
	}
	else if (differenceNum >= 30) {
		$('h2#feedback').html('Frostbitten but not dead.');	
	}
	else if (differenceNum >= 20) {
		$('h2#feedback').html('Here comes the sun...');	
	}
	else if (differenceNum >= 10) {
		$('h2#feedback').html('Is it stuffy in here?');	
	}
	else if (differenceNum >= 5) {
		$('h2#feedback').html('Sweating profusely.');	
	}
	else if (differenceNum >= 3) {
		$('h2#feedback').html('You\'re about to combust!');	
	}
	else if (differenceNum >= 2) {
		$('h2#feedback').html('You\'re combusting!');	
	}
	else if (differenceNum >= 1) {
		$('h2#feedback').html('GAH!  Just move your finger a nanometer!');	
	}
}

// new game -->
$('.new').on('click', function() {
	$('input').prop('disabled', false);
	clearInputField();
	resetFeedback();
	randomNumFunc();
	$('span#count').html('0');
	$('ul#guessList').empty();
});

// returns random integer //
function randomNumFunc() {
randomNumVar = Math.floor((Math.random() * 100) + 1);
console.log('your random number is ' + randomNumVar);
}

//reset feedback field
function resetFeedback() {
	$('h2#feedback').html('Make your guess!');
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




