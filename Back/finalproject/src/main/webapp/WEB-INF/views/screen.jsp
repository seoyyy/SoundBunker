<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="resources/css/screen.css">
    <link rel="stylesheet" href="resources/css/player.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
</head>
<script src="resources/js/jquery-3.6.0.js"></script>

<style>
   html{
    background: url('resources/img/수영장부부.jpeg') no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
    @font-face {
        font-family: 'BRBA_B';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.2/BRBA_B.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }


    :root {
        --pink: turquoise;
        --violet: violet;
        --white: #fff;
        --lightshadow: rgba(0, 0, 0, 0.15);
        --lightblack: #515c6f;
        --pinkshadow: #ffcbdd;
        --darkwhite: #cecaca;
    }

    .wrap__music {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100%;
        user-select: none;
    }

    .music__inner {
        width: 100%;
        padding: 25px 30px;
        overflow: hidden;
        position: relative;
        border-radius: 15px;
        background: none;
        box-shadow: 0 6px 15px var(--lightshadow);
        margin-left: -30px;
    }

    .music__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .music__top i {
        font-size: 30px;
        color: var(--lightblack);
    }

    .music__top h3 {
        font-size: 18px;
        color: var(--lightblack);
        font-weight: 500;
    }

    .music__img {
        width: 100%;
        height: 256px;
        overflow: hidden;
        border-radius: 15px;
        margin-top: 25px;
        box-shadow: 0 6px 12px var(--lightshadow);
    }

    .music__img img {
        width: 100%;
        height: 100%;
        vertical-align: top;
        object-fit: contain;
    }

    .music__song {
        text-align: center;
        margin: 30px;
    }

    .music__song p {
        color: var(--lightblack);
    }

    .music__song .name {
        color: white;
        font-weight: bold;
        font-size: 35px;
    }

    .music__song .artist {
        color: white;
        font-weight: bold;
        font-size: 25px;
        opacity: 0.9;
        line-height: 35px;
    }

    .music__progress {
        height: 6px;
        width: 100%;
        border-radius: 10px;
        background: #f0f0f0;
        cursor: pointer;
    }

    .music__progress .bar {
        height: inherit;
        width: 0%;
        position: relative;
        border-radius: inherit;
        background: linear-gradient(90deg, var(--pink) 0%, var(--violet) 100%);
    }

    .music__progress .timer {
        margin-top: 2px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--lightblack);
        font-size: 0.9em;
        pointer-events: none;
    }

    .music__control {
        margin-top: -19px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-left: 55%;
        position: relative;
        left: -32.5%;
    }

    .music__control i {
        font-size: 28px;
        user-select: none;
        background: whitesmoke;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .music__control i:nth-child(2),
    .music__control i:nth-child(4) {
        font-size: 55px;
    }

    .music__control .play-pause {
        width: 54px;
        height: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: linear-gradient(var(--white) 0%, var(--darkwhite) 100%);
        box-shadow: 0 0 0 2px black;
        z-index: 1;
    }

    .music__control .play-pause::before {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: inherit;
        background: black;
        z-index: -1;
    }

    .music__control .play-pause #control-play {
        -webkit-text-fill-color: var(--white);
        opacity: 0.8;
    }

    .music__list {
        position: absolute;
        background: var(--white);
        width: 100%;
        left: 0;
        bottom: -400px;
        z-index: 10;
        border-radius: 15px;
        padding: 15px 30px;
        box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.15s ease-out;
        opacity: 0;
        pointer-events: none;
    }

    .music__list.show {
        bottom: 0;
        opacity: 1;
        pointer-events: auto;
    }

    .music__list .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--lightblack);
        margin-bottom: 10px;
    }

    .title .queue {
        vertical-align: -5px;
    }

    .music__list .list {
        color: var(--lightblack);
    }

    .music__list .list>ul {
        max-height: 260px;
        margin: 10px 0;
        overflow: auto;
    }

    .music__list .list>ul::-webkit-scrollbar {
        width: 0;
    }

    .music__list .list>ul>li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 5px;
        margin-bottom: 5px;
    }

    .music__list .list>ul>li.playing {
        color: var(--pinkshadow);
    }

    .music__list .list>ul>li>div em {
        font-style: normal;
    }

    .music__list .list>ul>li>div p {
        opacity: 0.8;
    }
</style>
</style>

<body>
    <!-- <button class="fullscreen" href="#" title="전체화면" onclick="openFullScreenMode()" >
            전체화면
        </button> -->
    <div id="main" style="margin: 50px">
        <div class="name">
            SoundBunker;
        </div>

        <div>
            <ul class="music">
                <li id="bar1"></li>
                <li id="bar2"></li>
                <li id="bar3"></li>
                <li id="bar4"></li>
                <li id="bar5"></li>
                <li id="bar6"></li>
                <li id="bar7"></li>
                <li id="bar8"></li>
                <li id="bar9"></li>
                <li id="bar10"></li>
                <li id="bar11"></li>
                <li id="bar12"></li>
                <li id="bar13"></li>
                <li id="bar14"></li>
                <li id="bar15"></li>
                <li id="bar16"></li>
                <li id="bar17"></li>
                <li id="bar18"></li>
            </ul>
        </div>
        <div class="wrap__music">
            <div class="music__inner">
                <!-- // music__top -->
                <div class="music__img" style="display: none;">
                    <img src="/musicplayer/images/music-1.jpg" alt="이미지1">
                </div>
                <!-- // music__img -->
                <div class="music__song">
                    <p class="name"></p>
                    <p class="artist"></p>
                </div>
                <!-- // music__song -->
                <div class="music__progress" style="display: none;">
                    <div class="bar">
                        <audio id="main-audio" src=""></audio>
                    </div>
                    <div class="timer">
                        <span class="current">0:00</span>
                        <span class="duration">0:00</span>
                    </div>
                </div>
                <!-- // music__progress -->
                <div class="music__control">
                    <i id="control-repeat" class="material-icons" title="전체 반복" style="visibility: hidden;">repeat</i>
                    <i id="control-prev" class="material-icons" title="이전곡">skip_previous</i>
                    <div class="play-pause">
                        <i id="control-play" class="material-icons" title="재생">play_arrow</i>
                        <!-- <i class="material-icons">pause</i> -->
                    </div>
                    <i id="control-next" class="material-icons" title="다음곡">skip_next</i>
                    <i id="control-list" class="material-icons" title="재생목록" style="display: none;">queue_music</i>
                    <!-- <i class="material-icons">repeat_one</i>
                    <i class="material-icons">shuffle</i> -->
                </div>
                <!-- // music__control -->
                <div class="music__list">
                    <div class="title">
                        <div>
                            <i class="material-icons queue">queue_music</i>
                            <span>Music List</span>
                        </div>
                        <i class="material-icons close">close</i>
                    </div>
                    <div class="list">
                        <ul>
                            <!-- Javascript -->
                        </ul>
                    </div>
                </div>
                <!-- // music__list -->
            </div>
        </div>
    </div>

</body>
<script src="resources/js/screen.js"></script>
<script src="resources/js/cam_music.js"></script>
<script src="resources/js/cam_player.js"></script>


</html>