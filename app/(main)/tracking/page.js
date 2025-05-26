"use client";
import { useState } from "react";

// Dummy data untuk tracking barang
const trackingData = [
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
    progress: 60
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
    progress: 100
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
    progress: 25
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
    progress: 100
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
    progress: 75
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
    progress: 100
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
    progress: 30
  }
];

// Timeline data untuk detail tracking barang
const timelineData = {
  "TRK-001": [
    { date: "2025-05-20", time: "08:00", status: "Barang diterima di warehouse", location: "Warehouse" },
    { date: "2025-05-20", time: "14:30", status: "Persiapan pengiriman ke studio", location: "Warehouse" },
    { date: "2025-05-21", time: "09:15", status: "Dalam perjalanan ke Studio Live", location: "In Transit" },
    { date: "2025-05-22", time: "07:00", status: "Estimasi tiba hari ini", location: "Studio Live" }
  ],
  "TRK-002": [
    { date: "2025-05-01", time: "09:00", status: "Barang tiba di Head Office", location: "Head Office" },
    { date: "2025-05-01", time: "11:00", status: "Quality check selesai", location: "Head Office" },
    { date: "2025-05-01", time: "14:30", status: "Pengiriman ke Studio Live", location: "In Transit" },
    { date: "2025-05-02", time: "10:00", status: "Diterima dan siap digunakan", location: "Studio Live" }
  ],
  "TRK-003": [
    { date: "2025-05-15", time: "10:00", status: "Purchase order disetujui", location: "Head Office" },
    { date: "2025-05-18", time: "14:00", status: "Barang tiba di Head Office", location: "Head Office" },
    { date: "2025-05-20", time: "09:00", status: "Menunggu jadwal pengiriman", location: "Head Office" }
  ],
  "TRK-005": [
    { date: "2025-05-10", time: "08:00", status: "Barang masuk warehouse", location: "Warehouse" },
    { date: "2025-05-12", time: "10:30", status: "Inspection dan packaging", location: "Warehouse" },
    { date: "2025-05-24", time: "14:00", status: "Dalam perjalanan ke Studio Live", location: "In Transit" }
  ]
};

function TrackingPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("list");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  
  const handleTypeFilterChange = (e) => {
    setTypeFilter(e.target.value);
  };
  
  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };
  
  // Filter data berdasarkan pencarian, tipe, dan status
  const filteredData = trackingData.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase());
    
    const matchesType = 
      typeFilter === "all" || 
      item.type.toLowerCase() === typeFilter.toLowerCase();
    
    const matchesStatus = 
      statusFilter === "all" || 
      item.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'terkirim':
      case 'di lokasi':
        return 'bg-green-100 text-green-800';
      case 'dalam perjalanan':
        return 'bg-blue-100 text-blue-800';
      case 'menunggu pengiriman':
      case 'menunggu persetujuan':
        return 'bg-yellow-100 text-yellow-800';
      case 'dibatalkan':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sistem Tracking</h1>
      
      {/* Custom Tabs */}
      <div className="mb-4">
        <div className="flex border-b">
          <button 
            className={`px-4 py-2 ${activeTab === 'list' ? 'border-b-2 border-blue-500 font-medium' : ''}`}
            onClick={() => setActiveTab('list')}
          >
            Daftar Tracking
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'new' ? 'border-b-2 border-blue-500 font-medium' : ''}`}
            onClick={() => setActiveTab('new')}
          >
            Tambah Item Tracking
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'analytics' ? 'border-b-2 border-blue-500 font-medium' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            Analitik Tracking
          </button>
        </div>
      </div>
      
      {/* List Tab Content */}
      {activeTab === 'list' && (
        <div>
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="Cari berdasarkan ID, judul, atau deskripsi..."
              className="w-full lg:w-1/2 p-2 border rounded"
              value={search}
              onChange={handleSearchChange}
            />
            
            <select 
              className="w-full lg:w-1/4 p-2 border rounded"
              value={typeFilter}
              onChange={handleTypeFilterChange}
            >
              <option value="all">Semua Tipe</option>
              <option value="barang">Barang</option>
            </select>
            
            <select 
              className="w-full lg:w-1/4 p-2 border rounded"
              value={statusFilter}
              onChange={handleStatusFilterChange}
            >
              <option value="all">Semua Status</option>
              <option value="dalam perjalanan">Dalam Perjalanan</option>
              <option value="di lokasi">Di Lokasi</option>
              <option value="menunggu pengiriman">Menunggu Pengiriman</option>
              <option value="terkirim">Terkirim</option>
              <option value="menunggu persetujuan">Menunggu Persetujuan</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card List */}
            <div className="space-y-4">
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <div 
                    key={item.id} 
                    className={`border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
                      selectedItem?.id === item.id ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-lg">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                      <div>
                        <strong>ID:</strong> {item.id}
                      </div>
                      <div>
                        <strong>Tipe:</strong> {item.type}
                      </div>
                      <div>
                        <strong>Mulai:</strong> {item.startDate}
                      </div>
                      <div>
                        <strong>Target:</strong> {item.estimatedDate}
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <span><strong>PIC:</strong> {item.assignedTo}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  Tidak ada data yang ditemukan
                </div>
              )}
            </div>
            
            {/* Detail Panel */}
            <div className="border rounded-lg p-4 shadow-sm">
              {selectedItem ? (
                <div>
                  <h3 className="text-lg font-medium mb-4">Detail Tracking: {selectedItem.title}</h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>ID Tracking:</strong>
                        <p>{selectedItem.id}</p>
                      </div>
                      <div>
                        <strong>Tipe:</strong>
                        <p>{selectedItem.type}</p>
                      </div>
                      <div>
                        <strong>Lokasi Saat Ini:</strong>
                        <p>{selectedItem.currentLocation}</p>
                      </div>
                      <div>
                        <strong>PIC:</strong>
                        <p>{selectedItem.assignedTo}</p>
                      </div>
                    </div>
                    
                    <div>
                      <strong>Deskripsi:</strong>
                      <p className="text-sm text-gray-600">{selectedItem.description}</p>
                    </div>
                    
                    <div>
                      <strong>Timeline:</strong>
                      <div className="mt-2 space-y-3">
                        {timelineData[selectedItem.id] ? 
                          timelineData[selectedItem.id].map((event, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                              <div className="text-sm">
                                <div className="font-medium">{event.status}</div>
                                <div className="text-gray-500">{event.date} - {event.time}</div>
                                <div className="text-gray-500">{event.location}</div>
                              </div>
                            </div>
                          )) : (
                            <p className="text-sm text-gray-500">Timeline tidak tersedia</p>
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  Pilih item untuk melihat detail tracking
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* New Tracking Item Tab Content */}
      {activeTab === 'new' && (
        <div className="bg-white p-6 rounded border shadow-sm">
          <h2 className="text-lg font-medium mb-4">Tambah Item Tracking Baru</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipe Item</label>
                <select className="w-full p-2 border rounded">
                  <option value="">Pilih Tipe</option>
                  <option value="pengiriman">Pengiriman</option>
                  <option value="proyek">Proyek</option>
                  <option value="perbaikan">Perbaikan</option>
                  <option value="tugas">Tugas</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Judul</label>
                <input
                  type="text"
                  placeholder="Masukkan judul item"
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
              <textarea
                placeholder="Jelaskan detail item yang akan di-tracking"
                className="w-full p-2 border rounded h-24"
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Mulai</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Target</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prioritas</label>
                <select className="w-full p-2 border rounded">
                  <option value="">Pilih Prioritas</option>
                  <option value="rendah">Rendah</option>
                  <option value="sedang">Sedang</option>
                  <option value="tinggi">Tinggi</option>
                  <option value="mendesak">Mendesak</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi Asal</label>
                <select className="w-full p-2 border rounded">
                  <option value="">Pilih lokasi asal</option>
                  <option value="head-office">Head Office</option>
                  <option value="warehouse">Warehouse</option>
                  <option value="studio-live">Studio Live</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi Tujuan</label>
                <select className="w-full p-2 border rounded">
                  <option value="">Pilih lokasi tujuan</option>
                  <option value="head-office">Head Office</option>
                  <option value="warehouse">Warehouse</option>
                  <option value="studio-live">Studio Live</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">PIC/Assigned To</label>
              <input
                type="text"
                placeholder="Nama penanggung jawab"
                className="w-full p-2 border rounded"
              />
            </div>
            
            <div className="pt-4">
              <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Buat Item Tracking Barang
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Analytics Tab Content */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded border shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Total Item</h3>
              <p className="text-2xl font-bold text-blue-600">{trackingData.length}</p>
            </div>
            <div className="bg-white p-4 rounded border shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Sedang Dalam Perjalanan</h3>
              <p className="text-2xl font-bold text-yellow-600">
                {trackingData.filter(item => !['terkirim', 'di lokasi'].includes(item.status.toLowerCase())).length}
              </p>
            </div>
            <div className="bg-white p-4 rounded border shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Sudah Sampai</h3>
              <p className="text-2xl font-bold text-green-600">
                {trackingData.filter(item => ['terkirim', 'di lokasi'].includes(item.status.toLowerCase())).length}
              </p>
            </div>
            <div className="bg-white p-4 rounded border shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Rata-rata Progress</h3>
              <p className="text-2xl font-bold text-purple-600">
                {Math.round(trackingData.reduce((sum, item) => sum + item.progress, 0) / trackingData.length)}%
              </p>
            </div>
          </div>
          
          {/* Charts/Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded border shadow-sm">
              <h3 className="text-lg font-medium mb-4">Distribusi Status Barang</h3>
              <div className="space-y-2">
                {['Dalam Perjalanan', 'Di Lokasi', 'Menunggu Pengiriman', 'Terkirim', 'Menunggu Persetujuan'].map(status => {
                  const count = trackingData.filter(item => item.status === status).length;
                  const percentage = trackingData.length > 0 ? (count / trackingData.length * 100).toFixed(1) : 0;
                  return (
                    <div key={status} className="flex justify-between items-center">
                      <span className="text-sm">{status}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm w-12">{count}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded border shadow-sm">
              <h3 className="text-lg font-medium mb-4">Distribusi Lokasi</h3>
              <div className="space-y-2">
                {['Head Office', 'Warehouse', 'Studio Live'].map(location => {
                  const count = trackingData.filter(item => item.currentLocation === location).length;
                  const percentage = trackingData.length > 0 ? (count / trackingData.length * 100).toFixed(1) : 0;
                  return (
                    <div key={location} className="flex justify-between items-center">
                      <span className="text-sm">{location}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-purple-500 h-2 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm w-12">{count}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrackingPage;