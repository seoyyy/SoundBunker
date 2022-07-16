function powerMe() {
  // 배경화면에서 홈 바 숨기기
  document.getElementById("inAppBar").style.bottom = "-8%";
  // 배경화면에서 홈 바 포인터이벤트 없애기
  document.getElementById("inAppBar").style.pointerEvents = "none";
  // 잠금해제 혹은 앱에서 나올 때 보이는 바탕화면
  document.getElementsByClassName("wallpaper")[0].style.backgroundImage =
    "url('https://assets.codepen.io/2722301/bg.jpg')";



  //아이패드에 있는 전원 버튼(우리는 사용 x)
  if (powerVar == 1) {
    document.getElementsByClassName("ipadScreen")[0].style.opacity = 1;
    document.getElementsByClassName("ipadScreen")[0].style.pointerEvents =
      "all";
    powerVar = 0;
    document.getElementsByClassName("lockScreen")[0].style.transition =
      "top 800ms ease-in 0s, backdrop-filter 200ms ease-in 0s";
    document.getElementsByClassName("dockWrapper")[0].style.transition =
      "bottom 400ms ease-in-out 0s";
  } else {
    document.getElementsByClassName("ipadScreen")[0].style.opacity = 0;
    document.getElementsByClassName("ipadScreen")[0].style.pointerEvents =
      "none";
    powerVar = 1;



    setTimeout(function () {
      document.getElementsByClassName("lockScreen")[0].style.transition =
        "none";
      document.getElementsByClassName("dockWrapper")[0].style.transition =
        "none";
      document.getElementsByClassName("lockScreen")[0].style.backdropFilter =
        "blur(0)";
      document.getElementsByClassName("lockScreen")[0].style.top = "0";
      document.getElementsByClassName("dockWrapper")[0].style.bottom = "-50%";
    }, 300);
  }
  resetIcons();
}

/*--------------잠금해제---------------*/
function lockClick() {
  // 잠금해제시 잠금화면 블러처리 & 밝기
  document.getElementsByClassName("lockScreen")[0].style.backdropFilter =
    "blur(2vh) brightness(1.2)";
  // 잠금해제시 잠금화면 위로 사라지기
  document.getElementsByClassName("lockScreen")[0].style.top = "-110%";
  // 잠금해제시 아이콘바 밑 공간
  document.getElementsByClassName("dockWrapper")[0].style.bottom = "3%";
}

/*--------------잠금화면 시계---------------*/
function checkTime() {
  var day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  d = new Date();
  if (d.getMinutes() < 10) {
    minTime = "0" + d.getMinutes();
  } else {
    minTime = d.getMinutes();
  }
  document.getElementsByClassName("lockTime")[0].innerHTML =
    d.getHours() +
    ":" +
    minTime +
    "<br/>" +
    day[d.getDay()] +
    ", " +
    month[d.getMonth()] +
    " " +
    d.getDate();
  setTimeout(function () {
    checkTime();
  }, 500);
}

/*--------------바탕화면으로 돌아가기---------------*/
function goHome() {
  // 바탕화면에 홈 바 아래로
  document.getElementById("inAppBar").style.bottom = "-8%";
  // 바탕화면에 홈 바 포인터이벤트 없애기
  document.getElementById("inAppBar").style.pointerEvents = "none";
  // 바탕화면 이미지
  document.getElementsByClassName("wallpaper")[0].style.backgroundImage =
    "url('https://assets.codepen.io/2722301/bg.jpg')";
  // 바탕화면으로 돌아갔을 때 아이콘바 아래 공간
  document.getElementsByClassName("dockWrapper")[0].style.bottom = "3%";
  // 아이콘바 재생성 함수
  resetIcons();
}


/*--------------아이콘바 재생성---------------*/
function resetIcons() {
  /* 아이콘 누를 때 나오는 이미지 아래 홈 바 */
  window.lastIcon = false;
  var x = document.getElementsByClassName("iconDiv");
  var i;
  for (i = 0; i < x.length; i++) {
    // 어플 실행 후 종료했을 때 아이콘 모양(넓이 20)
    x[i].style.width = "calc(var(--sizeVar) / 20)";
    // 어플 실행 후 종료했을 때 아이콘 모양(높이 20)
    x[i].style.height = "calc(var(--sizeVar) / 20)";
    // 어플 실행 후 종료했을 때 아이콘 바 뒷 배경(높이 60 , 아이콘 간격 120)
    x[i].style.margin = "calc(var(--sizeVar) / 60) calc(var(--sizeVar) / 120)";
    // 어플 실행 후 종료했을 때 아이콘 포인터이벤트(가능 all)
    x[i].style.pointerEvents = "all";
    // 어플 실행 후 종료했을 때 아이콘 이미지
    // opacity = 0: 아이콘이미지, 1: 실행된 어플 화면 이미지
    // ("imgDiv")[0] : 아이콘
    x[i].getElementsByClassName("imgDiv")[0].style.opacity = 0;


    //아이패드에 있는 전원 버튼(우리는 사용 x)
    if (powerVar == 1) {
      x[i].style.transition =
        "all 0s ease-in-out 350ms, transform 100ms ease-in-out 0s";
      x[i].getElementsByClassName("imgDiv")[0].style.transition =
        "opacity 0s linear 350ms";
    } else {
      x[i].style.transition =
        "all 500ms ease-in-out 0s, transform 100ms ease-in-out 0s";
      x[i].getElementsByClassName("imgDiv")[0].style.transition =
        "opacity 300ms linear 0s";
    }
  }

}

/*--------------아이콘 클릭 이벤트 함수---------------*/
function iconClick(e) {
  var x = document.getElementsByClassName("iconDiv");
  var i;
  // 아이콘갯수(x) 만큼
  for (i = 0; i < x.length; i++) {
    // 아이콘 클릭시 전체 아이콘 안 보이게 하기 & 포인터이벤트 없애기
    x[i].style.width = 0;
    x[i].style.height = 0;
    x[i].style.margin = 0;
    x[i].style.pointerEvents = "none";
    // ?
    x[i].getElementsByClassName("imgDiv")[0].style.opacity = 0;
  }
  // 아이콘 클릭시 발생 이미지 속성
  e.target.style.width = "calc(var(--sizeVar) * 2.1)";
  e.target.style.height = "calc(var(--sizeVar) * 1)";
  e.target.style.marginLeft = "calc(var(--sizeVar) / 67)";
  e.target.style.margin = "calc(var(--sizeVar) / 67)";
  // 아이콘 클릭시 나오는 이미지 bottom 조절
  document.getElementsByClassName("dockWrapper")[0].style.bottom = "5%";
  // 아이콘 클릭시 상단바 없애기
  document.getElementsByClassName("statusBar")[0].style.display = "none";
  // 아이콘 클릭시 앱 실행 화면 이미지 보이게 하기
  // opacity = 1 : 앱 실행 화면, 0 : 아이콘 이미지
  e.target.getElementsByClassName("imgDiv")[0].style.opacity = 1;
  // 아이콘 클릭시 홈 바 생성
  document
    .getElementById("inAppBar").style.setProperty("--colorMe", window.barColor);
  document.getElementById("inAppBar").style.bottom = "0";
  document.getElementById("inAppBar").style.pointerEvents = "all";
  //setTimeout(function () {
    //document.getElementsByClassName("wallpaper")[0].style.backgroundImage =
    //  "none";
  //}, 500);
}
function iconFClick(e) {
  window.lastIcon = true;
  iconClick(event);
}
powerVar = 0;
setTimeout(function () {
  document.getElementsByClassName("ipadScreen")[0].style.opacity = 1;
}, 1000);