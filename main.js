var player = '';
var gameMode = ''
var turn = 0;
var win = false;
var tiles = document.querySelectorAll('.board span');
var len = tiles.length;

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
      checkWin(player);
      player = player === 'X' ? 'O' : 'X';
      if(gameMode==='playerVersusComputer') {
        computerTurn();
        player = player === 'X' ? 'O' : 'X';
      }
    }
  }
}

function computerTurn() {
  var freeTiles = [];
  for(var i = 0; i < len; ++i) {
    if(tiles[i].innerHTML === '') {
      freeTiles.push(i);
      checkWin(player);
    }
  }
  var random = freeTiles[Math.floor(Math.random()*freeTiles.length)]
  if (freeTiles !== []) {
    tiles[random].innerHTML = player;    
  }
  checkWin(player);
  freeTiles = [];
}



function resetGame() {
  for (var i = 0; i < len; i++) {
    tiles[i].innerHTML = '';
  }
  turn = 0;
}

function checkWin(player) {
  var counter = 0;
  for (var i = 0; i < winCom.length; i++) {
    for(var j = 0; j < 3; j++) {
//      console.log(tiles[winCom[i][j]].innerHTML);
      if(tiles[winCom[i][j]].innerHTML === player) {
//      console.log("matches player");
      counter++;
//      console.log(counter);
    }
      if (counter > 2) {
        alert(player + " wins");
        win = true;
        resetGame();
      }
    }
    counter = 0;
  }
  if(turn > 8 && !win) {
        alert("tie");
        resetGame();
      }
}




// MODAL and buttons and STUFF
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

// When the user clicks on <span> (x), close the modal

startBtn.onclick = function() {
  if (gameMode !== '' && player !== '') {
    modal.style.display = "none";
    return false;
  } else {
    alert("chose");
  }
}


resetBtn.onclick = function() {
  modal.style.display = "block";
  resetGame();
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

}

Oselect.onclick = function() {
  player = 'O';
  Oselect.className = 'active-btn';
  Xselect.className = 'modal-btn';

}
