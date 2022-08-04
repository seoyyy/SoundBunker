        var musicWrap = document.querySelector(".wrap__music");
        var musicImg = musicWrap.querySelector(".music__img img");
        var musicArtist = musicWrap.querySelector(".music__song .artist");
        var musicAudio = musicWrap.querySelector("#main-audio");
        var musicPlay = musicWrap.querySelector("#control-play");
        var musicPrevBtn = musicWrap.querySelector("#control-prev");
        var musicNextBtn = musicWrap.querySelector("#control-next");
        var musicProgress = musicWrap.querySelector(".music__progress");
        var musicProgressBar = musicProgress.querySelector(".bar");
        var musicProgressCurrent = musicProgress.querySelector(".current");
        var musicProgressDuration = musicProgress.querySelector(".duration");
        var musicRepeat = musicWrap.querySelector("#control-repeat");
        var musicList = musicWrap.querySelector(".music__list");
        var MusicListBtn = musicWrap.querySelector("#control-list");
        var MusicListClose = musicList.querySelector(".close");
        var musicListUl = musicList.querySelector(".list ul");
    
        var musicIndex = 1;
    	var allMusic2 = JSON.parse(localStorage.allMusic2) 
    	console.log("올뮤직"+allMusic2)
        loadMusic(1);
        // 음악 재생
        function loadMusic(num) {
       		console.log("데이터", allMusic2)
        	var musicName = musicWrap.querySelector(".music__song .name");
            musicName.innerText = allMusic2[num - 1].name;
            musicArtist.innerText = allMusic2[num - 1].artist;
            musicAudio.src = `resources/songs/${allMusic2[num - 1].audio}.mp3`;
        }
    
        // 플레이 버튼
        function playMusic() {
            musicWrap.classList.add("paused");
            musicPlay.innerText = "pause";
            musicPlay.setAttribute("title", "일시정지")
            musicAudio.play();
        }
        // 일시정지 버튼
        function pauseMusic() {
            musicWrap.classList.remove("paused");
            musicPlay.innerText = "play_arrow";
            musicPlay.setAttribute("title", "재생")
            musicAudio.pause();
        }
    
        // 이전 곡 듣기 버튼
        function prevMusic() {
            musicIndex--;
            musicIndex < 1 ? musicIndex = allMusic2.length : musicIndex = musicIndex;
            loadMusic(musicIndex);
            playMusic();
            playListMusic();
        }
    
        // 다음 곡 듣기 버튼
        function nextMusic() {
            musicIndex++;
            musicIndex > allMusic2.length ? musicIndex = 1 : musicIndex = musicIndex;
            loadMusic(musicIndex);
            playMusic();
            playListMusic();
        }
    
        // 뮤직 진행바
        musicAudio.addEventListener("timeupdate", (e) => {
            const currentTime = e.target.currentTime;
            const duration = e.target.duration;
            let progressWidth = (currentTime / duration) * 100;
            musicProgressBar.style.width = `${progressWidth}%`
    
            musicAudio.addEventListener("loadeddata", () => {
                let audioDuration = musicAudio.duration;
                let totalMin = Math.floor(audioDuration / 60);
                let totalSec = Math.floor(audioDuration % 60);
                if (totalSec < 10) totalSec = `0${totalSec}`;
    
                musicProgressDuration.innerText = `${totalMin}:${totalSec}`;
            })
    
            let currentMin = Math.floor(currentTime / 60);
            let currentSec = Math.floor(currentTime % 60);
            if (currentSec < 10) currentSec = `0${currentSec}`;
            musicProgressCurrent.innerText = `${currentMin}:${currentSec}`
        })
    
        // 진행 버튼
        musicProgress.addEventListener("click", e => {
            let progressWidth = musicProgress.clientWidth;
            let clickedOffsetX = e.offsetX;
            let songDuration = musicAudio.duration;
    
            musicAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
            playMusic();
        })
    
    
    
    
        // 재생/일시정지
        musicPlay.addEventListener("click", () => {
            const isMusicPaused = musicWrap.classList.contains("paused");
            isMusicPaused ? pauseMusic() : playMusic();
        })
    
        musicPrevBtn.addEventListener("click", () => {

            prevMusic();
        });
        musicNextBtn.addEventListener("click", () => {
        
            nextMusic();
        });
    
        
    
        // 반복 버튼
        musicRepeat.addEventListener("click", () => {
            let getText = musicRepeat.innerText;
    
            switch (getText) {
                case "repeat":
                    musicRepeat.innerText = "repeat_one";
                    musicRepeat.setAttribute("title", "한곡 반복")
                    break;
    
                case "repeat_one":
                    musicRepeat.innerText = "shuffle";
                    musicRepeat.setAttribute("title", "랜덤 반복")
                    break;
    
                case "shuffle":
                
                    musicRepeat.innerText = "repeat";
                    musicRepeat.setAttribute("title", "전체 반복")
                    playListMusic();
                    break;
            }
        })
    
        // 오디오가 끝나고 
        musicAudio.addEventListener("ended", () => {
            let getText = musicRepeat.innerText;
    
            switch (getText) {
                case "repeat":
                
                    nextMusic();
                    break;
    
                    
                case "repeat_one":
                
                    loadMusic(musicIndex);
                    playMusic();
                    break;
    
                case "shuffle":
                
                    let randIndex = Math.floor((Math.random() * allMusic2.length) + 1);
                    do {
                        randIndex = Math.floor((Math.random() * allMusic2.length) + 1);
                    } while (musicIndex == randIndex);
                    musicIndex = randIndex;
                    loadMusic(musicIndex);
                    playMusic();
                    break;
            }
        })
    
        // 뮤직 리스트 버튼
        MusicListBtn.addEventListener("click", () => {
            musicList.classList.add("show");
        })
    
        // 뮤직 리스트 닫기 버튼
        MusicListClose.addEventListener("click", () => {
            musicList.classList.remove("show");
        })
    
        // 뮤직 리스트 구현하기
        // for (let i = 0; i < allMusic2.length; i++) {
        //     let li = `
        //             <li data-index="${i + 1}">
        //                 <div>
        //                     <em>${allMusic2[i].name}</em>
        //                     <p>${allMusic2[i].artist}</p>
        //                 </div>
        //                 <audio class="${allMusic2[i].audio}" src="resources/songs/${allMusic2[i].audio}.mp3"></audio>
        //                 <span id="${allMusic2[i].audio}" class="audio-duration">3:36</span>
        //             </li>
        //         `;
        //     musicListUl.insertAdjacentHTML("beforeend", li);
    
        //     let liAudioDuration = musicListUl.querySelector(`#${allMusic2[i].audio}`);
        //     let liAudio = musicListUl.querySelector(`.${allMusic2[i].audio}`);
    
        //     liAudio.addEventListener("loadeddata", () => {
        //         let audioDuration = liAudio.duration;
        //         let totalMin = Math.floor(audioDuration / 60);
        //         let totalSec = Math.floor(audioDuration % 60);
        //         if (totalSec < 10) totalSec = `0${totalSec}`;
    
        //         liAudioDuration.innerText = `${totalMin}:${totalSec}`;
        //         liAudioDuration.setAttribute("data-duration", `${totalMin}:${totalSec}`);
        //     });
        // }
    
        // 뮤직 리스트 클릭하기
        // const musicListAll = musicListUl.querySelectorAll("li");
    
    
    
        // function playListMusic() {
        //     for (let j = 0; j < musicListAll.length; j++) {
        //         let audioTag = musicListAll[j].querySelector(".audio-duration");
        //         let adDuration = audioTag.getAttribute("data-duration");
    
        //         if (musicListAll[j].classList.contains("playing")) {
        //             musicListAll[j].classList.remove("playing");
        //             audioTag.innerText = adDuration;
        //         }
    
        //         if (musicListAll[j].getAttribute("data-index") == musicIndex) {
        //             musicListAll[j].classList.add("playing");
        //             audioTag.innerText = "재생중";
        //         }
        //         musicListAll[j].setAttribute("onclick", "clicked(this)");
        //     }
        // }
    
        // function clicked(el) {
        //     let getLiIndex = el.getAttribute("data-index");
    
        //     musicIndex = getLiIndex;
        //     loadMusic(musicIndex);
        //     playMusic();
        //     playListMusic();
        // }
        // 창이 열리면 노래 시작 
        
            window.addEventListener("load", () => {
        loadMusic(musicIndex);
        musicWrap.classList.add("paused");
        musicPlay.innerText = "pause";
        musicPlay.setAttribute("title", "일시정지")
        musicAudio.play();
    });