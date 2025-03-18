"use client";

import { useState } from "react";
import {
  Bars3Icon,
  ChatBubbleOvalLeftIcon,
  BellIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function Header({ setSidebarOpen }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50 lg:w-[calc(100%-16rem)] lg:left-64">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-full">
        
        {/* ✅ Tombol Menu untuk Mobile */}
        <button className="lg:hidden text-gray-600 hover:text-gray-800" onClick={() => setSidebarOpen(true)}>
          <Bars3Icon className="w-6 h-6" />
        </button>

        {/* ✅ Pencarian (Hanya Tampil di Desktop) */}
        <div className="relative flex-1 max-w-md hidden sm:block">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 pl-10 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Ikon lebih presisi di tengah input */}
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* ✅ Icons (Chat, Notification, Profile) */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            <ChatBubbleOvalLeftIcon className="w-6 h-6" />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <BellIcon className="w-6 h-6" />
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
            <UserIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}
