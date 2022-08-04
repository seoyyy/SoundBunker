package com.smhrd.mapper;

import java.util.List;

import com.smhrd.domain.User;



public interface usermapper{
	public int userInsert(User vo);
	
	public List<User> userList();
	
	public User userContent(String user_id);
	
	public int userDelete(String user_id);
	
	public int userUpdate(User vo);
	
	
}
