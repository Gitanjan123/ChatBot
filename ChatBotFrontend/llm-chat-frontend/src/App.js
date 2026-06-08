import { useEffect, useRef, useState } from 'react';
import { Wifi, WifiOff } from 'lucide-react';
import { useChat } from './hooks/useChat';
import { checkHealth } from './services/api';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import TypingIndicator from './components/TypingIndicator';
import Sidebar from './components/Sidebar';

export default function App() {
  const { messages, isLoading, sendMessage, clearChat } = useChat();
  const bottomRef = useRef(null);
  const [online, setOnline] = useState(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    checkHealth().then(setOnline);
    const t = setInterval(() => checkHealth().then(setOnline), 30000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex h-screen bg-gray-950 overflow-hidden">
      <Sidebar onClear={clearChat} />

      <div className="flex flex-col flex-1 min-w-0">
        {/* Header */}
        <header className="flex items-center gap-3 px-5 py-3 border-b border-gray-800 bg-gray-950">
          <div className="flex-1">
            <h1 className="text-sm font-semibold text-gray-100">AI Assistant</h1>
            <p className="text-xs text-gray-500">Spring Boot + GPT-4o-mini</p>
          </div>
          <div className="flex items-center gap-1.5">
            {online === null
              ? <span className="text-xs text-gray-500">Checking...</span>
              : online
              ? <><Wifi size={13} className="text-emerald-500" /><span className="text-xs text-emerald-500">Backend Online</span></>
              : <><WifiOff size={13} className="text-red-500" /><span className="text-xs text-red-400">Backend Offline</span></>
            }
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 py-6 space-y-5">
            {messages.map(msg => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            {isLoading && <TypingIndicator />}
            <div ref={bottomRef} />
          </div>
        </div>

        {/* Input */}
        <ChatInput onSend={sendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}