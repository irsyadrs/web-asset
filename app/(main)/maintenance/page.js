// components/maintenance-components/maintenance-table.js
"use client";
import { useState } from "react";
import AddScheduleModal from "@/components/maintenance-components/add-scedule"; // Pastikan nama file 'add-scedule.js' sudah benar, mungkin maksudnya 'add-schedule.js'?

// Import ikon yang akan digunakan
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

// Dummy data for maintenance and repair entries
const dummyData = [
  {
    id: "MNT-001",
    asset: "Laptop Dell XPS 13",
    assetId: "AST-056",
    issue: "Keyboard tidak berfungsi",
    reportDate: "2025-05-02",
    status: "Dalam Proses",
    assignedTo: "Budi Santoso"
  },
  {
    id: "MNT-002",
    asset: "Printer Epson L3110",
    assetId: "AST-078",
    issue: "Hasil cetakan buram",
    reportDate: "2025-05-09",
    status: "Selesai",
    assignedTo: "Siti Rahayu"
  },
  {
    id: "MNT-003",
    asset: "AC Panasonic 1.5PK",
    assetId: "AST-045",
    issue: "Tidak dingin",
    reportDate: "2025-05-12",
    status: "Menunggu Persetujuan",
    assignedTo: "Belum ditugaskan"
  },
  {
    id: "MNT-004",
    asset: "Kursi Kantor",
    assetId: "AST-120",
    issue: "Roda patah",
    reportDate: "2025-05-10",
    status: "Jadwal Perbaikan",
    assignedTo: "Agus Wijaya"
  }
];

// Dummy data for schedule (can be managed with state and updated)
let dummyScheduleData = [
  {
    id: "SCH-001",
    asset: "AC Kantor Lantai 2",
    maintenanceType: "Pembersihan Filter",
    frequency: "Bulanan",
    nextDate: "2025-05-20",
    pic: "Rudi Hartono"
  },
  {
    id: "SCH-002",
    asset: "Server Room",
    maintenanceType: "Pemeliharaan UPS",
    frequency: "3 Bulan",
    nextDate: "2025-07-15",
    pic: "Tim IT"
  },
  // ... more initial schedule data
];


