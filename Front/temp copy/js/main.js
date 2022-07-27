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
        // category mode ~
        if ($(document).scrollTop() > section2.top - 200) {
            $('.nav ul li').removeClass('on');
            $('.nav .cammode').addClass('on');

            $('#expand').show();
            $('#mainBoxText1').show();
            $('#room').css({
                "position": "absolute", "bottom": "-400%",
                "transition-property": "bottom", "transition-duration": "0.7s"
            });
            $('#dumbbell').css({ "position": "absolute", "bottom": "-400%" });
            $('#cleaner').css({ "position": "absolute", "bottom": "-400%" });
            $('#book').css({ "position": "absolute", "bottom": "-400%" });


            $('#more_distribution').css({ "right": "0%" })
            $('#mainBoxText1').css({ "left": "0%" })
            $('#room_slide').css({ "left": "-120%", "cursor": "initial" });

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
    $('.callNav').click(function () {
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

    //  play List 클릭시 Play list main 으로 이동
    function move_category() {
        var element = document.getElementById("category");
        element.scrollIntoView();
    }

    //  team 클릭시 team main 으로 이동
    function move_cammode() {
        var element = document.getElementById("cammode");
        element.scrollIntoView();
    }
    function move_playlist() {
        var element = document.getElementById("playlist");
        element.scrollIntoView();
    }

    //  team 클릭시 team main 으로 이동
    function move_team() {
        var element = document.getElementById("team");
        element.scrollIntoView();
    }



    //  상희 
    // 시작하기 눌렀을 때 기존 글씨 none & siri 발생
    $('#subText1').click(function () {
        $('#more_distribution').css({ "right": "-580%" })
        $('#mainBoxText1').css({ "left": "580%" })
        $('#room_slide').css({ "left": "15%", "cursor": "pointer" });
        $('#siri_ment1').css({ "animation": "fadein 5s", "-webkit-animation": "fadein 5s" });
    })

    // 시작하기 눌렀을 때 기존 글씨 none & siri 발생
    $('#subText2').click(function () {
        $('#more_marketing').css({ "right": "-580%" })
        $('#mainBoxText2').css({ "left": "580%" })
    })

    // 시리 누르면 room 발생
    $('#room_slide').click(function () {
        $('#recursionPuzzleModal').css({
            "left": "-70%", "transition-property": "left",
            "transition-duration": "1s"
        });
        $('#siri_ment1').css({ "display": "none" });
        $('#imgSlide').css({ "display": "block" });
        $('#room_slide').css({ "cursor": "initial" });
        $('#room').css({
            "left": "18%", "transition-property": "left",
            "transition-duration": "1s"
        });
        $('#dumbbell').css({
            "left": "18.5%", "transition-property": "left",
            "transition-duration": "1s"
        });
        $('#cleaner').css({
            "left": "31%", "transition-property": "left",
            "transition-duration": "1s"
        });
        $('#book').css({
            "left": "28.2%", "transition-property": "left",
            "transition-duration": "1s"
        });
        $('#category').css({ "background-color": "black" });
        document.getElementById('alert').style.display = "block";

    })

    // 덤벨 눌렀을 때 alert 발생
    $('#book').click(function () {
        const target = document.getElementById('alert');
        document.getElementById('question_1').innerHTML = "운동 관련 아이콘을 클릭하셨습니다";
        document.getElementById('question_2').innerHTML = "플레이리스트를 재생할까요?";
        
        target.classList.remove("effect"),
        void target.offsetWidth; 
        target.classList.add("effect")      
    })


    // 책 눌렀을 때 alert 발생
    $('#book').click(function () {
        const target = document.getElementById('alert');
        document.getElementById('question_1').innerHTML = "독서 관련 아이콘을 클릭하셨습니다";
        document.getElementById('question_2').innerHTML = "플레이리스트를 재생할까요?";
        
        target.classList.remove("effect"),
        void target.offsetWidth; 
        target.classList.add("effect")      
    })


    // 청소기 눌렀을 때 alert 발생
    $('#cleaner').click(function () {
        const target = document.getElementById('alert');
        document.getElementById('question_1').innerHTML = "독서 관련 아이콘을 클릭하셨습니다";
        document.getElementById('question_2').innerHTML = "플레이리스트를 재생할까요?";
        
        target.classList.remove("effect"),
        void target.offsetWidth; 
        target.classList.add("effect")      
    })

    // 소파 눌렀을 때 alert 발생
    $('#rest').click(function () {
        const target = document.getElementById('alert');
        document.getElementById('question_1').innerHTML = "휴식 관련 아이콘을 클릭하셨습니다";
        document.getElementById('question_2').innerHTML = "플레이리스트를 재생할까요?";
        
        target.classList.remove("effect"),
        void target.offsetWidth; 
        target.classList.add("effect")      
    })

    // 태블릿 눌렀을 때 alert 발생
    $('#tablet').click(function () {
        const target = document.getElementById('alert');
        document.getElementById('question_1').innerHTML = "재택근무 관련 아이콘을 클릭하셨습니다";
        document.getElementById('question_2').innerHTML = "플레이리스트를 재생할까요?";
        
        target.classList.remove("effect"),
        void target.offsetWidth; 
        target.classList.add("effect")      
    })

    // 아니오 눌렀을 때 alert 끄기
    $('#no').click(function () {
        document.getElementById('alert').style.display = "none";
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
function move_playlist() {
    var element = document.getElementById("playlist");
    element.scrollIntoView();
}

//  team 클릭시 team main 으로 이동
function move_team() {
    var element = document.getElementById("team");
    element.scrollIntoView();
}