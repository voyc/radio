window.onload = function() {
	gaudio = document.getElementById('myplayer');
	gaudio.onended = nextSong;
	gaudio.onerror = nextSong;
	nextSong();
	gaudio.style.display = 'none';
	document.getElementById('nextbtn').style.display = 'none';

	document.getElementById('playbtn').onclick = function(e) {
		gaudio.play();
		gaudio.style.display = 'block';
		e.srcElement.style.display = 'none';
		document.getElementById('nextbtn').style.display = 'block';
	}

	document.getElementById('nextbtn').onclick = function(e) {
		nextSong();
	}
}

gset = []

buildSet = function() {
	function shuffle(array) {
		array.sort(() => Math.random() - 0.5);
	}

	var m = data.length
	for (var i=0; i<m; i++) {
		gset.push(i)
	}
	shuffle(gset)
	console.log(gset)
}

nextSong = function() {
	gsett = localStorage.getItem('gset')
	console.log(['gset', gsett])

	if (gset.length <= 0) {
		buildSet()
	}
	i = gset.pop()
	song = data[i]['mediaurl']
	console.log('next ' + i +' of ' + gset.length)
	gaudio.src = song

	localStorage.setItem('gsett','hi')
}

