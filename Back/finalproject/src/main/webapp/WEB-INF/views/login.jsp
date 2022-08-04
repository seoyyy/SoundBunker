<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>
    <title>Sign in & Sign up Form</title>
    <link rel="stylesheet" href="login.css">
    <style>
        @font-face {
            font-family: 'S-CoreDream-3Light';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="forms-container">
            <div class="signin-signup">
                <form action="/Front/temp/main.html" method="#" class="sign-in-form">
                    <!-- 로그인 -->
                    <h2 class="title">로그인</h2>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <!-- 아이디 -->
                        <input type="text" placeholder="아이디" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <!-- 패스워드 -->
                        <input type="password" placeholder="패스워드" />
                    </div>
                    <!-- 로그인버튼 -->
                    <input type="submit" value="로그인" class="btn solid">
                    <div class="social-media">
                        <p class="social-text">카카오톡으로 계속하시겠습니까?</p>
                        <a href="#" class="social-icon" onclick="kakaoLogin()">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </form>
                <!-- 회원가입 -->
                <form action="#" class="sign-up-form">
                    <h2 class="title">회원가입</h2>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="아이디" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="이메일" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="패스워드" />
                    </div>
                    <input type="submit" class="btn" value="회원가입">
                </form>
            </div>
        </div>

        <div class="panels-container">
            <div class="panel left-panel">
                <div class="content">
                    <h3>아이디가 없으십니까?</h3>
                    <p style="color: yellow; font-weight: bold;">
                        아래 버튼을 눌러주세요!
                    </p>
                    <!-- 회원가입 버튼 -->
                    <button class="btn transparent" id="sign-up-btn"> 회원가입
                    </button>
                </div>
            </div>
            <div class="panel right-panel">
                <div class="content">
                    <h3>아이디가 있으십니까 ?</h3>
                    <p style="color: yellow; font-weight: bold;">
                        아래 버튼을 눌러주세요!
                    </p>
                    <!-- 로그인 버튼 -->
                    <button class="btn transparent" id="sign-in-btn"> 로그인
                    </button>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
<script src="login.js"></script>
<script src="kakao.js"></script>
</html>