package com.smhrd.domain;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data 
@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor
public class Music {
	
	private String song_id;
	@NonNull
	private String song_title;
	@NonNull
	private String artist;
	@NonNull
	private char song_category;
	@NonNull
	private String repo;

	
	
}

