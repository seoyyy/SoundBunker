<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="2.5;url=main.do">
    <title>SoundBunker</title>
    <link rel="stylesheet" href="resources/css/title.css">
    <link rel="stylesheet" href="resources/css/darkmode.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"> 
</head>

<body>
    <svg viewBox="0 0 800 600">
        <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="35%" class="text--line">
                Sound
            </text>
            <text text-anchor="middle" x="50%" y="70%" class="text--line2">
                Bunker
            </text>

        </symbol>

        <g class="g-ants">
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
        </g>
        
    </svg>
    <div class="cover"></div>
    
</body>
<script src="resources/js/darkmode.js"></script>
</html>