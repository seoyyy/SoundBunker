
var songData = sessionStorage.mdata
console.log("송데이터"+songData)

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

sessionStorage.setItem('allMusic2', JSON.stringify(allMusic));






