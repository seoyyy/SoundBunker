package com.smhrd.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class bpmController {
	
	@RequestMapping("/title.do")
	public String title(Model model) {
		return "title";
	}
	
	@RequestMapping("/main.do")
	public String main(Model model) {
		return "main";
	}
	@RequestMapping("/login.do")
	public String login(Model model) {
		return "login";
	}
	@RequestMapping("/screen.do")
	public String screen(Model model) {
		return "screen";
	}
	
	/*
	 * @RequestMapping("/signin.do") public String mainlogin(Model model) {
	 * if(loginmember != null) { return "mainlogin"; } else { return "main"; } }
	 */
}
