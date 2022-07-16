alert('ESC키를 2번 누르면 전체화면 생성')
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


$(document).keydown(function(event) {
    if ( event.keyCode == 27 || event.which == 27 ) {
        $('.fullscreen').show();
    }
});


