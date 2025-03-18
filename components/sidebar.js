"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  CubeIcon,
  TagIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  MapIcon,
  Cog6ToothIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar({ isOpen, setIsOpen }) {
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
      className={`fixed inset-y-0 left-0 w-64 bg-white text-gray-900 border-r border-gray-200 p-4 transition-transform lg:static ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      } lg:translate-x-0 z-50`}
    >
      {/* ✅ Tombol Close hanya muncul di mode Mobile */}
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 lg:hidden"
        onClick={() => setIsOpen(false)}
      >
        <XMarkIcon className="w-6 h-6" />
      </button>

      {/* ✅ Web App Tetap Terlihat */}
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
                onClick={() => setIsOpen(false)} // ✅ Tutup sidebar saat klik menu di mobile
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
