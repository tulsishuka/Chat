import React from 'react'
import { MessageSquare, Users, Phone, Settings, MoreVertical } from 'lucide-react'

const Slider = () => {
  const menuItems = [
    { name: 'Chats', icon: MessageSquare, active: true },
    { name: 'Contacts', icon: Users, active: false },
    { name: 'Calls', icon: Phone, active: false },
    { name: 'Settings', icon: Settings, active: false },
  ]

  const onlineFriends = [
    {
      name: 'Jordan Smith',
      role: 'Product Design',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80',
    },
    {
      name: 'Sarah Chen',
      role: 'Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80',
    },
  ]

  return (
    <div className="w-64 h-screen bg-[#0f172a] text-slate-300 flex flex-col justify-between border-r border-slate-800 font-sans select-none">
      {/* Top Section */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {/* Title */}
        <h1 className="text-xl font-bold text-white mb-6 px-2 tracking-tight">
          Realtime Chat
        </h1>

        {/* Navigation Menu */}
        <nav className="space-y-1 mb-8">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.name}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150 ${
                  item.active
                    ? 'bg-[#2563eb] text-white'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                }`}
              >
                <Icon className={`w-5 h-5 ${item.active ? 'text-white' : 'text-slate-400'}`} />
                {item.name}
              </button>
            )
          })}
        </nav>

        {/* Divider line before section header */}
        <div className="border-t border-slate-800/60 my-4"></div>

        {/* Online Section Header */}
        <div className="text-[11px] font-mono tracking-widest text-slate-500 uppercase px-2 mb-4">
          ONLINE NOW – 12
        </div>

        {/* Online Members List */}
        <div className="space-y-4 px-1">
          {onlineFriends.map((friend) => (
            <div key={friend.name} className="flex items-center gap-3 group cursor-pointer">
              {/* Avatar with dynamic indicator */}
              <div className="relative flex-shrink-0">
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-700"
                />
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-[#38bdf8] ring-2 ring-[#0f172a]" />
              </div>

              {/* Identity metadata */}
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-slate-200 truncate group-hover:text-white transition-colors">
                  {friend.name}
                </h4>
                <p className="text-[10px] text-slate-500 truncate mt-0.5">
                  {friend.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User Profile Footer Section */}
      <div className="p-4 bg-[#0d1527] border-t border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&h=80&q=80"
            alt="Alex Rivera"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-slate-200 truncate leading-none mb-1">
              Alex Rivera
            </h4>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              <span className="text-[10px] text-[#38bdf8] font-medium">Online</span>
            </div>
          </div>
        </div>
        <button className="text-slate-500 hover:text-slate-300 p-1 rounded transition-colors">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default Slider