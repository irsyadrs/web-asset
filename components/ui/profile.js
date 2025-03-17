"use client";

import { useEffect, useRef } from "react";
import { X, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";

export default function ProfileModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div 
        ref={modalRef}
        className="absolute top-14 right-4 w-72 bg-white rounded-lg shadow-lg p-4"
      >
        {/* Tombol Close */}
        <button onClick={onClose} className="absolute right-2 top-2 text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>

        {/* Profil */}
        <div className="flex flex-col items-center pt-6 pb-4">
          <div className="w-16 h-16 rounded-full bg-sky-200 overflow-hidden mb-3">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Profile picture"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Clark Kent</h2>
          <p className="text-xs text-gray-500">Superhero | Journalist</p>

          {/* Tombol Actions */}
          <div className="flex gap-2 mt-3">
            <button className="bg-red-500 text-white px-4 py-1.5 rounded-md text-sm font-medium">Invite</button>
            <button className="border border-gray-300 text-gray-700 px-4 py-1.5 rounded-md text-sm font-medium">
              Message
            </button>
          </div>
        </div>

        {/* Informasi */}
        <div className="border-t border-gray-100 px-4 py-3">
          <p className="text-xs text-gray-500 uppercase mb-1">BIO</p>
          <p className="text-sm text-gray-700">
            Earth greatest hero. Hailing from Krypton, Clark was raised in Smallville, Kansas.
          </p>
          
          <p className="text-xs text-gray-500 uppercase mt-3 mb-1">LOCATION</p>
          <p className="text-sm text-gray-700">New York City, NY</p>

          <p className="text-xs text-gray-500 uppercase mt-3 mb-1">URL</p>
          <p className="text-sm text-gray-700">manofsteel.com</p>

          {/* Social Media */}
          <div className="flex gap-2 mt-4">
            <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
