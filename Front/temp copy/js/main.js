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

    // 서비스가이드 카테고리 버튼 -> 자세히 보기 눌렀을 때 모달로 넘어감
    //$('.modalBtn_2').click(function () {
    //    $('.modal_box').removeClass('on')
    //    $('.modalBox').removeClass('on')
    //    $('.mainBox2_modal').addClass('on')
    //})

    // 서비스가이드 캠모드 버튼
    // $('.modalBtn_3').click(function () {
    //     $('.modal_box').removeClass('on')
    //     $('.modalBox').removeClass('on')
    //     $('.mainBox3_modal').addClass('on')
    // })

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
        // category mode ~
        if ($(document).scrollTop() > section2.top - 200) {
            $('.nav ul li').removeClass('on');
            $('.nav .cammode').addClass('on');

            $('#expand').show();
            $('#mainBoxText1').show();
            $('#room').css({"position": "absolute", "bottom": "-400%",
            "transition-property": "bottom", "transition-duration": "0.7s"});
            $('#dumbbell').css({"position": "absolute", "bottom": "-400%"});
            $('#cleaner').css({"position": "absolute", "bottom": "-400%"});
            $('#book').css({"position": "absolute", "bottom": "-400%"});


            $('#more_distribution').css({"right": "0%"})
            $('#mainBoxText1').css({"left": "0%"})
            $('#room_slide').css({"left": "-120%", "cursor": "initial"});  

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

    // 시작하기 눌렀을 때 기존 글씨 none & siri 발생
    $('#subText1').click(function(){
        $('#more_distribution').css({"right": "-580%"})
        $('#mainBoxText1').css({"left": "580%"})
        $('#room_slide').css({"left": "15%", "cursor": "pointer"});  
        $('#siri_ment1').css({"animation": "fadein 5s", "-webkit-animation": "fadein 5s"});
    })

    // 시작하기 눌렀을 때 기존 글씨 none & siri 발생
    $('#subText2').click(function(){
        $('#more_marketing').css({"right": "-580%"})
        $('#mainBoxText2').css({"left": "580%"})
    })

    // 시리 누르면 room 발생
    $('#room_slide').click(function(){
        $('#recursionPuzzleModal').css({"top": "-140%", "transition-property":"top", 
        "transition-duration": "1s"});  
        $('#siri_ment1').css({"display": "none"});
        $('#imgSlide').css({"display": "block"});
        $('#room_slide').css({"cursor": "initial"});
        $('#room').css({"bottom": "-150%", "transition-property":"bottom", 
        "transition-duration": "1s"});  
        $('#dumbbell').css({"bottom": "-169%", "transition-property":"bottom", 
        "transition-duration": "1s"});  
        $('#cleaner').css({"bottom": "-145%", "transition-property":"bottom", 
        "transition-duration": "1s"});  
        $('#book').css({"bottom": "-162%", "transition-property":"bottom", 
        "transition-duration": "1s"});  
    })

    // 청소기 눌렀을 때 alert 발생
    $('#cleaner').click(function(){
        $('#mainBoxText1').hide();
        document.getElementById('alert').style.display="block";      
    })

    // 덤벨 눌렀을 때 alert 발생
    $('#dumbbell').click(function(){
        $('#mainBoxText1').hide();
        document.getElementById('alert').style.display="none";
        document.getElementById('question1').innerHTML = "운동 관련 플레이리스트를";
        document.getElementById('alert').style.display="block";      
    })

    // 책 눌렀을 때 alert 발생
    $('#book').click(function(){
        $('#mainBoxText1').hide();
        document.getElementById('question1').innerHTML = "독서 관련 플레이리스트를";
        document.getElementById('alert').style.display="block";      
    })

     // 청소기 눌렀을 때 alert 발생
     $('#cleaner').click(function(){
        $('#mainBoxText1').hide();
        document.getElementById('alert').style.display="none";
        document.getElementById('question1').innerHTML = "집안일 관련 플레이리스트를";
        document.getElementById('alert').style.display="block";      
    })

    // 아니오 눌렀을 때 alert 끄기
    $('#no').click(function(){
        document.getElementById('alert').style.display="none";      
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
function move_playlist(){
    var element = document.getElementById("playlist");
    element.scrollIntoView();
}

//  team 클릭시 team main 으로 이동
function move_team(){
    var element = document.getElementById("team");
    element.scrollIntoView();
}