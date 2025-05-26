// components/acquisition-components/acquisition-table.js
"use client";
import { useState } from "react";

// Dummy data for acquisition entries
const dummyData = [
  {
    id: "ACQ-001",
    item: "Laptop Dell XPS 13",
    vendor: "PT Techno",
    date: "2024-05-01",
    status: "Disetujui",
  },
  {
    id: "ACQ-002",
    item: "Printer Epson L3110",
    vendor: "CV PrintPlus",
    date: "2024-05-10",
    status: "Menunggu Persetujuan",
  },
];

function AcquisitionTable() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("list");
  
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  
  const filteredData = dummyData.filter((item) =>
    item.item.toLowerCase().includes(search.toLowerCase()) ||
    item.vendor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manajemen Pengadaan Aset</h1>
      
      {/* Custom Tabs */}
      <div className="mb-4">
        <div className="flex border-b">
          <button 
            className={`px-4 py-2 ${activeTab === 'list' ? 'border-b-2 border-blue-500 font-medium' : ''}`}
            onClick={() => setActiveTab('list')}
          >
            Daftar Pengadaan
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'new' ? 'border-b-2 border-blue-500 font-medium' : ''}`}
            onClick={() => setActiveTab('new')}
          >
            Tambah Pengadaan
          </button>
        </div>
      </div>
      
      {/* List Tab Content */}
      {activeTab === 'list' && (
        <div>
          <input
            type="text"
            placeholder="Cari berdasarkan nama aset atau vendor..."
            className="w-full p-2 mb-4 border rounded"
            value={search}
            onChange={handleSearchChange}
          />
          
          <div className="border rounded overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Aset</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.length > 0 ? (
                  filteredData.map((entry) => (
                    <tr key={entry.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{entry.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{entry.item}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{entry.vendor}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{entry.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{entry.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center">
                      Tidak ada data yang ditemukan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {/* New Acquisition Tab Content */}
      {activeTab === 'new' && (
        <div className="bg-white p-6 rounded border">
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Nama Aset"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Jumlah"
                min="1"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Vendor"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <input
                type="date"
                placeholder="Tanggal Pengadaan"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Ajukan Pengadaan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AcquisitionTable;

