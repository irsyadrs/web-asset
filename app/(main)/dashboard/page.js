"use client";

import React from 'react'; // Impor React untuk kejelasan
import { 
  // Ikon yang dibutuhkan untuk widget dan shortcut
  ChartPieIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  ArrowRightIcon,
  BellAlertIcon,
  WrenchScrewdriverIcon,
  TagIcon,
  PlusCircleIcon,
  Cog6ToothIcon
} from "@heroicons/react/24/outline";

// ====================================================================
// DATA MOCKUP
// ====================================================================
const dashboardData = {
  totalAssets: 145,
  assetValue: 1250000000,
  attentionItems: [
    { id: 1, text: "Laptop #78A9 an. Budi Susanto sudah melewati batas waktu pinjam.", type: "warning" },
    { id: 2, text: "Garansi Proyektor #PJK04 akan habis dalam 15 hari.", type: "warning" },
    { id: 3, text: "Stok 'Tinta Printer Hitam' di bawah ambang batas minimum.", type: "danger" },
    { id: 4, text: "Perawatan rutin untuk Mobil #B1234XYZ dijadwalkan besok.", type: "info" },
  ],
  assetStatus: { tersedia: 80, digunakan: 45, perbaikan: 15, rusak: 5 },
  settings: { status: "ok", message: "Sistem berjalan normal." },
  maintenanceCount: 15 + 5,
  categoryCount: 8,
  newAcquisitionsThisMonth: 7,
};


// ====================================================================
// KOMPONEN-KOMPONEN WIDGET
// ====================================================================

function TotalAssetCard({ count, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col justify-between">
      <div>
        <p className="text-gray-500 text-lg">Total Asset</p>
        <p className="text-5xl font-bold my-2">{count}</p>
        <p className="text-gray-700 font-semibold">
          Estimasi Nilai: {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value)}
        </p>
      </div>
      <a href="/inventory" className="text-blue-500 hover:text-blue-700 font-semibold mt-4 inline-flex items-center">
        Kelola lebih lanjut <ArrowRightIcon className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
}

function NeedsAttentionWidget({ items }) {
  const getIcon = (type) => {
    switch (type) {
      case 'danger': return <ExclamationTriangleIcon className="w-5 h-5 text-red-500" />;
      case 'warning': return <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500" />;
      default: return <ClockIcon className="w-5 h-5 text-blue-500" />;
    }
  };
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg h-full">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <ExclamationTriangleIcon className="w-6 h-6 mr-3 text-yellow-500" />
        Perlu Perhatian
      </h2>
      <div className="space-y-3">
        {items.map(item => (
          <div key={item.id} className="flex items-start space-x-3 text-gray-700">
            <span className="mt-1">{getIcon(item.type)}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DataShortcutCard({ title, value, unit, icon: Icon, href, iconColor }) {
    return (
        <a href={href} className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4 hover:bg-gray-50 transition transform hover:scale-105">
            <div className={`flex-shrink-0 p-3 rounded-full text-white ${iconColor || 'bg-blue-500'}`}>
                <Icon className="w-7 h-7" />
            </div>
            <div>
                <p className="text-lg font-semibold text-gray-800">{title}</p>
                <p className="text-2xl font-bold text-gray-900">
                    {value} <span className="text-base font-normal text-gray-500">{unit}</span>
                </p>
            </div>
        </a>
    )
}

// ====================================================================
// KOMPONEN BANNER DASHBOARD (KEMBALI KE TEMA PROFESIONAL)
// ====================================================================
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 11) return "Selamat Pagi";
  if (hour < 15) return "Selamat Siang";
  if (hour < 19) return "Selamat Sore";
  return "Selamat Malam";
};

function DashboardBanner({ 
  backgroundImageUrl, 
  title, 
  subtitle, 
  greeting, 
  userName,
  overlayColor = 'bg-black/40'
}) {
  const bannerStyle = {
    backgroundImage: `url('${backgroundImageUrl}')`
  };

  return (
    <div 
      className="relative w-full h-48 sm:h-56 bg-cover bg-center rounded-xl shadow-lg text-white overflow-hidden"
      style={bannerStyle}
    >
      <div className={`absolute inset-0 w-full h-full ${overlayColor}`}></div>
      <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider">{title}</h2>
          <p className="text-base sm:text-lg opacity-90">{subtitle}</p>
        </div>
        <div className="text-right self-end">
          <p className="text-lg sm:text-xl font-semibold">{greeting}, {userName}!</p>
          <p className="text-xs sm:text-sm opacity-80">{new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
}


// ====================================================================
// KOMPONEN UTAMA HALAMAN DASHBOARD
// ====================================================================
export default function DashboardPage() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <DashboardBanner 
          // --- PERUBAHAN DI SINI ---
          // Properti untuk Tema 1: Profesional & Korporat
          backgroundImageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop"
          title="PT. SOLOMON INDO GLOBAL"
          subtitle="Asset Management Dashboard"
          greeting={getGreeting()}
          userName="Administrator"
          overlayColor="bg-slate-800/60" // Overlay gelap untuk kesan korporat
        />
      </div>

      {/* Baris 1: Widget Utama */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-1">
          <TotalAssetCard count={dashboardData.totalAssets} value={dashboardData.assetValue} />
        </div>
        <div className="lg:col-span-2">
          <NeedsAttentionWidget items={dashboardData.attentionItems} />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Akses Cepat</h2>
      
      {/* Baris 2: Kumpulan Shortcut */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DataShortcutCard 
          title="Perlu Servis"
          value={dashboardData.maintenanceCount}
          unit="Aset"
          icon={WrenchScrewdriverIcon}
          href="/maintenance"
          iconColor="bg-yellow-500"
        />
        <DataShortcutCard 
          title="Akuisisi Baru"
          value={dashboardData.newAcquisitionsThisMonth}
          unit="Bulan Ini"
          icon={PlusCircleIcon}
          href="/acquisitions"
          iconColor="bg-green-500"
        />
        <DataShortcutCard 
          title="Kategori Aset"
          value={dashboardData.categoryCount}
          unit="Total"
          icon={TagIcon}
          href="/categories"
          iconColor="bg-purple-500"
        />
        <DataShortcutCard 
          title="Pengaturan"
          value="Sistem"
          unit={dashboardData.settings.status === 'ok' ? 'Normal' : 'Cek Notif'}
          icon={Cog6ToothIcon}
          href="/settings"
          iconColor="bg-slate-500"
        />
      </div>
    </main>
  );
}