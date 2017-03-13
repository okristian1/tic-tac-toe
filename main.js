var player = 'X';
var tiles = document.querySelectorAll('.board span');
var len = tiles.length;

for(var i = 0; i < len; ++i) {
  tiles[i].onclick = function(e) {
    var tileVal = this.innerHTML;
    if(tileVal === '') {
      this.innerHTML = player;
      player = player === 'X' ? 'O' : 'X';
    }
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
