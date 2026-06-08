import { Plus, Trash2, MessageSquare } from 'lucide-react';

export default function Sidebar({ onClear }) {
  return (
    <aside className="hidden lg:flex flex-col w-60 bg-gray-900 border-r border-gray-800 flex-shrink-0">
      <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-800">
        <div className="w-7 h-7 bg-emerald-600 rounded-lg flex items-center justify-center">
          <MessageSquare size={14} className="text-white" />
        </div>
        <span className="font-semibold text-sm text-gray-100">LLM Chat</span>
      </div>

      <div className="px-3 py-3">
        <button onClick={onClear}
          className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 text-sm text-gray-300 hover:text-white"
          style={{ transition: 'all 0.2s' }}>
          <Plus size={14} /> New Chat
        </button>
      </div>

      <div className="flex-1 px-3 py-2">
        <p className="text-xs text-gray-600 px-2 mb-2 uppercase tracking-wider">Recent</p>
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-gray-800 border border-gray-700 cursor-pointer">
          <MessageSquare size={12} className="text-emerald-400" />
          <span className="text-sm text-gray-200 truncate">Current Chat</span>
        </div>
      </div>

      <div className="px-3 py-3 border-t border-gray-800">
        <button onClick={onClear}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-gray-500 hover:text-red-400"
          style={{ transition: 'all 0.2s' }}>
          <Trash2 size={13} /> Clear Chat
        </button>
      </div>
    </aside>
  );
}