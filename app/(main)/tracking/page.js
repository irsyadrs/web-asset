"use client";

import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import TrackingListView from "@/components/tracking-components/TrackingListView";
import TrackingAnalyticsView from "@/components/tracking-components/TrackingAnalyticsView";
import AddItemModal from "@/components/tracking-components/AddItemModal";

const initialTrackingData = [
  {
    id: "TRK-001",
    type: "Barang",
    title: "Kamera Sony FX6",
    description: "Kamera profesional untuk produksi video",
    status: "Dalam Perjalanan",
    startDate: "2025-05-20",
    estimatedDate: "2025-05-25",
    currentLocation: "Warehouse",
    destination: "Studio Live",
    assignedTo: "Tim Logistik",
    progress: 60,
  },
  {
    id: "TRK-002",
    type: "Barang",
    title: "Laptop MacBook Pro M3",
    description: "15 unit laptop untuk tim editing",
    status: "Di Lokasi",
    startDate: "2025-05-01",
    estimatedDate: "2025-05-02",
    currentLocation: "Studio Live",
    destination: "Studio Live",
    assignedTo: "Departemen IT",
    progress: 100,
  },
  {
    id: "TRK-003",
    type: "Barang",
    title: "Peralatan Audio Rode",
    description: "Microphone dan mixer audio",
    status: "Menunggu Pengiriman",
    startDate: "2025-05-15",
    estimatedDate: "2025-05-30",
    currentLocation: "Head Office",
    destination: "Studio Live",
    assignedTo: "Tim Audio",
    progress: 25,
  },
  {
    id: "TRK-004",
    type: "Barang",
    title: "Monitor LG UltraWide",
    description: "10 unit monitor 34 inch untuk workstation",
    status: "Terkirim",
    startDate: "2025-05-22",
    estimatedDate: "2025-05-24",
    currentLocation: "Head Office",
    destination: "Head Office",
    assignedTo: "Vendor Electronics",
    progress: 100,
  },
  {
    id: "TRK-005",
    type: "Barang",
    title: "Lighting Equipment Godox",
    description: "Set lampu studio untuk fotografi",
    status: "Dalam Perjalanan",
    startDate: "2025-05-10",
    estimatedDate: "2025-05-28",
    currentLocation: "Warehouse",
    destination: "Studio Live",
    assignedTo: "Tim Produksi",
    progress: 75,
  },
  {
    id: "TRK-006",
    type: "Barang",
    title: "Server Dell PowerEdge",
    description: "Server untuk backup dan storage",
    status: "Di Lokasi",
    startDate: "2025-05-18",
    estimatedDate: "2025-05-20",
    currentLocation: "Head Office",
    destination: "Head Office",
    assignedTo: "Tim IT",
    progress: 100,
  },
  {
    id: "TRK-007",
    type: "Barang",
    title: "Furniture Studio",
    description: "Meja, kursi, dan rak peralatan",
    status: "Menunggu Persetujuan",
    startDate: "2025-05-12",
    estimatedDate: "2025-06-01",
    currentLocation: "Warehouse",
    destination: "Studio Live",
    assignedTo: "Tim Fasilitas",
    progress: 30,
  },
];
const timelineData = {
  "TRK-001": [
    {
      date: "2025-05-20",
      time: "08:00",
      status: "Barang diterima di warehouse",
      location: "Warehouse",
    },
    {
      date: "2025-05-20",
      time: "14:30",
      status: "Persiapan pengiriman ke studio",
      location: "Warehouse",
    },
    {
      date: "2025-05-21",
      time: "09:15",
      status: "Dalam perjalanan ke Studio Live",
      location: "In Transit",
    },
    {
      date: "2025-05-22",
      time: "07:00",
      status: "Estimasi tiba hari ini",
      location: "Studio Live",
    },
  ],
  "TRK-002": [
    {
      date: "2025-05-01",
      time: "09:00",
      status: "Barang tiba di Head Office",
      location: "Head Office",
    },
    {
      date: "2025-05-01",
      time: "11:00",
      status: "Quality check selesai",
      location: "Head Office",
    },
    {
      date: "2025-05-01",
      time: "14:30",
      status: "Pengiriman ke Studio Live",
      location: "In Transit",
    },
    {
      date: "2025-05-02",
      time: "10:00",
      status: "Diterima dan siap digunakan",
      location: "Studio Live",
    },
  ],
  "TRK-003": [
    {
      date: "2025-05-15",
      time: "10:00",
      status: "Purchase order disetujui",
      location: "Head Office",
    },
    {
      date: "2025-05-18",
      time: "14:00",
      status: "Barang tiba di Head Office",
      location: "Head Office",
    },
    {
      date: "2025-05-20",
      time: "09:00",
      status: "Menunggu jadwal pengiriman",
      location: "Head Office",
    },
  ],
  "TRK-005": [
    {
      date: "2025-05-10",
      time: "08:00",
      status: "Barang masuk warehouse",
      location: "Warehouse",
    },
    {
      date: "2025-05-12",
      time: "10:30",
      status: "Inspection dan packaging",
      location: "Warehouse",
    },
    {
      date: "2025-05-24",
      time: "14:00",
      status: "Dalam perjalanan ke Studio Live",
      location: "In Transit",
    },
  ],
};

export default function TrackingPage() {
  const [activeView, setActiveView] = useState("list");
  const [trackingData, setTrackingData] = useState(initialTrackingData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddItem = (newItem) => {
    const newData = {
      id: `TRK-00${trackingData.length + 1}`,
      status: "Menunggu Pengiriman",
      progress: 10,
      ...newItem,
    };
    setTrackingData((prev) => [newData, ...prev]);
    setIsModalOpen(false);
  };

  const activeBtnStyle =
    "bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-md";
  const inactiveBtnStyle =
    "bg-transparent text-gray-600 font-medium px-4 py-2 rounded-md hover:bg-gray-100";

  return (
    <main className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-700 mb-2">Tracking</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          <PlusIcon className="w-5 h-5" />
          Tambah Item
        </button>
      </div>

      <div className="flex items-center gap-2 mb-5 border-b pb-2">
        <button
          className={activeView === "list" ? activeBtnStyle : inactiveBtnStyle}
          onClick={() => setActiveView("list")}
        >
          Daftar Tracking
        </button>
        <button
          className={
            activeView === "analytics" ? activeBtnStyle : inactiveBtnStyle
          }
          onClick={() => setActiveView("analytics")}
        >
          Analitik
        </button>
      </div>

      <div>
        {activeView === "list" && (
          <TrackingListView
            initialData={trackingData}
            timelineData={timelineData}
          />
        )}
        {activeView === "analytics" && (
          <TrackingAnalyticsView trackingData={trackingData} />
        )}
      </div>

      <AddItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddItem}
      />
    </main>
  );
}
