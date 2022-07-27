var video = document.getElementById("video");
        var btn = document.getElementById("btn");
        var snap = document.getElementById("snap");
        var save = document.getElementById("save");
        // canvas 조작
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        var video = document.getElementById('video');
        // 캡처 url 가져오기
        document.getElementById("snap").addEventListener("click", function () {
            var file = canvas.toDataURL(); // 촬영한 이미지의 base64 문자열
            context.drawImage(video, 0, 0, 640, 480);
        });
        // 저장 url 가져오기
        document.getElementById('save').addEventListener('click', function () {
            event.target.href = canvas.toDataURL()
        });

        var isPlaying = video.srcObject;

        // 시작될때 캠 강제클릭
        $(btn).trigger('click')

        // 2.5초 사진찍기
        setInterval(() => {
            console.log('snap test')
            $(snap).trigger('click')
            // 저장
            $("#save").get(0).click();
        }, 2500);

        function downFile(down) {
            $(down).attr('href', 'Front/scanimg');
            $(down).attr('download', 'img.jpg');
            
        }
        function cameraonoff() {
            if (!isPlaying) {
                cameraon();
            } else {
                cameraoff();
            }
        }

        function cameraon() {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices
                    .getUserMedia({
                        video: true
                    })
                    .then(function (stream) {
                        video.srcObject = stream;
                        console.log('video start')
                        video.play();
                    })
                    .then(() => {
                        isPlaying = true;
                        console.log('text change off')
                        btn.innerText = "Off";
                    });
            }
        }

        function cameraoff() {
            const stream = video.srcObject;
            if (stream) {
                const tracks = stream.getTracks();

                tracks.forEach(function (track) {
                    console.log('video stop')
                    track.stop();
                });

                video.srcObject = null;
                isPlaying = false;
                console.log('text change on')
                btn.innerText = "On";
            }
        }