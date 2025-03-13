'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon, ChatBubbleOvalLeftIcon, BellIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 fixed w-[calc(100%-250px)] z-0 ml-[250px]">
      <div className="max-w-screen-xl w-full mx-auto flex items-center justify-between">
        <div className="relative flex items-center max-w-md w-full">
          <MagnifyingGlassIcon className="absolute left-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-full bg-gray-100 border border-gray-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-500">
            <ChatBubbleOvalLeftIcon className="w-6 h-6" />
          </button>
          <button className="text-gray-500">
            <BellIcon className="w-6 h-6" />
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <UserIcon className="w-6 h-6 text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
}
