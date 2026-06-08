import { Bot } from 'lucide-react';

export default function TypingIndicator() {
  return (
    <div className="flex gap-3" style={{ animation: 'fadeIn 0.2s ease-in' }}>
      <div className="w-8 h-8 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center mt-1 flex-shrink-0">
        <Bot size={13} className="text-emerald-400" />
      </div>
      <div className="bg-gray-800 border border-gray-700 rounded-2xl rounded-tl-sm px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Thinking</span>
          <div className="flex gap-1">
            <span className="typing-dot" />
            <span className="typing-dot" />
            <span className="typing-dot" />
          </div>
        </div>
      </div>
    </div>
  );
}