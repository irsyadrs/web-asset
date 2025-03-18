"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";
import Header from "@/components/main-header";

export default function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar terbuka di desktop

  return (
    <div className="flex h-screen w-full">
      {/* ✅ Sidebar tetap ada di desktop & bisa ditutup di mobile */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* ✅ Main Content: tidak ada gap di desktop */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "md:ml-64" : "ml-0"
        }`}
      >
        <Header setSidebarOpen={setIsSidebarOpen} />
        <main className="flex-1 p-4 pt-20 bg-gray-100 w-full">{children}</main>
      </div>

      {/* ✅ Overlay hanya muncul di mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
