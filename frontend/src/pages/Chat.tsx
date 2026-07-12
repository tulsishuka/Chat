import React from 'react';
import { LogIn, Mail, Briefcase, MessageSquare } from 'lucide-react';

const Chat = () => {
  return (
    <div className="min-h-screen w-full bg-[#061026] bg-gradient-to-b from-[#0a1931] to-[#040b19] flex flex-col items-center justify-center p-4 font-sans text-white select-none">
      
      {/* Main Card Container */}
      <div className="w-full max-w-[440px] bg-[#0d1b33] border border-[#1a2d4c] rounded-2xl p-8 md:p-10 shadow-2xl flex flex-col items-center text-center">
        
        {/* App Logo/Icon */}
        <div className="w-14 h-14 bg-[#2563eb] rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 mb-6">
          <MessageSquare className="w-7 h-7 text-white fill-white/10" />
        </div>

        {/* Header Text */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
          Realtime Group Chat
        </h1>
        <p className="text-sm text-slate-400 max-w-[280px] leading-relaxed mb-8">
          Connect and chat instantly with your friends in a secure environment
        </p>

        {/* Join Form */}
        <form className="w-full text-left mb-6" onSubmit={(e) => e.preventDefault()}>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Username
          </label>
          <input 
            type="text" 
            placeholder="e.g. alex_rivera"
            className="w-full bg-[#172544] border border-[#22375f] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 mb-4"
          />
          
          <button 
            type="submit"
            className="w-full bg-[#2563eb] hover:bg-blue-600 active:scale-[0.99] text-white font-semibold text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-600/10 transition-all duration-200"
          >
            Join Chat
            <LogIn className="w-4 h-4" />
          </button>
        </form>

        {/* Divider */}
        <div className="w-full flex items-center justify-between my-2 mb-6">
          <div className="h-[1px] bg-slate-800 flex-1"></div>
          <span className="text-[10px] font-mono tracking-widest text-slate-500 mx-3 uppercase">
            or sign in with
          </span>
          <div className="h-[1px] bg-slate-800 flex-1"></div>
        </div>

        {/* OAuth Buttons */}
        <div className="w-full grid grid-cols-2 gap-3 mb-8">
          <button className="flex items-center justify-center gap-2 bg-transparent border border-[#1d2e4d] hover:bg-[#14233c] text-xs font-semibold py-2.5 px-4 rounded-lg text-slate-300 transition-colors duration-200">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            Google
          </button>
          <button className="flex items-center justify-center gap-2 bg-transparent border border-[#1d2e4d] hover:bg-[#14233c] text-xs font-semibold py-2.5 px-4 rounded-lg text-slate-300 transition-colors duration-200">
            <Briefcase className="w-3.5 h-3.5 text-slate-400" />
            SSO
          </button>
        </div>

        {/* Online Status Pill */}
        <div className="inline-flex items-center gap-2 bg-[#091428] border border-[#162744] rounded-full py-1.5 px-4 text-xs font-medium text-blue-400 shadow-inner">
          {/* Avatar Stack Group */}
          <div className="flex -space-x-1.5">
            <img className="w-5 h-5 rounded-full object-cover ring-2 ring-[#091428]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=40&h=40&q=80" alt="User 1" />
            <img className="w-5 h-5 rounded-full object-cover ring-2 ring-[#091428]" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=40&h=40&q=80" alt="User 2" />
            <div className="w-5 h-5 rounded-full bg-blue-600 ring-2 ring-[#091428] flex items-center justify-center text-[8px] font-bold text-white">
              +12
            </div>
          </div>
          <span>14 friends currently online</span>
        </div>

      </div>

      {/* Footer Navigation */}
      <div className="w-full max-w-[440px] flex items-center justify-between mt-6 px-2 text-xs font-mono text-slate-500">
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
        </div>
        <span>v2.4.0</span>
      </div>

    </div>
  );
};

export default Chat;