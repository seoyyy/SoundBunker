const date = new Date();
const hour = date.getHours();//24시간 시간 값만 얻음
if (0 <= hour && hour <= 1){
    localStorage.setItem("darkmode", "on");
}else{
    localStorage.setItem("darkmode", "off");
}
console.log(hour)

document.addEventListener('DOMContentLoaded', function () {


    if (document.querySelector('.darkmode')) {
        if (localStorage.getItem("darkmode") == 'on') {
            //다크모드 켜기
            document.body.dataset.darkmode = 'on';
            document.querySelector('#toggle-radio-dark').checked = true;
        }

        //다크모드 이벤트 핸들러
        document.querySelector('.darkmode').addEventListener("click", e => {
            if (e.target.classList.contains('todark')) {
                document.body.dataset.darkmode = 'on';
                localStorage.setItem("darkmode", "on");
            } else if (e.target.classList.contains('tolight')) {
                document.body.dataset.darkmode = 'off';
                localStorage.setItem("darkmode", "off");
            }
        }, false);
    } else {
        localStorage.removeItem("darkmode");
    }

})

