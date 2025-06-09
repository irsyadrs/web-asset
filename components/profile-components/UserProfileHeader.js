"use client";

import Image from "next/image";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function UserProfileHeader({ user }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
      <div className="relative">
        <Image
          src={user.avatarUrl || "/avatar.png"}
          alt="User Avatar"
          width={96}
          height={96}
          className="rounded-full ring-4 ring-blue-100"
        />
      </div>
      <div className="flex-grow text-center sm:text-left">
        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-md text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block mt-1">
          {user.role}
        </p>
      </div>
      <button className="flex-shrink-0 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2">
        <PencilSquareIcon className="w-5 h-5" />
        <span>Ubah Profil</span>
      </button>
    </div>
  );
}
