var songIndex = 1;
var songs = ["https://www.youtube.com/embed/MAyy7xYwWTU?modestbranding=1", "https://www.youtube.com/embed/wDgQdr8ZkTw?modestbranding=1"];
var songInfo = ["Inner Child - BTS", "I'd Rather Sleep - Kero Kero Bonito"];
var player = document.getElementById("youtubePlayer");
var songDesc = document.getElementById("songText");


showSong(songIndex);


function changeSong(n) {
  showSong(songIndex += n);
}

function currentSong(n) {
  showSong(songIndex = n);
}

function showSong(n) {
  var i;
  if ((n > songs.length) && (n > songInfo.length)) {songIndex = 1;}    
  if (n < 1) {(songIndex = songs.length)&&(songIndex = songInfo.length)}
  for (i = 0; ((i < songs.length)&&(i < songInfo.length)); i++) {
      player.src = (songs[i]);
      songDesc.innerHTML = songInfo[i];
  }
}

function changeAttribute () {
  player.setAttribute(src, songs[i]);
 songDesc.innerHTML = songInfo[i];
}