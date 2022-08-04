var mdata;


//---------------------------재택근무---------------------------
function Workajax(){
	$.ajax({
		url: 'WMusicList.do', 
		type: 'post', 
		cache: false,
		success: function (data) {
			
			mdata = data;
			sessionStorage.clear()
			sessionStorage.setItem('mdata', JSON.stringify(mdata));
			console.log('ajax:',mdata)
			console.log(JSON.stringify(mdata))

			
			},
		error: function (data) {
			alert('error');
		}
	})
}

//---------------------------독서---------------------------
function Studyajax(){
	$.ajax({
		url: 'SMusicList.do', 
		type: 'post', 
		cache: false,
		success: function (data) {
			
			mdata = data;
			sessionStorage.clear()
			sessionStorage.setItem('mdata', JSON.stringify(mdata));
			console.log('ajax:',mdata)
			console.log(JSON.stringify(mdata))

			},
		error: function (data) {
			alert('error');
		}
	})
}
//---------------------------운동---------------------------
function Exerciseajax(){
	$.ajax({
		url: 'EMusicList.do', 
		type: 'post', 
		cache: false,
		success: function (data) {
			
			mdata = data;
			sessionStorage.clear()
			sessionStorage.setItem('mdata', JSON.stringify(mdata));
			console.log('ajax:',mdata)
			console.log(JSON.stringify(mdata))

			},
		error: function (data) {
			alert('error');
		}
	})
}
//---------------------------휴식---------------------------
function Restajax(){
	$.ajax({
		url: 'RMusicList.do', 
		type: 'post', 
		cache: false,
		success: function (data) {
			
			mdata = data;
			sessionStorage.clear()
			sessionStorage.setItem('mdata', JSON.stringify(mdata));
			console.log('ajax:',mdata)
			console.log(JSON.stringify(mdata))

			},
		error: function (data) {
			alert('error');
		}
	})
}
//---------------------------집안일---------------------------
function Houseworkajax(){
	$.ajax({
		url: 'HMusicList.do', 
		type: 'post', 
		cache: false,
		success: function (data) {
			
			mdata = data;
			sessionStorage.clear()
			sessionStorage.setItem('mdata', JSON.stringify(mdata));
			console.log('ajax:',mdata)
			console.log(JSON.stringify(mdata))

			},
		error: function (data) {
			alert('error');
		}
	})
}

