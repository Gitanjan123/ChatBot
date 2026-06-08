package com.example.ChatBot.service;

import com.example.ChatBot.model.ChatRequest;
import com.example.ChatBot.model.ChatResponse;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.messages.AssistantMessage;
import org.springframework.ai.chat.messages.Message;
import org.springframework.ai.chat.messages.SystemMessage;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class ChatService {

    private final ChatClient chatClient;

    @Value("${app.system-prompt}")
    private String systemPrompt;

    @Value("${spring.ai.openai.chat.options.model}")
    private String modelName;

    @Autowired
    public ChatService(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.build();
    }

    public ChatResponse chat(ChatRequest request) {
        try {
            List<Message> messages = new ArrayList<>();
            messages.add(new SystemMessage(systemPrompt));

            if (request.getHistory() != null) {
                for (ChatRequest.MessageHistory h : request.getHistory()) {
                    if ("user".equalsIgnoreCase(h.getRole())) {
                        messages.add(new UserMessage(h.getContent()));
                    } else if ("assistant".equalsIgnoreCase(h.getRole())) {
                        messages.add(new AssistantMessage(h.getContent()));
                    }
                }
            }

            messages.add(new UserMessage(request.getMessage()));

            String reply = chatClient.prompt(new Prompt(messages))
                    .call()
                    .content();

            return ChatResponse.success(reply, modelName);

        } catch (Exception e) {
            return ChatResponse.error("AI error: " + e.getMessage());
        }
    }
}