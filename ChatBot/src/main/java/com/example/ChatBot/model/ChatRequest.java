package com.example.ChatBot.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatRequest {
	@NotBlank(message="Message cannot be blank")
	@Size(max=4000,message="Message too Long")
	private String message;
	private List<MessageHistory>history;
	
	@Data
	@NoArgsConstructor
	@AllArgsConstructor
	public static class MessageHistory
	{
		private String role;
		private String content;
	}
}
