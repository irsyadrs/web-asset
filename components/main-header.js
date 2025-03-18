"use client";
"use client";

import { useState } from "react";
import { MagnifyingGlassIcon, ChatBubbleOvalLeftIcon, BellIcon, UserIcon } from "@heroicons/react/24/outline";
import ProfileModal from "./ui/profile";

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 fixed w-[calc(100%-250px)] ml-[250px] z-50">
      <div className="max-w-screen-xl w-full mx-auto flex items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex items-center max-w-md w-full">
          <MagnifyingGlassIcon className="absolute left-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-100 border border-gray-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            <ChatBubbleOvalLeftIcon className="w-6 h-6" />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <BellIcon className="w-6 h-6" />
          </button>

          {/* User Icon - Open Profile Modal */}
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center relative"
          >
            <UserIcon className="w-6 h-6 text-gray-500" />
          </button>

          {/* Profile Modal */}
          <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
        </div>
      </div>
    </header>
  );
}
