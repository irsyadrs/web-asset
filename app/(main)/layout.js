"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar"; // Sesuaikan path jika perlu
import Header from "@/components/main-header"; // Sesuaikan path jika perlu

export default function MainLayout({ children }) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen w-full bg-gray-100">
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        toggleSidebar={toggleSidebar} 
      />

      {/* Kontainer untuk Header dan Konten Utama */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? 'ml-20' : 'ml-64' // Margin kiri DINAMIS
        }`}
      >
        <Header 
          isSidebarCollapsed={isSidebarCollapsed} 
          toggleSidebar={toggleSidebar} // Untuk tombol menu mobile di header jika ada
        />
        
        {/* Konten utama halaman */}
        {/* pt-16 jika header h-16, atau pt-20 jika header h-20 */}
        <main className="flex-1 p-4 pt-16 w-full overflow-y-auto"> 
          {children}
        </main>
      </div>
    </div>
  );
}