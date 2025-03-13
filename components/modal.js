"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 z-50">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-bold">{title}</h2>
          <button onClick={onClose}>
            <XMarkIcon className="w-6 h-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
}
