//alert('OYUNA XOŞ GƏLMİSİNİZ! UĞURLAR!')

//VARİABLE

var scores, roundScore, activePlayer, gameplaying, lastDice, finalScore;
finalScore = 0;
allRestart();

document.querySelector('.btn-roll').addEventListener('click', function() {

    if (gameplaying) {
        diceRoll = new Audio('/sound/diceroll.mp3');
        diceRoll.play();
        //random number zone

        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        //display resut

        document.getElementById('dice-1').style.display = "block";
        document.getElementById('dice-2').style.display = "block";
        //dice img src
        document.querySelector('#dice-1').src = '/img/dice-' + dice1 + '.png';
        document.querySelector('#dice-2').src = '/img/dice-' + dice2 + '.png';

        //uptade if zone

        if (dice1 !== 1 && dice2 !== 1) {
            //add score
            roundScore += dice1 + dice2;
            document.getElementById('current-' + activePlayer).innerHTML = roundScore;
        } else {
            newGame = new Audio('/sound/false.mp3');
            newGame.play();
            nextPlayer();
        }
    }

})


document.querySelector(".btn-hold").addEventListener('click', function() {

    if (gameplaying) {
        //add score
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).innerHTML = scores[activePlayer];

        //sound effect zone
        hold = new Audio('/sound/hold.mp3');
        hold.play();
        if (scores[activePlayer] >= 20) {


            document.getElementById('name-' + activePlayer).innerHTML = "ƏLASAN! UDDUN!"
            document.getElementById('dice-1').style.display = "none";
            document.getElementById('dice-2').style.display = "none";
            document.getElementById('player-' + activePlayer + '-final').innerHTML = finalScore + (finalScore + 1);
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            winnerGame = new Audio('/sound/winner.mp3');
            winnerGame.play();
            gameplaying = false
        } else {
            nextPlayer()
        }
    }

})
document.querySelector(".btn-new").addEventListener('click', allRestart);



function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').innerHTML = "0";
    document.getElementById('current-1').innerHTML = "0";

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = "none";
    document.getElementById('dice-2').style.display = "none";


}




function allRestart() {
    // score area
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gameplaying = true;

    //all score draw = 0

    //dice view area
    document.getElementById('dice-1').style.display = "none";
    document.getElementById('dice-2').style.display = "none";

    //all string view none

    document.getElementById('score-0').innerHTML = "0";
    document.getElementById('score-1').innerHTML = "0";

    document.getElementById('current-0').innerHTML = "0";
    document.getElementById('current-1').innerHTML = "0";
    document.getElementById('name-0').innerHTML = "Oyunçu 1";
    document.getElementById('name-1').innerHTML = "Oyunçu 2";

    //Active and Winner Panel view
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    newGame = new Audio('/sound/newgame.mp3');
    newGame.play()
}

var newGame, diceRoll, hold, gameCover, winnerGame;
gameCover = new Audio('/sound/cover.mp3');
//gameCover.play();