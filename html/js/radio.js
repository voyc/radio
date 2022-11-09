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
	block.hist.push(i)
	return i
}

getHist = function(block) {
	rhist = block.hist
	i = rhist[0]
	if (rhist.length) {
		i = rhist.pop()
	}
	return i
}

startmusic = function() {
	nextSong();
	document.getElementById('myplayer').onended = nextSong;
	document.getElementById('myplayer').onerror = nextSong;
	document.getElementById('mskip').onclick = nextSong;
	document.getElementById('mprev').onclick = prevSong;
	document.getElementById('mblock').onclick = nextSong;
}

prevSong = function() {
}

nextSong = function() {
	i = getRandom(music)
	song = music.data[i]['mediaurl']
	document.getElementById('myplayer').src = song

	var composer = music.names[music.data[i].composer];
	var performer = music.data[i].performer;
	var year = music.data[i].year;
	var title = music.data[i].title;
	var br = '<br/>'
	var card = ''
	card += (composer) ? 'Composer: ' + composer + br : ''
	card += (performer) ? 'Performer: ' + performer + br : ''
	card += (year) ? 'Year: ' + year + br : ''
	card += (title) ? 'Title: ' + title + br : ''
	document.getElementById('musiccard').innerHTML = card
}

var seconds = 10
var timer = null;

startart = function() {
	nextPic();
	document.getElementById('slide').onerror = nextPic;
	document.getElementById('askip').onclick = nextPic;
	document.getElementById('aprev').onclick = prevPic;
	document.getElementById('ablock').onclick = nextPic;
}

nextPic = function() {
	i = getRandom(art)
	showPic(i)
}

prevPic = function() {
	i = getHist(art)
	showPic(i)
}

showPic = function(i) {
	document.getElementById('slide').src = art.data[i].url;

	if (timer) clearTimeout(timer)
	timer = setTimeout(nextPic, (seconds * 1000));

	var artist = art.names[art.data[i].artist];
	var year   = art.data[i].year;
	var title  = art.data[i].title;
	var br = '<br/>'
	var card = ''
	card += (artist) ? 'Artist: ' + artist + br : ''
	card += (year) ? 'Year: ' + year + br : ''
	card += (title) ? 'Title: ' + title + br : ''
	document.getElementById('artcard').innerHTML = card
}

