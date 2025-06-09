"use client";

import { useState, useMemo } from "react";
import MaintenanceListTable from "./MaintenanceListTable";
import Pagination from "@/components/pagination";

export default function MaintenanceList({ initialData }) {
  const [maintenanceData, setMaintenanceData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleDelete = (id) => {
    if (confirm(`Apakah Anda yakin ingin menghapus entri ${id}?`)) {
      setMaintenanceData((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert(`Fungsi edit untuk ${id} akan membuka modal/halaman baru.`);
  };

  const filteredData = useMemo(() => {
    return maintenanceData.filter((item) => {
      const matchesSearch =
        item.asset.toLowerCase().includes(search.toLowerCase()) ||
        item.issue.toLowerCase().includes(search.toLowerCase()) ||
        item.assetId.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ||
        item.status.toLowerCase() === statusFilter.toLowerCase();

      return matchesSearch && matchesStatus;
    });
  }, [maintenanceData, search, statusFilter]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  return (
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
          <option value="Dalam Proses">Dalam Proses</option>
          <option value="Selesai">Selesai</option>
          <option value="Menunggu Persetujuan">Menunggu Persetujuan</option>
        </select>
      </div>

      <MaintenanceListTable
        data={paginatedData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Pagination
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
