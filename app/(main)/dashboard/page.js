"use client";

import { BriefcaseIcon, ChartBarIcon, CogIcon } from "@heroicons/react/24/outline";
import TotalAssetCard from "@/components/dashboard-components/total-asset-card";

const features = [
  { title: "Inventory", description: "Kelola stok barang dengan mudah", icon: BriefcaseIcon, href: "/inventory" },
  { title: "Analytics", description: "Lihat laporan dan statistik", icon: ChartBarIcon, href: "/analytics" },
  { title: "Settings", description: "Atur preferensi dan konfigurasi", icon: CogIcon, href: "/settings" },
];

export default function DashboardPage() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold mb-6">Dashboard</h1>

      {/* Card Total Asset */}
      <div className="mb-6 flex justify-start">
        <TotalAssetCard />
      </div>

      {/* Grid untuk fitur lainnya */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <a
            key={index}
            href={feature.href}
            className="p-8 bg-white hover:bg-gray-200 rounded-xl shadow-lg flex items-center space-x-6 transition transform hover:scale-105"
          >
            <feature.icon className="w-16 h-16 text-blue-500" />
            <div>
              <h2 className="text-2xl font-semibold">{feature.title}</h2>
              <p className="text-lg text-gray-600">{feature.description}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
