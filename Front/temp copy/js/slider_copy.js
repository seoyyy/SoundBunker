// JavaScript Document

var i = 0; // 사진 인덱스를 저장할 변수
$(".pre").click(function() { // img 크기만큼 왼쪽으로 이동
  if (i > 0) {
    i = i - 1;
    $(".imgSlide").stop().animate({
      "left": -800 * i + "px"
    }, "slow");
  }
});
$(".next").click(function() { // img 크기만큼 오른쪽으로 이동
  if (i < 2) {
    i = i + 1;
    $(".imgSlide").stop().animate({
      "left": -800 * i + "px"
    }, "slow");
  }

});