function MaintenanceTable() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("list");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isAddScheduleModalOpen, setIsAddScheduleModalOpen] = useState(false);
  const [scheduleData, setScheduleData] = useState(dummyScheduleData);


  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  
  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };
  
  const filteredData = dummyData.filter((item) => {
    const matchesSearch = 
      item.asset.toLowerCase().includes(search.toLowerCase()) ||
      item.issue.toLowerCase().includes(search.toLowerCase()) ||
      item.assetId.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = 
      statusFilter === "all" || 
      item.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesStatus;
  });

  const handleOpenAddScheduleModal = () => {
    setIsAddScheduleModalOpen(true);
  };

  const handleCloseAddScheduleModal = () => {
    setIsAddScheduleModalOpen(false);
  };

  const handleSaveSchedule = (newSchedule) => {
    console.log("Saving new schedule:", newSchedule);
    setScheduleData(prevSchedules => [
        ...prevSchedules, 
        {id: `SCH-00${prevSchedules.length + 3}`, ...newSchedule} 
    ]);
    setIsAddScheduleModalOpen(false); 
  };

  // Placeholder untuk fungsi edit dan hapus dari daftar pemeliharaan
  const handleEditMaintenanceEntry = (entryId) => {
    console.log("Edit maintenance entry:", entryId);
    // Logika untuk membuka modal edit atau navigasi ke halaman edit
  };

  const handleDeleteMaintenanceEntry = (entryId) => {
    console.log("Delete maintenance entry:", entryId);
    // Logika untuk menghapus entri (misalnya, dengan konfirmasi)
    // setFilteredData(prevData => prevData.filter(item => item.id !== entryId)); // Contoh jika 'dummyData' adalah state
    alert(`Fungsi hapus untuk ${entryId} belum diimplementasikan sepenuhnya.`);
  };


  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-gray-700 mb-2">Maintenance & Repairs</h1>
      
      {/* Custom Tabs */}
      <div className="mb-4">
        <div className="flex border-b">
          <button 
            className={`px-4 py-2 ${activeTab === 'list' ? 'border-b-2 border-blue-500 font-medium' : ''}`}
            onClick={() => setActiveTab('list')}
          >
            Daftar Pemeliharaan
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'new' ? 'border-b-2 border-blue-500 font-medium' : ''}`}
            onClick={() => setActiveTab('new')}
          >
            Tambah Pemeliharaan
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'schedule' ? 'border-b-2 border-blue-500 font-medium' : ''}`}
            onClick={() => setActiveTab('schedule')}
          >
            Jadwal Pemeliharaan
          </button>
        </div>
      </div>
      
      {/* List Tab Content */}
      {activeTab === 'list' && (
        <div>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="Cari berdasarkan nama aset, ID, atau masalah..."
              className="w-full md:w-2/3 p-2 border rounded"
              value={search}
              onChange={handleSearchChange}
            />
            
            <select 
              className="w-full md:w-1/3 p-2 border rounded"
              value={statusFilter}
              onChange={handleStatusFilterChange}
            >
              <option value="all">Semua Status</option>
              <option value="dalam proses">Dalam Proses</option>
              <option value="selesai">Selesai</option>
              <option value="menunggu persetujuan">Menunggu Persetujuan</option>
              <option value="jadwal perbaikan">Jadwal Perbaikan</option>
            </select>
          </div>
          
          <div className="border rounded overflow-x-auto shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aset</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Aset</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Masalah</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal Laporan</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ditugaskan Kepada</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.length > 0 ? (
                  filteredData.map((entry) => (
                    <tr key={entry.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.asset}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.assetId}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.issue}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.reportDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${entry.status === 'Selesai' ? 'bg-green-100 text-green-800' : ''}
                          ${entry.status === 'Dalam Proses' ? 'bg-blue-100 text-blue-800' : ''}
                          ${entry.status === 'Menunggu Persetujuan' ? 'bg-yellow-100 text-yellow-800' : ''}
                          ${entry.status === 'Jadwal Perbaikan' ? 'bg-purple-100 text-purple-800' : ''}
                        `}>
                          {entry.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.assignedTo}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {/* MODIFIKASI BAGIAN AKSI DI SINI */}
                        <div className="flex items-center space-x-3">
                          <button 
                            onClick={() => handleEditMaintenanceEntry(entry.id)}
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-150"
                            title="Edit"
                          >
                            <PencilSquareIcon className="w-5 h-5" />
                          </button>
                          <button 
                            onClick={() => handleDeleteMaintenanceEntry(entry.id)}
                            className="text-red-600 hover:text-red-800 transition-colors duration-150"
                            title="Hapus"
                          >
                            <TrashIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="px-6 py-4 text-center text-sm text-gray-500">
                      Tidak ada data yang ditemukan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {/* New Maintenance Request Tab Content */}
      {activeTab === 'new' && (
        <div className="bg-white p-6 rounded border shadow-sm">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ID Aset</label>
                <input
                  type="text"
                  placeholder="Masukkan ID Aset"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Aset</label>
                <input
                  type="text"
                  placeholder="Nama Aset"
                  className="w-full p-2 border rounded"
                  disabled // Contoh, mungkin akan di-fetch otomatis
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Masalah</label>
              <textarea
                placeholder="Jelaskan masalah dengan detail"
                className="w-full p-2 border rounded h-24"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prioritas</label>
                <select className="w-full p-2 border rounded">
                  <option value="">Pilih Prioritas</option>
                  <option value="low">Rendah</option>
                  <option value="medium">Sedang</option>
                  <option value="high">Tinggi</option>
                  <option value="urgent">Mendesak</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Laporan</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lampirkan Foto (opsional)</label>
              <input
                type="file"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="pt-4">
              <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Kirim Laporan Pemeliharaan
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Schedule Tab Content */}
      {activeTab === 'schedule' && (
        <div className="bg-white p-6 rounded border shadow-sm">
          <h2 className="text-lg font-medium mb-4">Jadwal Pemeliharaan Rutin</h2>
          <div className="border rounded overflow-x-auto mb-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aset</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipe Pemeliharaan</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frekuensi</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal Berikutnya</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PIC</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {scheduleData.map((schedule) => (
                   <tr key={schedule.id}>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schedule.asset}</td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schedule.maintenanceType}</td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schedule.frequency}</td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schedule.nextDate}</td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schedule.pic}</td>
                   </tr>
                ))}
                {scheduleData.length === 0 && (
                    <tr>
                        <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                            Belum ada jadwal pemeliharaan.
                        </td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end">
            <button 
              onClick={handleOpenAddScheduleModal} 
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Tambah Jadwal Baru
            </button>
          </div>
        </div>
      )}

      <AddScheduleModal 
        isOpen={isAddScheduleModalOpen}
        onClose={handleCloseAddScheduleModal}
        onSubmit={handleSaveSchedule}
      />
    </div>
  );
}

export default MaintenanceTable;