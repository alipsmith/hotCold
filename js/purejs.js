( function setup() {
	'use strict';

	var randomNumVar, guessedNumber, feedBackContent, guess, difference, guessCount,
	    modal            = document.getElementById( 'modal' ),
	    guessCounterSpan = document.getElementById( 'count' ),
	    guessList        = document.getElementById( 'guessList' ),
	    feedBack         = document.getElementById( 'feedback' ),
	    userGuess        = document.getElementById( 'userGuess' ),
	    hcForm           = document.getElementById( 'hc-form' ),
	    guessButton      = document.getElementById( 'guessButton' ),
	    what             = document.getElementById( 'what' ),
	    close            = document.getElementById( 'close' ),
	    newGame          = document.getElementById( 'new' );

	//* Generate random number
	randNumFunc();

	//* Add event listener to show instructions
	what.addEventListener( 'click', function ( e ) {

		e.preventDefault();

		modal.classList.remove( 'overlay', 'overlay-hide' );
		modal.classList.add( 'overlay-show' );

	} );

	//* Add event listener to hide instructions
	close.addEventListener( 'click', function ( e ) {

		e.preventDefault();

		modal.classList.remove( 'overlay-show' );
		modal.classList.add( 'overlay-hide' );

	} );

	//* Add new game event listener
	newGame.addEventListener( 'click', function ( e ) {

		e.preventDefault();

		guessButton.removeAttribute( 'disabled' );
		clearInputField();
		resetFeedback();
		randNumFunc();
		guessCounterSpan.textContent = 0;
		guessList.innerHTML          = '';

	} );

	//* Add event listener to form submit
	hcForm.addEventListener( 'submit', function ( e ) {

		e.preventDefault();

		guessedNumber = parseInt( userGuess.value );

		if ( guessedNumber > 0 && guessedNumber < 101 ) {

			clearInputField();
			buildGuessList( guessedNumber );

		} else {

			feedBack.textContent = 'Between 1 and 100!';
			clearInputField();

		}

	} );

	/**
	 * Add guess list item
	 *
	 * @param guessedNumber
	 */
	function buildGuessList( guessedNumber ) {

		guess = document.createElement( 'li' );

		guess.innerText = guessedNumber;

		guessList.appendChild( guess );

		guessCounter();
		hotColdFeedback();

	}

	/**
	 * Set feedback based on user guess
	 */
	function hotColdFeedback() {

		difference = Math.abs( randomNumVar - guessedNumber );

		switch ( true ) {
			case difference >= 50:
				feedBackContent = 'Frozen to death.';
				break;
			case difference >= 30:
				feedBackContent = 'Frostbitten but not dead.';
				break;
			case difference >= 20:
				feedBackContent = 'Here comes the sun...';
				break;
			case difference >= 10:
				feedBackContent = 'Is it stuffy in here?';
				break;
			case difference >= 5:
				feedBackContent = 'Sweating profusely.';
				break;
			case difference >= 3:
				feedBackContent = 'You\'re about to combust!';
				break;
			case difference >= 2:
				feedBackContent = 'You\'re combusting!';
				break;
			case difference >= 1:
				feedBackContent = 'GAH!  Just move your finger a nanometer!';
				break;
			default:
				feedBackContent = 'Bingo! Are you a psychic or do you just think like one?<br>Hit NEW GAME to play again.';
				guessButton.setAttribute( 'disabled', 'disabled' );
				break;

		}

		feedBack.innerHTML = feedBackContent;

	}

	/**
	 * Generate random number
	 */
	function randNumFunc() {

		randomNumVar = Math.floor( ( Math.random() * 100 ) + 1 );

	}

	/**
	 * Clear feedback display
	 */
	function resetFeedback() {

		feedBack.innerHTML = 'Make your guess!';

	}

	/**
	 * Increment guess counter
	 */
	function guessCounter() {

		guessCount = parseInt( guessCounterSpan.innerText ) + 1;

		guessCounterSpan.innerText = guessCount;

	}

	/**
	 * Clear guess input
	 */
	function clearInputField() {

		userGuess.value = '';

	}

} )();
