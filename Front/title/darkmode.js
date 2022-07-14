// 시간대별 background-color 변경
const date = new Date();
const hour = date.getHours();// 0~23시간 시간 정수 값 얻기
if (7 <= hour && hour <= 18){  // 오전7 이상 오후 6시 미만  
    document.body.classList.add('dark')
}else{
    document.body.classList.add('light')
}
console.log(hour)

// 클릭모션으로 다크모드 이벤트
const checkbox = 
document.getElementById('checkbox');
checkbox.addEventListener('click', () => {
    if (document.body.classList.contains('light')){
        document.body.classList.remove('light')
        document.body.classList.add('dark')
    }else if (document.body.classList.contains('dark')){
        document.body.classList.remove('dark')
        document.body.classList.add('light')
    }
});
