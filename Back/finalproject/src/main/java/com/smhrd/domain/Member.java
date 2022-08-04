package com.smhrd.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data // 기본 메서드(Getter/Setter/toString) 생성
@AllArgsConstructor // 모든 필드를 요소로 갖는 생성자 생성
public class Member {
	private String user_id;
	private String user_pw;
}
