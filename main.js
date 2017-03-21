var player = '';
var gameMode = ''
var turn = 0;
var win = false;
var tiles = document.querySelectorAll('.board span');
var len = tiles.length;
var popup = document.querySelector('.popup');
var popupcontainer = document.querySelector('.popup-container');
var winner = document.querySelector('.winner');

var winCom = [
  [0,1,2], //first row
  [3,4,5], // second row
  [6,7,8], // third row
  [0,3,6], // first column
  [1,4,7], //second column
  [2,5,8], // third column
  [0,4,8], // left to right diagonal
  [2,4,6], // right to left diagonal
]

for(var i = 0; i < len; ++i) {
  tiles[i].onclick = function(e) {
    var tileVal = this.innerHTML;
    if(tileVal === '') {
      this.innerHTML = player;
      turn++;
      checkWin(player);
      player = player === 'X' ? 'O' : 'X';
      popupcontainer.classList.add('pre-animation');
      setTimeout(function(){
          popupcontainer.classList.remove('pre-animation')
          popup.innerHTML = player + ' Turn';
      },200);
        if(gameMode==='playerVersusComputer') {
          player = player === 'X' ? 'O' : 'X';
          setTimeout(computerTurn, 2000);
      }
    }
  }
}

function computerTurn() {
  player = player === 'X' ? 'O' : 'X';
  var freeTiles = [];
  for(var i = 0; i < len; ++i) {
    if(tiles[i].innerHTML === '') {
      freeTiles.push(i);
    }
  }
  var random = freeTiles[Math.floor(Math.random()*freeTiles.length)]
  if (freeTiles.length > 0) {
    tiles[random].innerHTML = player;
    turn++;
  }
  checkWin(player);
  freeTiles = [];
  player = player === 'X' ? 'O' : 'X';
}

function resetGame() {
  setTimeout(function() {
    for (var i = 0; i < len; i++) {
      tiles[i].innerHTML = '';
    }
    turn = 0;
    win = false;
    winner.innerHTML = '';
    popupcontainer.classList.remove('hide-animation');
  }, 2000);
}

function checkWin(player) {
  var counter = 0;
  for (var i = 0; i < winCom.length; i++) {
    for(var j = 0; j < 3; j++) {
      if(tiles[winCom[i][j]].innerHTML === player) {
      counter++;
    }
      if (counter > 2) {
        popupcontainer.classList.add('hide-animation');
        document.querySelector('#score'+player).innerHTML++;
        winner.innerHTML = player + ' won!!! YAY';
        popup.innerHTML = '';
        win = true;
        resetGame();
      }
    }
    counter = 0;
  }
  if(turn > 8 && !win) {
        popup.innerHTML === 'It was a tie';
        resetGame();
      }
}
//modal and buttons
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var startBtn = document.querySelector(".start-button");
var resetBtn = document.querySelector('#reset-btn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
window.onload = function() {
    modal.style.display = "block";
}

startBtn.onclick = function() {
  if (gameMode !== '' && player !== '') {
    modal.style.display = "none";
    return false;
  }
}

resetBtn.onclick = function() {
  modal.style.display = "block";
  resetGame();
  document.querySelector('#scoreX').innerHTML=0;
  document.querySelector('#scoreO').innerHTML=0;
}

var Xselect = document.querySelector('#Xselect');
var Oselect = document.querySelector('#Oselect');

var pvp = document.querySelector('#pvp');
var pve = document.querySelector('#pve');

pvp.onclick = function() {
  gameMode = 'playerVersusPlayer';
  pvp.className = 'active-btn';
  pve.className = 'modal-btn';
}

pve.onclick = function() {
  gameMode = 'playerVersusComputer';
  pve.className = 'active-btn';
  pvp.className = 'modal-btn';
}

Xselect.onclick = function() {
  player = 'X';
  Xselect.className = 'active-btn';
  Oselect.className = 'modal-btn';
  popup.innerHTML = player + ' Turn';

}

Oselect.onclick = function() {
  player = 'O';
  Oselect.className = 'active-btn';
  Xselect.className = 'modal-btn';
  popup.innerHTML = player + ' Turn';


}
