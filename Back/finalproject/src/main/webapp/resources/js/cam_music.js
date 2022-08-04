var songData = localStorage.cam
console.log("cam송데이터"+songData)

var lastData = JSON.parse(songData)
console.log("라스트데이터"+songData)

var testMusic = []

for(idx in lastData) {
	
    testMusic[idx] = [
        {
            name : (idx, lastData[idx].song_title),
            artist : (idx, lastData[idx].artist),
       		audio : (idx, lastData[idx].song_title)
        },
   ]
}


var allMusic = [].concat.apply([], testMusic);

localStorage.setItem('allMusic2', JSON.stringify(allMusic));









/*var camData = localStorage.getItem('cam')

console.log('[cate_music.js]:', localStorage.getItem('cam')) 

var testMusic = []

for(idx in camData) {
	
    testMusic[idx] = [
        {
            name : (idx, camData[idx].song_title),
            artist : (idx, camData[idx].artist),
       		audio : (idx, camData[idx].song_title)
        },
   ]
}

var allMusic = [].concat.apply([], testMusic);
console.log('난 올뮤직'+allMusic)
sessionStorage.setItem('allMusic2', JSON.stringify(allMusic));*/




