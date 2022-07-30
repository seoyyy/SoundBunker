var songTitle = localStorage.getItem('mtitle')
var songArtist = localStorage.getItem('martist')
console.log(songTitle)
console.log(songArtist)
let allMusic = [
   {
       for(let i = 0; i<=songTitle; i++){
       
       name : songTitle[i],
       artist : songArtist[i],
       img : "music-1",
       audio : songTitle[i]
       }
   },
   {
       name : "나의 X에게",
       artist : "경서",
       img : "music-3",
       audio : "music-3"
   },
]




