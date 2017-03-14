var player = 'X';
var tiles = document.querySelectorAll('.board span');
var len = tiles.length;

for(var i = 0; i < len; ++i) {
  tiles[i].onclick = function(e) {
    var tileVal = this.innerHTML;
    if(tileVal === '') {
      this.innerHTML = player;
      checkWin(player);
      player = player === 'X' ? 'O' : 'X';
    }
  }
}

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
      if (counter>2) {
        alert(player + " wins");
        console.log("winrar");
      }
    }
    counter = 0;
  }
}

/* game logics
Chose number of players
Choose X or O
Random X or O begins
When tile is clicked set tile to current player
X or O
Unless tile already ocupied
Check win condition and declare winner or change
active player. repeat.


*/
