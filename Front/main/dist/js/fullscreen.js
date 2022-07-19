alert('ESC키를 2번 누르면 전체화면 생성')


var popup = document.getElementById('h');


// 전체화면 설정
function openFullScreenMode() {
    if (popup.requestFullscreen)
    popup.requestFullscreen();
    else if (popup.webkitRequestFullscreen) // Chrome, Safari (webkit)
    popup.webkitRequestFullscreen();
    else if (popup.mozRequestFullScreen) // Firefox
    popup.mozRequestFullScreen();
    else if (popup.msRequestFullscreen) // IE or Edge
    popup.msRequestFullscreen();
    $('.fullscreen').hide();
}

let a = 0;

$(document).keydown(function(event) {
    if ( event.keyCode == 32 || event.which == 32 ) {
        console.log(a)
        
        if(a == 0){
            $("li[id^='bar']").css("animation-play-state", "paused"); 
            a = 1 
        }
        else if (a == 1){
            $("li[id^='bar']").css("animation-play-state", "running");
            a = 0 
        }

    }
});





$(document).keydown(function(event) {
    if ( event.keyCode == 27 || event.which == 27 ) {
        $('.fullscreen').show();
    }
});
