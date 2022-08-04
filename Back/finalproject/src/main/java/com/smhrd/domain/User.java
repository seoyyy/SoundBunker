package com.smhrd.domain;

import java.util.Date;



import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class User {
	private String user_id;
	private String user_pw;
	private String user_nick;
	private String user_email;
	
}