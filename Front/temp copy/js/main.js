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
            $('#room').css({"position": "absolute", "left": "70%"});
            $('#dumbbell').css({ "position": "relative", "left": "70%" });
            $('#cleaner').css({ "position": "relative", "left": "70%" });
            $('#book').css({ "position": "relative", "left": "70%" });

           
            $('#more_distribution').css({ "right": "0%" })
            $('#mainBoxText1').css({ "left": "0%" })
            $('#room_slide').css({ "left": "-120%", "cursor": "initial" });

            $('siri_ment1').css({"display":"block"});

            const target = document.getElementById('alert');
            target.classList.remove("effect");
            document.getElementById('question_1').innerHTML = "";
            document.getElementById('question_2').innerHTML = "";
            document.getElementById('yes').innerHTML = "";
            document.getElementById('no').innerHTML = "";
            document.getElementById('alert').style.display = "none";
            musicWrap.classList.remove("paused");
            musicPlay.innerText = "play_arrow";
            musicPlay.setAttribute("title", "재생")
            musicAudio.pause();

            $('#category').css({"background" : "initial"});
            $('#category').css({"background-color" : "rebeccapurple"});

            $('#cate_player').css({"display" : "none"})

            document.getElementById('playing').innerHTML = "";

            $('#recursionPuzzleModal').css({
                "left": "25%"
            });
            

        } //캠모드
        if ($(document).scrollTop() > section3.top - 200) {
            $('.nav ul li').removeClass('on');
            $('.nav .playlist').addClass('on')
            $('.scrollDown').css('display', 'block')
            // $('.copyright').css('display', 'block')
            // $('.credit').css('display', 'none')

            $('#more_marketing').css({ "right": "0%" })
            $('#mainBoxText2').css({ "left": "0%" })

            // 스크롤시 자동 저장 멈춤
            $("#stop").trigger('click');
            // 비디오 감추기
            $('#video').css({"opacity":"0"});
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
    // 카테고리 모드 시작하기 눌렀을 때 기존 글씨 none & siri 발생
    $('#subText1').click(function () {
        $('#more_distribution').css({ "right": "-580%" })
        $('#mainBoxText1').css({ "left": "580%" })
        $('#room_slide').css({ "left": "15%", "cursor": "pointer" });
        $('#category').css({"background" : "url(https://www.oz-z.com/imgs/main/modal_bg2.png) 0 0 no-repeat", "background-size" : "cover"});
        $('#siri_ment1').css({"display":"block"});
        
    })

    

    // 캠모드 시작하기 눌렀을 때 기존 글씨 none & 웹캠 화면 실행
    $('#subText2').click(function () {
        $('#more_marketing').css({ "right": "-580%" })
        $('#mainBoxText2').css({ "left": "580%" })
        $('#video').css({"opacity": "1"})
    })




    // 시리 누르면 room 발생
    $('#room_slide').click(function () {
        $('#recursionPuzzleModal').css({
            "left": "-19%", "transition-property": "left",
            "transition-duration": "1s"
        });
        $('#siri_ment1').css({ "display": "none" });
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
        document.getElementById('alert').style.display = "block";

        const target = document.getElementById('alert');
        document.getElementById('question_1').innerHTML = "원하시는 아이콘을 클릭해 주세요";
        target.classList.remove("effect2");
        void target.offsetWidth; 
        target.classList.add("effect2");

    })

    // 덤벨 눌렀을 때 alert 발생
    $('#dumbbell').click(function () {
        $('#cate_player').css({"display" : "none"})
        const target = document.getElementById('alert');
        // 멘트수정
        document.getElementById('question_1').innerHTML = "운동 관련 아이콘을 클릭하셨습니다";
        document.getElementById('question_2').innerHTML = "플레이리스트를 재생할까요?";
        document.getElementById('playing').innerHTML = "";
        document.getElementById('yes').innerHTML = "예";
        document.getElementById('no').innerHTML = "아니오";
        // 애니메이션 초기화
        target.classList.remove("effect2");
        target.classList.remove("effect");
        void target.offsetWidth; 
        target.classList.add("effect");    
        $('#recursionPuzzleModal').css({
            "top": "11%", "transition-property": "top",
            "transition-duration": "1s",
            "filter": "initial"
        });
    })


    // 책 눌렀을 때 alert 발생
    $('#book').click(function () {
        $('#cate_player').css({"display" : "none"})
        const target = document.getElementById('alert');
        // 멘트수정
        document.getElementById('question_1').innerHTML = "독서 관련 아이콘을 클릭하셨습니다";
        document.getElementById('question_2').innerHTML = "플레이리스트를 재생할까요?";
        document.getElementById('playing').innerHTML = "";
        document.getElementById('yes').innerHTML = "예";
        document.getElementById('no').innerHTML = "아니오";
        // 애니메이션 초기화
        target.classList.remove("effect2");
        target.classList.remove("effect");
        void target.offsetWidth; 
        target.classList.add("effect");   
        $('#recursionPuzzleModal').css({
            "top": "11%", "transition-property": "top",
            "transition-duration": "1s",
            "filter": "initial"
        });
    })


    // 청소기 눌렀을 때 alert 발생
    $('#cleaner').click(function () {
        $('#cate_player').css({"display" : "none"})
        const target = document.getElementById('alert');
        document.getElementById('question_1').innerHTML = "독서 관련 아이콘을 클릭하셨습니다";
        document.getElementById('question_2').innerHTML = "플레이리스트를 재생할까요?";
        document.getElementById('playing').innerHTML = "";
        document.getElementById('yes').innerHTML = "예";
        document.getElementById('no').innerHTML = "아니오";
        // 애니메이션 초기화
        target.classList.remove("effect2");
        target.classList.remove("effect");
        void target.offsetWidth; 
        target.classList.add("effect");
        $('#recursionPuzzleModal').css({
            "top": "11%", "transition-property": "top",
            "transition-duration": "1s",
            "filter": "initial"
        });
    })

    // 소파 눌렀을 때 alert 발생
    $('#rest').click(function () {
        $('#cate_player').css({"display" : "none"})
        const target = document.getElementById('alert');
        document.getElementById('question_1').innerHTML = "휴식 관련 아이콘을 클릭하셨습니다";
        document.getElementById('question_2').innerHTML = "플레이리스트를 재생할까요?";
        document.getElementById('playing').innerHTML = "";
        document.getElementById('yes').innerHTML = "예";
        document.getElementById('no').innerHTML = "아니오";

        // 애니메이션 초기화
        target.classList.remove("effect2");
        target.classList.remove("effect");
        void target.offsetWidth; 
        target.classList.add("effect");
        $('#recursionPuzzleModal').css({
            "top": "11%", "transition-property": "top",
            "transition-duration": "1s",
            "filter": "initial"
        }); 
    })

    // 태블릿 눌렀을 때 alert 발생
    $('#tablet').click(function () {
        $('#cate_player').css({"display" : "none"})
        const target = document.getElementById('alert');
        document.getElementById('question_1').innerHTML = "재택근무 관련 아이콘을 클릭하셨습니다";
        document.getElementById('question_2').innerHTML = "플레이리스트를 재생할까요?";
        document.getElementById('playing').innerHTML = "";
        document.getElementById('yes').innerHTML = "예";
        document.getElementById('no').innerHTML = "아니오";
        // 애니메이션 초기화
        target.classList.remove("effect2");
        target.classList.remove("effect");
        void target.offsetWidth; 
        target.classList.add("effect");  
        $('#recursionPuzzleModal').css({
            "top": "11%", "transition-property": "top",
            "transition-duration": "1s",
            "filter": "initial"
        });
    })

    // 아니오 눌렀을 때 alert 끄기
    $('#no').click(function () {
        const target = document.getElementById('alert');
        // 애니메이션 초기화
        target.classList.remove("effect");
        target.classList.remove("effect2");
        void target.offsetWidth; 
        
        document.getElementById('question_1').innerHTML = "원하시는 아이콘을 클릭해 주세요";
        document.getElementById('question_2').innerHTML = "";
        document.getElementById('yes').innerHTML = "";
        document.getElementById('no').innerHTML = "";
        target.classList.add("effect2");
    })

    // 예 눌렀을 때 player 실행
    $('#yes').click(function () {
        $('#cate_player').css({"display" : "block"})
        const target = document.getElementById('alert');
        target.classList.remove("effect");
        target.classList.remove("effect2");
        void target.offsetWidth; 
        
        document.getElementById('question_1').innerHTML = "";
        document.getElementById('question_2').innerHTML = "";
        document.getElementById('yes').innerHTML = "";
        document.getElementById('no').innerHTML = "";
        document.getElementById('siri_ment1').innerHTML = "";
        document.getElementById('playing').innerHTML = "이런 노래는 어떠세요?";
        target.classList.add("effect2");

        $('#recursionPuzzleModal').css({
            "top": "-4%", "transition-property": "top",
            "transition-duration": "1s",
            "filter": "drop-shadow(-1px -1px 0px #fff)"
        });
        $('#cate_player').css({
            "top": "46%", "transition-property": "top",
            "transition-duration": "1s"
        });
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