"use client";


import Link from 'next/link';
import { HomeIcon, CubeIcon, TagIcon, TruckIcon, WrenchScrewdriverIcon, MapIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: <HomeIcon className="w-5 h-5" /> },
    { href: '/inventory', label: 'Inventory', icon: <CubeIcon className="w-5 h-5" /> },
    { href: '/categories', label: 'Categories', icon: <TagIcon className="w-5 h-5" /> },
    { href: '/acquisition', label: 'Acquisition', icon: <TruckIcon className="w-5 h-5" /> },
    { href: '/maintenance', label: 'Maintenance & Repairs', icon: <WrenchScrewdriverIcon className="w-5 h-5" /> },
    { href: '/tracking', label: 'Tracking', icon: <MapIcon className="w-5 h-5" /> },
    { href: '/settings', label: 'Settings', icon: <Cog6ToothIcon className="w-5 h-5" /> },
  ];

  return (
    <aside className="w-64 h-screen bg-white text-gray-900 border-r border-gray-200 p-4">
      <h2 className="text-lg font-bold px-3 mb-4 text-gray-700">Web App</h2>
      <nav>
        <ul className="space-y-1">
          {menuItems.map(({ href, label, icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-150"
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
