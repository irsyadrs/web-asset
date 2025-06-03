// components/Sidebar.jsx

"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import {
  HomeIcon, CubeIcon, TagIcon, TruckIcon, WrenchScrewdriverIcon, MapIcon,
  Cog6ToothIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar({ isCollapsed, toggleSidebar }) { 
  const pathname = usePathname();

  const menuItems = [
    { href: "/dashboard", label: "Dashboard", icon: <HomeIcon className="w-6 h-6" /> },
    { href: "/inventory", label: "Inventory", icon: <CubeIcon className="w-6 h-6" /> },
    { href: "/categories", label: "Categories", icon: <TagIcon className="w-6 h-6" /> },
    { href: "/acquisition", label: "Acquisition", icon: <TruckIcon className="w-6 h-6" /> },
    { href: "/maintenance", label: "Maintenance & Repairs", icon: <WrenchScrewdriverIcon className="w-6 h-6" /> },
    { href: "/tracking", label: "Tracking", icon: <MapIcon className="w-6 h-6" /> },
    { href: "/settings", label: "Settings", icon: <Cog6ToothIcon className="w-6 h-6" /> },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 bg-white text-gray-900 border-r border-gray-200 z-40 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-64'
      }`} 
    >
      <div className="flex flex-col h-full">
        <div className={`px-4 py-6 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
            <Link href="/dashboard" className={`text-xl font-bold text-gray-800 ${isCollapsed ? 'hidden' : 'block'}`}>
                Web App
            </Link>
            <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
                {isCollapsed ? <ChevronDoubleRightIcon className="w-6 h-6 text-gray-600" /> : <ChevronDoubleLeftIcon className="w-6 h-6 text-gray-600" />}
            </button>
        </div>

        <nav className="flex-grow px-2">
          <ul className="space-y-2">
            {menuItems.map(({ href, label, icon }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center gap-4 p-3 rounded-lg transition duration-150 relative group ${
                      isActive 
                        ? 'bg-blue-100 text-blue-700 font-semibold shadow-sm' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    } ${isCollapsed ? 'justify-center' : ''}`}
                  >
                    <span className={`${isActive ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-700'}`}>
                        {icon}
                    </span>
                    <span className={`text-sm ${isCollapsed ? 'hidden' : 'block'}`}>{label}</span>
                    {isCollapsed && (
                        <div className="absolute left-full ml-3 px-3 py-1.5 bg-gray-800 text-white text-xs font-medium rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                            {label}
                        </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* Bagian Profil telah dihilangkan sesuai permintaan sebelumnya */}
      </div>
    </aside>
  );
}