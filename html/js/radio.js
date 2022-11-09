// radio.js - drive the player and slideshow 

window.addEventListener('load', function(e) {
	startart();
	startmusic();
}, false);

getRandom = function(block) {
	rset = block.set
	if (rset.length <= 0) {
		var m = block.data.length
		for (var i=0; i<m; i++) {
			rset.push(i)
		}
		rset.sort(() => Math.random() - 0.5); // shuffle
	}
	i = rset.pop()
	return i
}

startmusic = function() {
	nextSong();
	document.getElementById('myplayer').onended = nextSong;
	document.getElementById('myplayer').onerror = nextSong;
	document.getElementById('skipbtn').onclick = nextSong;
	document.getElementById('blockbtn').onclick = nextSong;
}

nextSong = function() {
	i = getRandom(music)
	song = music.data[i]['mediaurl']
	document.getElementById('myplayer').src = song
	document.getElementById('mcomposer').innerHTML = music.names[music.data[i].composer];
	document.getElementById('mperformer').innerHTML= music.data[i].performer;
	document.getElementById('myear').innerHTML     = music.data[i].year;
	document.getElementById('mtitle').innerHTML    = music.data[i].title;
}

var seconds = 10
var timer = null;

startart = function() {
	nextPic();
	if (timer) clearInterval(timer); 
	timer = setInterval(nextPic, (seconds * 1000));
	document.getElementById('slide').onerror = nextPic;
}

nextPic = function() {
	i = getRandom(art)
	document.getElementById('slide').src = art.data[i].url;
	document.getElementById('artist').innerHTML =   art.names[art.data[i].artist];
	document.getElementById('year').innerHTML =     art.data[i].year;
	document.getElementById('title').innerHTML =    art.data[i].title;
}

