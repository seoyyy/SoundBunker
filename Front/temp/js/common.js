$(function () {
    var menu = $(".navBtn > ul > li");
    var contents = $(".mainBox")
    var navH = $(".navBtn").height()
    menu.click(function () {
        var tg = $(this);
        var i = tg.index();
        var section = contents.eq(i);
        var tt = section.offset().top;
        $("html,body").stop().animate({
            scrollTop: tt
        });
    });
    $(window).scroll(function () {
        var sct = $(window).scrollTop() + 20;
        contents.each(function () {
            var tg = $(this);
            var i = tg.index();
            if (tg.offset().top <= sct) {
                menu.removeClass("on");
                menu.eq(i).addClass("on");

            }
        });
    });

    /*var elm = ".mainBox";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try {
                        moveTop = $(elmSelecter).next().offset().top;
                    } catch (e) {}
                }
                // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev().offset().top;
                    } catch (e) {}
                }
            }

            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 500,
                complete: function () {}
            });
        });
    });*/

});
