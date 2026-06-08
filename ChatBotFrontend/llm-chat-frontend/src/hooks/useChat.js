import { useState, useCallback } from 'react';
import { sendChatMessage } from '../services/api';

export function useChat() {
  const [messages, setMessages] = useState([{
    id: 'welcome',
    role: 'assistant',
    content: "Hi! I'm your AI assistant. How can I help you today?",
    timestamp: new Date(),
  }]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (userInput) => {
    if (!userInput.trim() || isLoading) return;

    const userMsg = {
      id: Date.now().toString(),
      role: 'user',
      content: userInput.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const history = messages
        .filter(m => m.id !== 'welcome')
        .map(m => ({ role: m.role, content: m.content }));

      const data = await sendChatMessage(userInput.trim(), history);
      if (!data.success) throw new Error(data.errorMessage);

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply,
        model: data.model,
        timestamp: new Date(),
      }]);
    } catch (err) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'error',
        content: `Error: ${err.message}`,
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading]);

  const clearChat = useCallback(() => {
    setMessages([{
      id: 'welcome',
      role: 'assistant',
      content: "Chat cleared! Ask me anything.",
      timestamp: new Date(),
    }]);
  }, []);

  return { messages, isLoading, sendMessage, clearChat };
}