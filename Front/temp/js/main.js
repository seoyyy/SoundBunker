$(document).ready(function () {

    $('.btnWrap .service').click(function () {
        $('.modalBox').addClass('on')
        $('.modalBg').addClass('on')
    })

    

    //모달 닫기, 스크롤 사용 가능
    $('.modalClose').click(function () {
        // 스크롤 닫기
        $('.modalBox').removeClass('on')
        // 스크롤만 닫고 뒤에 배경있음
        $('.modal_box').removeClass('on')
        //  아예 다닫기
        $('.modalBg').removeClass('on')
        $('.modalBg').off('scroll touchmove mousewheel');
    })

    // 서비스가이드 카테고리 버튼
    $('.modalBtn_2').click(function () {
        $('.modal_box').removeClass('on')
        $('.modalBox').removeClass('on')
        $('.mainBox2_modal').addClass('on')
    })

    // 서비스가이드 캠모드 버튼
    $('.modalBtn_3').click(function () {
        $('.modal_box').removeClass('on')
        $('.modalBox').removeClass('on')
        $('.mainBox3_modal').addClass('on')
    })

    // 플레이리스트 팀 버튼
    $('.modalBtn_4').click(function () {
        $('.modalBox').removeClass('on')
        $('.modal_box').removeClass('on')
        $('.modalBg').removeClass('on')
    })

    // 서비스가이드 팀 버튼
    $('.modalBtn_5').click(function () {
        $('.modalBox').removeClass('on')
        $('.modal_box').removeClass('on')
        $('.modalBg').removeClass('on')
        // $('.modalBg').off('scroll touchmove mousewheel');

        // $('.modal_box').removeClass('on')
        // $('.modalBox').removeClass('on')
        // $('.mainBox5_modal').addClass('on')
        // $('.mainBox6_modal').addClass('on')
    })

    // Guide 안 GO 버튼
    $('.catego').click(function () {
        $('.modalBox').removeClass('on')
        $('.modal_box').removeClass('on')
        $('.modalBg').removeClass('on')
    })

    //화면별 메뉴 선택표시 추가
    var section = $('.mainBox_01').offset();
    var section1 = $('.mainBox_02').offset();
    var section2 = $('.mainBox_03').offset();
    var section3 = $('.mainBox_04').offset();
    var section4 = $('.mainBox_05').offset();

    $(window).scroll(function () {
        if ($(document).scrollTop() > section.top - 200) {
            // $('.copyright').css('display', 'none')
            // $('.credit').css('display', 'block')
        }
        if ($(document).scrollTop() > section1.top - 200) {
            $('.nav ul li').removeClass('on');
            $('.nav .category').addClass('on')
            // $('.copyright').css('display', 'block')
            // $('.credit').css('display', 'none')
        }
        if ($(document).scrollTop() > section2.top - 200) {
            $('.nav ul li').removeClass('on');
            $('.nav .cammode').addClass('on')
            // $('.copyright').css('display', 'block')
            // $('.credit').css('display', 'none')
        }
        if ($(document).scrollTop() > section3.top - 200) {
            $('.nav ul li').removeClass('on');
            $('.nav .playlist').addClass('on')
            $('.scrollDown').css('display', 'block')
            // $('.copyright').css('display', 'block')
            // $('.credit').css('display', 'none')
        }
        if ($(document).scrollTop() > section4.top - 200) {
            $('.nav ul li').removeClass('on');
            $('.nav .team').addClass('on')
            $('.scrollDown').css('display', 'none')
            // $('.copyright').css('display', 'none')
            // $('.credit').css('display', 'none')
        }
    });

    //a 클릭 시 이동
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });



    // 서비스 메뉴 온 오프
    $('.callNav').click(function(){
        $('.modalBg').addClass('on')
        $('.serviceBox').addClass('on')
    })

    $('.subscriptionBox.Box_02').click(function () {
        $('.subscriptionBox').removeClass('on')
        $(this).addClass('on')
    })

    $('.subscriptionBox.Box_03').click(function () {
        $('.subscriptionBox').removeClass('on')
        $(this).addClass('on')
    })

    $('.modalBg').click(function () {
        $('.modalBg').removeClass('on')
        $('.serviceBox').removeClass('on')
    })
    
    //모바일 메뉴 닫기,열기
    // ('.callNav').click(function () {
    //     $(this).toggleClass('active');
    //     $('.btnWrap').toggleClass('on');
    // })

    // $('.callNav').hover(function(){
    //     $(this).toggleClass('on')
    // })
});




//  play List 클릭시 Play list main 으로 이동
function move_category(){
    var element = document.getElementById("category");
    element.scrollIntoView();
}

//  team 클릭시 team main 으로 이동
function move_cammode(){
    var element = document.getElementById("cammode");
    element.scrollIntoView();
}
function move_playlist(){
    var element = document.getElementById("playlist");
    element.scrollIntoView();
}

//  team 클릭시 team main 으로 이동
function move_team(){
    var element = document.getElementById("team");
    element.scrollIntoView();
}