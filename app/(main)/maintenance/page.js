"use client";

import { useState, useMemo, useEffect } from "react";
import MaintenanceListView from "@/components/maintenance-components/MaintenanceListView";
import MaintenanceScheduleView from "@/components/maintenance-components/MaintenanceScheduleView";
import { PlusIcon } from "@heroicons/react/24/solid";
import Modal from "@/components/modal";
import NewMaintenanceForm from "@/components/maintenance-components/NewMaintenanceForm";

const initialMaintenanceData = [
  {
    id: "MNT-001",
    asset: "Laptop Dell XPS 13",
    assetId: "AST-056",
    issue: "Keyboard tidak berfungsi",
    reportDate: "2025-05-02",
    status: "Dalam Proses",
    assignedTo: "Budi Santoso",
  },
  {
    id: "MNT-002",
    asset: "Printer Epson L3110",
    assetId: "AST-078",
    issue: "Hasil cetakan buram",
    reportDate: "2025-05-09",
    status: "Selesai",
    assignedTo: "Siti Rahayu",
  },
  {
    id: "MNT-003",
    asset: "AC Panasonic 1.5PK",
    assetId: "AST-045",
    issue: "Tidak dingin",
    reportDate: "2025-05-12",
    status: "Menunggu Persetujuan",
    assignedTo: "Belum ditugaskan",
  },
  {
    id: "MNT-004",
    asset: "Kursi Kantor",
    assetId: "AST-120",
    issue: "Roda patah",
    reportDate: "2025-05-10",
    status: "Dalam Proses",
    assignedTo: "Agus Wijaya",
  },
  {
    id: "MNT-005",
    asset: "Proyektor InFocus",
    assetId: "AST-021",
    issue: "Lampu redup",
    reportDate: "2025-06-01",
    status: "Dalam Proses",
    assignedTo: "Budi Santoso",
  },
  {
    id: "MNT-006",
    asset: "Mesin Fotokopi Canon",
    assetId: "AST-033",
    issue: "Kertas sering macet",
    reportDate: "2025-06-03",
    status: "Selesai",
    assignedTo: "Siti Rahayu",
  },
];

const initialScheduleData = [
  {
    id: "SCH-001",
    asset: "AC Kantor Lantai 2",
    maintenanceType: "Pembersihan Filter",
    frequency: "Bulanan",
    nextDate: "2025-06-20",
    pic: "Rudi Hartono",
  },
  {
    id: "SCH-002",
    asset: "Server Room",
    maintenanceType: "Pemeliharaan UPS",
    frequency: "3 Bulan",
    nextDate: "2025-07-15",
    pic: "Tim IT",
  },
];

export default function MaintenancePage() {
  const [maintenanceData, setMaintenanceData] = useState(
    initialMaintenanceData
  );
  const [isNewRequestModalOpen, setIsNewRequestModalOpen] = useState(false);

  const [activeView, setActiveView] = useState("list");

  const handleNewRequestSubmit = (newRequest) => {
    const newData = {
      id: `MNT-00${maintenanceData.length + 1}`,
      asset: "Aset Baru (di-fetch dari ID)",
      status: "Menunggu Persetujuan",
      assignedTo: "Belum ditugaskan",
      ...newRequest,
    };
    setMaintenanceData((prev) => [newData, ...prev]);
    setIsNewRequestModalOpen(false);
  };

  const activeBtnStyle =
    "bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-md";
  const inactiveBtnStyle =
    "bg-transparent text-gray-600 font-medium px-4 py-2 rounded-md hover:bg-gray-100";

  return (
    <main className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-700 mb-2">
          Maintenance & Repairs
        </h1>
        {activeView === "list" && (
          <button
            onClick={() => setIsNewRequestModalOpen(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors"
          >
            <PlusIcon className="w-5 h-5" />
            Lapor Kerusakan
          </button>
        )}
      </div>

      <div className="flex items-center gap-2 mb-5 border-b pb-2">
        <button
          className={activeView === "list" ? activeBtnStyle : inactiveBtnStyle}
          onClick={() => setActiveView("list")}
        >
          Daftar Laporan
        </button>
        <button
          className={
            activeView === "schedule" ? activeBtnStyle : inactiveBtnStyle
          }
          onClick={() => setActiveView("schedule")}
        >
          Jadwal Rutin
        </button>
      </div>

      <div>
        {activeView === "list" && (
          <MaintenanceListView
            maintenanceData={maintenanceData}
            setMaintenanceData={setMaintenanceData}
          />
        )}
        {activeView === "schedule" && (
          <MaintenanceScheduleView initialData={initialScheduleData} />
        )}
      </div>

      <Modal
        isOpen={isNewRequestModalOpen}
        onClose={() => setIsNewRequestModalOpen(false)}
        title="Buat Laporan Pemeliharaan Baru"
      >
        <NewMaintenanceForm
          onSubmitForm={handleNewRequestSubmit}
          onCancel={() => setIsNewRequestModalOpen(false)}
        />
      </Modal>
    </main>
  );
}
