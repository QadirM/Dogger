import Game from './game.js';

document.addEventListener("DOMContentLoaded", function(event) {
  const canvas = document.getElementById("dogger");

  var game = new Game(canvas);
  var started = false;
  key('space', function(){
    if(!started){
      document.getElementById("new-game").style.display = "none";
      game.play();
      started = true;
    }

    if(game.won){
      document.getElementById("win-game").style.display = "none";
      clearInterval(game.myVar);
      game.won = false;
      game.play();
    }

    if(game.lost){
      document.getElementById("lost-game").style.display = "none";
      clearInterval(game.myVar);
      game.lost = false;
      game.lives = 3;
      document.getElementById("lives").innerHTML = "lives: 3";
      game.play();
    }
  });

});
