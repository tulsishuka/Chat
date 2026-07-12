import React from 'react'
import ChatMessage from '../components/ChatMessage'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden bg-[#09111e]">
      {/* Sidebar Navigation (Left side) */}
      <Slider />
      
      {/* Main Chat Feed Area (Right side - takes up all remaining width) */}
      <div className="flex-1 min-w-0 h-full flex flex-col">
        <ChatMessage />
      </div>
    </div>
  )
}

export default Home