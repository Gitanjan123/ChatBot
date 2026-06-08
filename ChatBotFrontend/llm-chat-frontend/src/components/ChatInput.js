import { useState, useRef } from 'react';
import { Send } from 'lucide-react';

export default function ChatInput({ onSend, isLoading }) {
  const [input, setInput] = useState('');
  const ref = useRef(null);

  const submit = () => {
    if (!input.trim() || isLoading) return;
    onSend(input.trim());
    setInput('');
    if (ref.current) ref.current.style.height = 'auto';
  };

  const onKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
    if (ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = Math.min(ref.current.scrollHeight, 150) + 'px';
    }
  };

  return (
    <div className="border-t border-gray-800 bg-gray-950 px-4 py-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-end gap-3 bg-gray-800 border border-gray-700 rounded-2xl px-4 py-3"
          style={{ transition: 'border-color 0.2s' }}
          onFocus={e => e.currentTarget.style.borderColor = '#059669'}
          onBlur={e => e.currentTarget.style.borderColor = '#374151'}>
          <textarea
            ref={ref}
            value={input}
            onChange={onChange}
            onKeyDown={onKey}
            disabled={isLoading}
            placeholder="Message AI... (Enter to send, Shift+Enter for new line)"
            rows={1}
            className="flex-1 bg-transparent text-gray-100 placeholder-gray-500 text-sm resize-none outline-none leading-relaxed disabled:opacity-50"
            style={{ maxHeight: '150px' }}
          />
          <button
            onClick={submit}
            disabled={!input.trim() || isLoading}
            className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0
              ${input.trim() && !isLoading
                ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed'}`}
            style={{ transition: 'background-color 0.2s' }}>
            <Send size={13} />
          </button>
        </div>
        <p className="text-center text-xs text-gray-600 mt-2">
          AI can make mistakes. Verify important info.
        </p>
      </div>
    </div>
  );
}