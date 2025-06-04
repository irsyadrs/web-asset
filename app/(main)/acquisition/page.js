// app/(main)/acquisition/page.js

// 1. Menjadikan file ini sebagai Client Component
"use client"; 

// 2. Impor hooks dari React dan komponen-komponen anak
import { useState, useMemo } from "react";
import AddAcquisition from "@/components/acquisition-components/add-acquisition";
import AcquisitionTable from "@/components/acquisition-components/acquisition-table";
import Pagination from "@/components/pagination"; // Asumsi Anda punya komponen ini seperti di halaman Kategori

// Data dummy sekarang menjadi state awal
const initialData = [
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
  {
    id: "ACQ-003",
    item: "Monitor LG 24 inch",
    vendor: "CV Media Solusi",
    date: "2024-06-01",
    status: "Menunggu Persetujuan",
  },
  // Tambahkan lebih banyak data untuk menguji paginasi
  { id: "ACQ-004", item: "Keyboard Mechanical", vendor: "PT Techno", date: "2024-06-02", status: "Disetujui" },
  { id: "ACQ-005", item: "Mouse Logitech", vendor: "CV PrintPlus", date: "2024-06-03", status: "Ditolak" },
  { id: "ACQ-006", item: "Webcam HD", vendor: "CV Media Solusi", date: "2024-06-04", status: "Menunggu Persetujuan" },
];

export default function AcquisitionsPage() {
  // 3. Semua state sekarang dikelola di sini, seperti di halaman Kategori
  const [acquisitions, setAcquisitions] = useState(initialData);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Tentukan jumlah item per halaman

  // Handler untuk menambah data baru
  const handleAddNewAcquisition = (newAcquisition) => {
    setAcquisitions((prev) => [newAcquisition, ...prev]);
  };

  // Handler untuk input pencarian
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Kembali ke halaman pertama setiap kali melakukan pencarian
  };

  // 4. Logika untuk memfilter dan paginasi data
  const filteredData = useMemo(() => {
    if (!search) {
      return acquisitions;
    }
    return acquisitions.filter(
      (item) =>
        item.item.toLowerCase().includes(search.toLowerCase()) ||
        item.vendor.toLowerCase().includes(search.toLowerCase())
    );
  }, [acquisitions, search]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);


  return (
    // 5. JSX sekarang merender komponen anak dan memberikan props yang diperlukan
    <main className="p-6">
      <div className="flex justify-between items-center mb-4">
       <h1 className="text-xl font-bold text-gray-700 mb-2">Acquisitions</h1>
        <AddAcquisition onAdd={handleAddNewAcquisition} />
      </div>

      <AcquisitionTable
        data={paginatedData}
        searchValue={search}
        onSearchChange={handleSearchChange}
      />
      
      <Pagination
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}