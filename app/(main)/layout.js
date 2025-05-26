"use client";

// import { useState } from "react"; // useState tidak lagi dibutuhkan jika sidebar selalu terbuka
import Sidebar from "@/components/sidebar";
import Header from "@/components/main-header";

export default function MainLayout({ children }) {
  // Sidebar selalu terbuka, state tidak lagi dinamis untuk buka/tutup
  const isSidebarOpen = true; 

  return (
    <div className="flex h-screen w-full">
      {/* ✅ Sidebar selalu ada dan terbuka */}
      <Sidebar isOpen={isSidebarOpen} /> {/* setIsOpen tidak lagi diperlukan jika sidebar tak bisa ditutup */}

      {/* ✅ Main Content: tidak ada gap, margin kiri konsisten */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ml-64`} // Selalu ml-64 karena sidebar selalu ada
      >
        {/* setSidebarOpen tidak lagi diperlukan jika tombol menu mobile dihilangkan */}
        <Header /> 
        <main className="flex-1 p-4 pt-20 bg-gray-100 w-full">{children}</main>
      </div>

      {/* ✅ Overlay dihilangkan karena tidak ada mode mobile untuk sidebar */}
      {/* {isSidebarOpen && ( // Logika ini tidak lagi relevan jika sidebar selalu terbuka
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden" // md:hidden tidak relevan lagi
          onClick={() => setIsSidebarOpen(false)} // Tidak bisa ditutup
        />
      )} 
      */}
    </div>
  );
}