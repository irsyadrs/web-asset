"use client";

import { useState, useMemo } from "react";
import AddAcquisition from "@/components/acquisition-components/add-acquisition";
import AcquisitionTable from "@/components/acquisition-components/acquisition-table";
import Pagination from "@/components/pagination";

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
  {
    id: "ACQ-004",
    item: "Keyboard Mechanical",
    vendor: "PT Techno",
    date: "2024-06-02",
    status: "Disetujui",
  },
  {
    id: "ACQ-005",
    item: "Mouse Logitech",
    vendor: "CV PrintPlus",
    date: "2024-06-03",
    status: "Ditolak",
  },
  {
    id: "ACQ-006",
    item: "Webcam HD",
    vendor: "CV Media Solusi",
    date: "2024-06-04",
    status: "Menunggu Persetujuan",
  },
];

export default function AcquisitionsPage() {
  const [acquisitions, setAcquisitions] = useState(initialData);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleAddNewAcquisition = (newAcquisition) => {
    setAcquisitions((prev) => [newAcquisition, ...prev]);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

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
