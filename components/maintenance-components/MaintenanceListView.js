"use client";

import { useState, useMemo, useEffect } from "react";
import MaintenanceListTable from "./MaintenanceListTable";
import Pagination from "@/components/pagination";

export default function MaintenanceListView({
  maintenanceData,
  setMaintenanceData,
}) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [search, statusFilter]);

  const handleEdit = (id) => alert(`Edit ${id}`);
  const handleDelete = (id) => {
    if (confirm(`Hapus ${id}?`)) {
      setMaintenanceData((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const filteredMaintenanceData = useMemo(
    () =>
      maintenanceData.filter(
        (item) =>
          (item.asset.toLowerCase().includes(search.toLowerCase()) ||
            item.issue.toLowerCase().includes(search.toLowerCase())) &&
          (statusFilter === "all" ||
            item.status.toLowerCase() === statusFilter.toLowerCase())
      ),
    [maintenanceData, search, statusFilter]
  );
  const paginatedMaintenanceData = useMemo(
    () =>
      filteredMaintenanceData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      ),
    [filteredMaintenanceData, currentPage, itemsPerPage]
  );

  return (
    <div>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Cari laporan..."
          className="w-full md:w-2/3 p-2 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="w-full md:w-1/3 p-2 border rounded"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">Semua Status</option>
          <option value="Dalam Proses">Dalam Proses</option>
          <option value="Selesai">Selesai</option>
          <option value="Menunggu Persetujuan">Menunggu Persetujuan</option>
        </select>
      </div>

      <MaintenanceListTable
        data={paginatedMaintenanceData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Pagination
        totalItems={filteredMaintenanceData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
