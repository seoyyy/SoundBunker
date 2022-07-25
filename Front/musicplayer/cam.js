var doc = document.documentElement;
// 전체화면 설정
function openFullScreenMode() {
    if (doc.requestFullscreen)
        doc.requestFullscreen();
    else if (doc.webkitRequestFullscreen) // Chrome, Safari (webkit)
        doc.webkitRequestFullscreen();
    else if (doc.mozRequestFullScreen) // Firefox
        doc.mozRequestFullScreen();
    else if (doc.msRequestFullscreen) // IE or Edge
        doc.msRequestFullscreen();
    $('.fullscreen').hide();
}

let b = $(".fullscreen").trigger('click');
console.log(b + '실행됨')

function exitFullScreenMode() {
    if (document.exitFullscreen)
        document.exitFullscreen();
    else if (document.webkitExitFullscreen) // Chrome, Safari (webkit)
        document.webkitExitFullscreen();
    else if (document.mozCancelFullScreen) // Firefox
        document.mozCancelFullScreen();
    else if (document.msExitFullscreen) // IE or Edge
        document.msExitFullscreen();
}


//  스페이스바 음악 일시정지 및 재생 
let a = 0;
$(document).keydown(function(event) {
    if ( event.keyCode == 32 || event.which == 32 ) {
        // 창모드 일시정지
        if(a == 0){
            $("li[id^='bar']").css("animation-play-state", "paused"); 
            a = 1 
            exitFullScreenMode()
            // 전체화면 생성
            $('.fullscreen').show();
        }
        // 풀스크린 재생
        else if (a == 1){
            $("li[id^='bar']").css("animation-play-state", "running");
            a = 0 
            openFullScreenMode()
        }

    }
});

// ESC 전체화면 아이콘 생성
// $(document).keydown(function(event) {
//     if ( event.keyCode == 27 || event.which == 27 ) {
//         $('.fullscreen').show();
//     }
// })
