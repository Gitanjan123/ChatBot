import { Bot, User, AlertCircle } from 'lucide-react';

function renderMarkdown(text) {
  const parts = text.split(/(```[\s\S]*?```)/g);
  return parts.map((part, i) => {
    if (part.startsWith('```') && part.endsWith('```')) {
      const lines = part.slice(3, -3).split('\n');
      const lang = lines[0];
      const code = lines.slice(1).join('\n');
      return (
        <pre key={i}>
          {lang && <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '6px' }}>{lang}</div>}
          <code>{code}</code>
        </pre>
      );
    }
    const html = part
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^# (.+)$/gm, '<h1>$1</h1>')
      .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
      .replace(/^[-*] (.+)$/gm, '<li>$1</li>')
      .replace(/\n\n/g, '</p><p>');
    return <div key={i} dangerouslySetInnerHTML={{ __html: `<p>${html}</p>` }} />;
  });
}

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user';
  const isError = message.role === 'error';
  const fmt = (d) =>
    new Intl.DateTimeFormat('en', { hour: '2-digit', minute: '2-digit' }).format(d);

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
      style={{ animation: 'slideUp 0.25s ease-out' }}>

      {/* Avatar */}
      <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1
        ${isUser ? 'bg-emerald-600' : isError ? 'bg-red-700' : 'bg-gray-700 border border-gray-600'}`}>
        {isUser
          ? <User size={13} className="text-white" />
          : isError
          ? <AlertCircle size={13} className="text-white" />
          : <Bot size={13} className="text-emerald-400" />}
      </div>

      {/* Bubble */}
      <div className={`flex flex-col max-w-xs md:max-w-xl ${isUser ? 'items-end' : 'items-start'}`}>
        <div className={`px-4 py-3 rounded-2xl text-sm
          ${isUser
            ? 'bg-emerald-700 text-white rounded-tr-sm'
            : isError
            ? 'bg-red-950 border border-red-800 text-red-300 rounded-tl-sm'
            : 'bg-gray-800 border border-gray-700 text-gray-100 rounded-tl-sm'}`}>
          {isUser || isError
            ? <p className="whitespace-pre-wrap">{message.content}</p>
            : <div className="md">{renderMarkdown(message.content)}</div>}
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-gray-500">{fmt(message.timestamp)}</span>
          {message.model && (
            <span className="text-xs text-gray-600" style={{ fontFamily: 'monospace' }}>
              {message.model}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}