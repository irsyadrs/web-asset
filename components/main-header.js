// components/main-header.jsx (atau Header.jsx)

"use client";

import { useState } from "react";
import Link from "next/link"; // <-- 1. Import Link
import {
  ChatBubbleOvalLeftIcon,
  BellIcon,
  UserIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

export default function Header({ isSidebarCollapsed, toggleSidebar }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header
      className={`h-16 bg-white border-b border-gray-200 fixed top-0 z-30 transition-all duration-300 ease-in-out ${
        isSidebarCollapsed ? "left-20 w-[calc(100%-5rem)]" : "left-64 w-[calc(100%-16rem)]"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-full">
        <button
          className="lg:hidden text-gray-600 hover:text-gray-800"
          onClick={toggleSidebar}
        >
          <Bars3Icon className="w-6 h-6" />
        </button>

        <div className="flex-1 lg:ml-0">
          <div className="relative max-w-xs">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="w-full bg-gray-100 border-gray-200 rounded-md py-2 pl-10 pr-4 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
            <ChatBubbleOvalLeftIcon className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
            <BellIcon className="w-6 h-6" />
          </button>
          
          {/* 2. Bungkus tombol dengan Link */}
          <Link href="/profile">
            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 cursor-pointer">
              <UserIcon className="w-6 h-6 text-gray-500" />
            </div>
          </Link>

        </div>
      </div>
    </header>
  );
}