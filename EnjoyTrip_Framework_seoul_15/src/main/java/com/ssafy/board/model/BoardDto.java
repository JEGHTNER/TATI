package com.ssafy.board.model;

import java.util.List;

import lombok.Data;

@Data
public class BoardDto {

	private int articleNo;
	private String userId;
	private String userName;
	private String subject;
	private String content;
	private int hit;
	private String registerTime;
	private List<FileInfoDto> fileInfos;

}
