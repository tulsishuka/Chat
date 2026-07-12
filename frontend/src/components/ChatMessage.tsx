import React from 'react'
import { Video, Search, Info, Plus, Smile, AtSign, Send, FileText, Download } from 'lucide-react'

const ChatMessage = () => {
  const messages = [
    {
      id: 1,
      sender: 'Sarah Chen',
      time: '10:42 AM',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80',
      content: 'Hey everyone! Has anyone had a chance to look at the new design tokens for the messaging module? We need to finalize the primary palette by EOD.',
      isMe: false,
    },
    {
      id: 2,
      sender: 'You',
      time: '10:45 AM',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&h=80&q=80',
      content: 'Just finished reviewing them. The primary blue looks great and meets all accessibility standards for contrast. I\'ll push the updated Figma file in a minute.',
      isMe: true,
    },
    {
      id: 3,
      sender: 'Jordan Smith',
      time: '10:47 AM',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80',
      content: 'Great work Alex. Could you also double check the mobile padding values? I noticed some slight clipping on smaller viewports.',
      isMe: false,
    },
    {
      id: 4,
      sender: 'Bot Integration',
      time: '10:50 AM',
      avatar: 'bot', // Custom rendering for the bot avatar color/icon
      content: 'System Notification: A new design specification was uploaded to the shared repository.',
      isFile: true,
      fileName: 'mobile_ux_guidelines.pdf',
      fileSize: '2.4 MB • PDF Document',
      isMe: false,
    },
  ]

  return (
    <div className="flex-1 h-screen bg-[#09111e] flex flex-col font-sans select-none text-slate-100">
      
      {/* 1. Header Navigation Bar */}
      <header className="h-16 border-b border-slate-800/80 px-6 flex items-center justify-between flex-shrink-0 bg-[#09111e]">
        <div className="flex items-center gap-6">
          <div>
            <h2 className="text-base font-bold text-white leading-tight">General Room</h2>
            <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
              128 members • <span className="text-[#38bdf8]">42 active</span>
            </p>
          </div>
          
          {/* Top Tabs */}
          <nav className="hidden sm:flex items-center gap-6 ml-4 text-sm font-medium h-16">
            <a href="#" className="text-white border-b-2 border-blue-500 h-full flex items-center px-1">All Messages</a>
            <a href="#" className="text-slate-400 hover:text-slate-200 h-full flex items-center px-1">Unread</a>
            <a href="#" className="text-slate-400 hover:text-slate-200 h-full flex items-center px-1">Archived</a>
          </nav>
        </div>

        {/* Header Action Tools */}
        <div className="flex items-center gap-4 text-slate-400">
          <button className="hover:text-white p-1.5 rounded-lg transition-colors"><Video className="w-5 h-5" /></button>
          <button className="hover:text-white p-1.5 rounded-lg transition-colors"><Search className="w-5 h-5" /></button>
          <button className="hover:text-white p-1.5 rounded-lg transition-colors"><Info className="w-5 h-5" /></button>
        </div>
      </header>

      {/* 2. Message History Area */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 flex flex-col">
        {/* Date Stamp Separator */}
        <div className="w-full flex justify-center my-2">
          <span className="bg-[#172337] text-[10px] text-slate-400 font-mono py-1 px-3 rounded-full uppercase tracking-wider">
            Today, October 24
          </span>
        </div>

        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-4 max-w-[85%] ${msg.isMe ? 'self-end flex-row-reverse text-right' : 'self-start'}`}>
            
            {/* Avatar block */}
            <div className="flex-shrink-0">
              {msg.avatar === 'bot' ? (
                <div className="w-9 h-9 rounded-full bg-[#d97706] flex items-center justify-center text-white shadow-lg shadow-amber-600/10">
                  ⚡
                </div>
              ) : (
                <img src={msg.avatar} alt={msg.sender} className="w-9 h-9 rounded-full object-cover border border-slate-700/60" />
              )}
            </div>

            {/* Bubble & Metadata context */}
            <div className="space-y-1.5">
              <div className="flex items-baseline gap-2 text-xs">
                <span className="font-bold text-slate-200">{msg.sender}</span>
                <span className="text-slate-500 font-mono text-[10px]">{msg.time}</span>
              </div>

              {/* Message Bubble container */}
              <div className={`text-sm leading-relaxed p-4 rounded-xl text-left shadow-md ${
                msg.isMe 
                  ? 'bg-[#2563eb] text-white rounded-tr-none' 
                  : 'bg-[#1e293b] text-slate-200 rounded-tl-none border border-slate-800/50'
              }`}>
                <p>{msg.content}</p>

                {/* Conditional rendering for shared documents */}
                {msg.isFile && (
                  <div className="mt-3 bg-[#0f172a] border border-slate-800 rounded-lg p-3 flex items-center justify-between gap-4 hover:border-slate-700 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-200 truncate group-hover:text-blue-400 transition-colors">
                          {msg.fileName}
                        </p>
                        <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                          {msg.fileSize}
                        </p>
                      </div>
                    </div>
                    <button className="text-slate-400 hover:text-white p-1">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Footer Input Composer */}
      <footer className="p-4 bg-[#09111e] flex flex-col gap-1.5 flex-shrink-0">
        <div className="w-full bg-[#111c30] border border-slate-800 rounded-xl px-4 py-3 flex items-center gap-3 focus-within:border-slate-700 transition-colors">
          <button className="text-slate-400 hover:text-slate-200 transition-colors"><Plus className="w-5 h-5" /></button>
          <button className="text-slate-400 hover:text-slate-200 transition-colors"><Smile className="w-5 h-5" /></button>
          
          <input 
            type="text" 
            placeholder="Message General Room..." 
            className="bg-transparent flex-1 text-sm text-white placeholder-slate-600 focus:outline-none"
          />
          
          <button className="text-slate-400 hover:text-slate-200 transition-colors"><AtSign className="w-5 h-5" /></button>
          <button className="bg-[#2563eb] hover:bg-blue-600 active:scale-95 text-white p-1.5 rounded-lg shadow transition-all duration-150">
            <Send className="w-4 h-4" />
          </button>
        </div>
        
        {/* Footer Meta Details */}
        <div className="flex items-center justify-between px-2 text-[10px] font-medium text-slate-600 font-mono uppercase tracking-wider">
          <span>Markdown is supported</span>
          <span className="normal-case text-slate-500">Alex is typing...</span>
        </div>
      </footer>

    </div>
  )
}

export default ChatMessage