package com.example.ChatBot.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChatResponse {

    private String reply;
    private String model;
    private boolean success;
    private String errorMessage;
    private LocalDateTime timestamp;

    public static ChatResponse success(String reply, String model) {
        return ChatResponse.builder()
                .reply(reply)
                .model(model)
                .success(true)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public static ChatResponse error(String errorMessage) {
        return ChatResponse.builder()
                .success(false)
                .errorMessage(errorMessage)
                .timestamp(LocalDateTime.now())
                .build();
    }
}