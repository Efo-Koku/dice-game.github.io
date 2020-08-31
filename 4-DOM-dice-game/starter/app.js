/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result gets added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var score, roundScore, activePlayer, gamePlayer;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {

   // 1. Random number
   var dice = Math.floor(Math.random() * 6) + 1;

//Challenge 6 - My Solution
var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    var diceDOM = document.querySelector('.dice2');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    

    // 3. Update the round score IF the rolled number was NOT a 1
if (dice !== 1) {

    // Add score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
} else {
    // Next player
   nextPlayer ();

    }
 }

});


document.querySelector('.btn-hold').addEventListener('click',  function() {
    if (gamePlaying) {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

   // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

   // Check if player won the game
   if (scores[activePlayer] >= 100) {
       document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
       document.querySelector('.dice').style.display = 'none'; //To hide the dice image.
       document.querySelector('.dice2').style.display = 'none'; //To hide the 2nd dice image.
       document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
       document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
       gamePlaying = false;
   } else {
       // Next player
    nextPlayer ();

    }

   }

});


function nextPlayer() {
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

 
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active'); // Toggle adds the .class if it's not there & removes .class if it's there.
    document.querySelector('.player-1-panel').classList.toggle('active');

    

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-0-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none'; //To hide the dice image when it is the turn of the next player.
    document.querySelector('.dice2').style.display = 'none'; //To hide the 2nd dice image when it is the turn of the next player.
}


document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none'; // To hide the dice image at the start of the game.
    document.querySelector('.dice2').style.display = 'none'; // To hide the 2nd dice image at the start of the game.

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}




// document.querySelector('#current-' + activePlayer).textContent = dice; //This is a 'setter' because we set a value.
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// querySelector is used to select, manipulate and change values and elements of our webpage.


/*
function btn() {
    // Do something here - this is the function we call when we click on a button.
}
btn();
*/

//document.querySelector('.btn-roll').addEventListener('click', btn) 
//  The EventListener calls the function for us in this case, hence the addition oof 'btn' next to 'click' above.
// This is called a 'callback function' because it is called not by us but by another function.
// Access MDN docs - Event Reference for more info.

// AND

// Instead of writing a separate function as above, we can use an anonymous function.
// An anonymous function is a function that does not have a name so it cannot be reused.
// We can add an anonymous function to the EventListener, like so: .... addEventListener('click', function()...


/* To change the content of a selection, there are two ways:
1) textContent - only plain text, no HTML

2) innerHTML - uses HTML
*/

// var x = document.querySelector('#score-0').textContent; //This is a 'getter' because we get a value.
// console.log(x);


// getElementByID is used for IDs and it is faster than querySelector. No need to use the CSS ID selector #, simply the name e.g 'score-0'.

