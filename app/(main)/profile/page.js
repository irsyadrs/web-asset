// /app/profile/page.js
"use client";

import UserProfileHeader from "@/components/profile-components/UserProfileHeader";
import UserDetails from "@/components/profile-components/UserDetails";
import AccountSecurity from "@/components/profile-components/AccountSecurity";
import RecentActivity from "@/components/profile-components/RecentActivity";

// Data dummy untuk simulasi
const userData = {
  name: "Admin Utama",
  role: "Administrator",
  email: "admin.utama@solomon-global.co.id",
  phone: "0812-3456-7890",
  team: "IT & Operations",
  location: "Kantor Pusat - Jakarta",
  avatarUrl: "/avatar.png", // Ganti dengan path ke gambar avatar default
  lastLogin: {
    timestamp: "4 Juni 2025, 20:15 WIB",
    ip: "103.45.67.89",
  },
  twoFactorEnabled: true,
};

const activityData = [
  { id: 1, description: "Berhasil masuk ke sistem.", time: "1 jam yang lalu", icon: "login" },
  { id: 2, description: "Menambahkan aset baru: Laptop Dell XPS 15.", time: "3 jam yang lalu", icon: "add" },
  { id: 3, description: "Memperbarui status perawatan untuk Mobil #B1234XYZ.", time: "Kemarin", icon: "update" },
  { id: 4, description: "Menghasilkan laporan aset bulanan.", time: "Kemarin", icon: "report" },
  { id: 5, description: "Mengubah kata sandi.", time: "2 hari yang lalu", icon: "password" },
];


export default function ProfilePage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold text-gray-700 mb-2">User Profile</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kolom Kiri */}
        <div className="lg:col-span-2 space-y-6">
          <UserProfileHeader user={userData} />
          <UserDetails user={userData} />
        </div>
        
        {/* Kolom Kanan */}
        <div className="lg:col-span-1 space-y-6">
          <AccountSecurity user={userData} />
          <RecentActivity activities={activityData} />
        </div>
      </div>
    </div>
  );
}