$(document).ready(function () {

    $('.btnWrap .service').click(function () {
        $('.modalBox').addClass('on')
        $('.modalBg').addClass('on')
        /*$('.modalBg').on('scroll touchmove mousewheel', function (event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });*/
    })

    //모달 열기 시 스크롤 사용 금지
    /*$('.modal_btn').click(function () {
        $('.modal_box').on('scroll touchmove mousewheel', function (event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
    })*/


    //모달 닫기, 스크롤 사용 가능
    $('.modalClose').click(function () {
        $('.modalBox').removeClass('on')
        $('.modal_box').removeClass('on')
        $('.modalBg').removeClass('on')
        $('.modalBg').off('scroll touchmove mousewheel');
    })

    $('.modalBtn_2').click(function () {
        $('.modal_box').removeClass('on')
        $('.modalBox').removeClass('on')
        $('.mainBox2_modal').addClass('on')
    })

    $('.modalBtn_3').click(function () {
        $('.modal_box').removeClass('on')
        $('.modalBox').removeClass('on')
        $('.mainBox3_modal').addClass('on')
    })

    $('.modalBtn_4').click(function () {
        $('.modal_box').removeClass('on')
        $('.modalBox').removeClass('on')
        $('.mainBox4_modal').addClass('on')
    })

    $('.modalBtn_5').click(function () {
        $('.modal_box').removeClass('on')
        $('.modalBox').removeClass('on')
        $('.mainBox5_modal').addClass('on')
        $('.mainBox6_modal').addClass('on')
    })

    //화면별 메뉴 선택표시 추가
    var section = $('.mainBox_01').offset();
    var section1 = $('.mainBox_02').offset();
    var section2 = $('.mainBox_03').offset();
    var section3 = $('.mainBox_04').offset();
    var section4 = $('.mainBox_05').offset();

    $(window).scroll(function () {
        if ($(document).scrollTop() > section.top - 200) {
            $('.copyright').css('display', 'none')
            $('.credit').css('display', 'block')
        }
        if ($(document).scrollTop() > section1.top - 200) {
            $('.nav ul li').removeClass('on');
            $('.nav .distribution').addClass('on')
            $('.copyright').css('display', 'block')
            $('.credit').css('display', 'none')
        }
        if ($(document).scrollTop() > section2.top - 200) {
            $('.nav ul li').removeClass('on');
            $('.nav .marketing').addClass('on')
            $('.copyright').css('display', 'block')
            $('.credit').css('display', 'none')
        }
        if ($(document).scrollTop() > section3.top - 200) {
            $('.nav ul li').removeClass('on');
            $('.nav .upstream').addClass('on')
            $('.scrollDown').css('display', 'block')
            $('.copyright').css('display', 'block')
            $('.credit').css('display', 'none')
        }
        if ($(document).scrollTop() > section4.top - 200) {
            $('.nav ul li').removeClass('on');
            $('.nav .subscription').addClass('on')
            $('.scrollDown').css('display', 'none')
            $('.copyright').css('display', 'none')
            $('.credit').css('display', 'none')
        }
    });

    //메뉴 클릭 시 이동
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });


    //모바일 메뉴 닫기,열기
    /*$('.callNav').click(function () {
        $(this).toggleClass('active');
        $('.btnWrap').toggleClass('on');
    })*/

    $('.callNav').hover(function(){
        $(this).toggleClass('on')
    })

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
    
    /*//slick
    $('.slideWrap').slick({
        centerMode: true,
        centerPadding: '20%',
        infinite: false,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20%',
                    slidesToShow: 1
                }
      },
            {
                breakpoint: 540,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
      }
    ]
    });

    let blocked = false;
    let blockTimeout = null;
    let prevDeltaY = 0;

    $(".slideWrap").on('mousewheel DOMMouseScroll wheel', (function (e) {
        let deltaY = e.originalEvent.deltaY;
        e.preventDefault();
        e.stopPropagation();

        clearTimeout(blockTimeout);
        blockTimeout = setTimeout(function () {
            blocked = false;
        }, 50);


        if (deltaY > 0 && deltaY > prevDeltaY || deltaY < 0 && deltaY < prevDeltaY || !blocked) {
            blocked = true;
            prevDeltaY = deltaY;

            if (deltaY > 0) {
                $(this).slick('slickNext');
            } else {
                $(this).slick('slickPrev');
            }
        }
    }));*/

});
