$(document).ready(() => {

	// ajax통신, 글데이터 가져오기
	$.ajax({
		url: 'MusicList.do', // 어디로 요청을 보낼 것인가? 
		type: 'post', //get?, post?
		data: {
		'key(name)' : value  // -> 보내줄데이터
		},
		/* dataType : 'json',  응답 받는 데이터가 어떤 형태인지 */
		success: function (res) {
			// 요청이 성공했을때  실행되는 Call back 함수 
			// res --> 응답받는 데이터가 담기는 변수
			console.log(res);
			},
		error: function (e) {
			// 404,405,500 --> 요청자체가 실패
			// e--> 어떤 에러인지 담기는 변수
			alert('error');
		}
	})
})

