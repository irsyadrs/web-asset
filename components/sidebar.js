"use client";

// import { useState } from "react"; // Tidak dibutuhkan di sini
import Link from "next/link";
import {
  HomeIcon,
  CubeIcon,
  TagIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  MapIcon,
  Cog6ToothIcon,
  // XMarkIcon, // Dihilangkan karena tidak ada tombol close
} from "@heroicons/react/24/outline";

// setIsOpen tidak lagi diperlukan sebagai prop
export default function Sidebar({ isOpen }) { 
  const menuItems = [
    { href: "/dashboard", label: "Dashboard", icon: <HomeIcon className="w-5 h-5" /> },
    { href: "/inventory", label: "Inventory", icon: <CubeIcon className="w-5 h-5" /> },
    { href: "/categories", label: "Categories", icon: <TagIcon className="w-5 h-5" /> },
    { href: "/acquisition", label: "Acquisition", icon: <TruckIcon className="w-5 h-5" /> },
    { href: "/maintenance", label: "Maintenance & Repairs", icon: <WrenchScrewdriverIcon className="w-5 h-5" /> },
    { href: "/tracking", label: "Tracking", icon: <MapIcon className="w-5 h-5" /> },
    { href: "/settings", label: "Settings", icon: <Cog6ToothIcon className="w-5 h-5" /> },
  ];

  return (
    <aside
      // Kelas transisi dan posisi responsif dihilangkan, sidebar selalu fixed dan terlihat
      className={`fixed inset-y-0 left-0 w-64 bg-white text-gray-900 border-r border-gray-200 p-4 z-40`} 
      // isOpen tidak lagi mengontrol translate-x, jadi kelas dinamisnya dihilangkan
      // lg:static dan lg:translate-x-0 juga dihilangkan
    >
      {/* ✅ Tombol Close Dihilangkan */}
      {/* <button
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 lg:hidden"
        onClick={() => setIsOpen(false)}
      >
        <XMarkIcon className="w-6 h-6" />
      </button> 
      */}

      <Link href="/dashboard" className="block px-3 mb-6 text-lg font-bold text-gray-700">
        Web App
      </Link>

      <nav>
        <ul className="space-y-1">
          {menuItems.map(({ href, label, icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-150"
                // onClick={() => setIsOpen(false)} // Dihilangkan karena sidebar tidak bisa ditutup
              >
                {icon}
                <span className="text-sm">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}