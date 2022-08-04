package com.smhrd.web;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.smhrd.domain.Music;
import com.smhrd.mapper.musicmapper;

@org.springframework.web.bind.annotation.RestController
public class RestController {
	
	@Autowired
	musicmapper mapper;
	
	@RequestMapping("/RMusicList.do")
	public List<Music> RMusicList() {
		
		List<Music> restList = mapper.randRMusic();
	
		return  restList;
	}
	
	
	@RequestMapping("/SMusicList.do")
	public List<Music> SMusicList() {
		
		List<Music> studyList = mapper.randSMusic();
	
		
		// jackson databind 라이브러리
		// 객체를 리턴 --> json 데이터 변환
		return  studyList;
	}
	
	
	@RequestMapping("/WMusicList.do")
	public List<Music> WMusicList() {
		
		
		List<Music> workList = mapper.randWMusic();

		return  workList;
	}
	
	
	@RequestMapping("/EMusicList.do")
	public List<Music> EMusicList() {
		
		List<Music> exerciseList = mapper.randEMusic();

		return  exerciseList;
	}
	
	
	@RequestMapping("/HMusicList.do")
	public List<Music> HMusicList() {
	
		List<Music> houseworkList = mapper.randHMusic();

		return  houseworkList;
	}

	

}
