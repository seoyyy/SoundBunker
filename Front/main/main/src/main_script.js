function powerMe() {
  document.getElementById("inAppBar").style.bottom = "-8%";
  document.getElementById("inAppBar").style.pointerEvents = "none";
  document.getElementsByClassName("wallpaper")[0].style.backgroundImage =
    "url('https://assets.codepen.io/2722301/bg.jpg')";
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
      document.getElementsByClassName("dockWrapper")[0].style.bottom = "-20%";
    }, 300);
  }
  resetIcons();
}
function lockClick() {
  document.getElementsByClassName("lockScreen")[0].style.backdropFilter =
    "blur(2vh) brightness(1.2)";
  document.getElementsByClassName("lockScreen")[0].style.top = "-110%";
  document.getElementsByClassName("dockWrapper")[0].style.bottom = "3%";
}
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
function goHome() {
  document.getElementById("inAppBar").style.bottom = "-8%";
  document.getElementById("inAppBar").style.pointerEvents = "none";
  document.getElementsByClassName("wallpaper")[0].style.backgroundImage =
    "url('https://assets.codepen.io/2722301/bg.jpg')";
  document.getElementsByClassName("dockWrapper")[0].style.bottom = "3%";
  resetIcons();
}
function resetIcons() {
  window.lastIcon = false;
  var x = document.getElementsByClassName("iconDiv");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.width = "calc(var(--sizeVar) / 20)";
    x[i].style.height = "calc(var(--sizeVar) / 20)";
    x[i].style.margin = "calc(var(--sizeVar) / 60) calc(var(--sizeVar) / 120)";
    x[i].style.pointerEvents = "all";
    x[i].getElementsByClassName("imgDiv")[0].style.opacity = 0;
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
function iconClick(e) {
  var x = document.getElementsByClassName("iconDiv");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.width = 0;
    x[i].style.height = 0;
    x[i].style.margin = 0;
    x[i].style.pointerEvents = "none";
    x[i].getElementsByClassName("imgDiv")[0].style.opacity = 0;
  }
  if (window.lastIcon) {
    e.target.style.width = "calc(var(--sizeVar) * 1)";
  } else {
    e.target.style.width = "calc(var(--sizeVar) * .96)";
  }
  e.target.style.height = "calc(var(--sizeVar) * .74)";
  e.target.style.marginLeft = "calc(var(--sizeVar) / 35)";
  document.getElementsByClassName("dockWrapper")[0].style.bottom = 0;
  e.target.getElementsByClassName("imgDiv")[0].style.opacity = 1;
  document
    .getElementById("inAppBar")
    .style.setProperty("--colorMe", window.barColor);
  document.getElementById("inAppBar").style.bottom = "0";
  document.getElementById("inAppBar").style.pointerEvents = "all";
  setTimeout(function () {
    document.getElementsByClassName("wallpaper")[0].style.backgroundImage =
      "none";
  }, 500);
}
function iconFClick(e) {
  window.lastIcon = true;
  iconClick(event);
}
powerVar = 0;
setTimeout(function () {
  document.getElementsByClassName("ipadScreen")[0].style.opacity = 1;
}, 1000);
