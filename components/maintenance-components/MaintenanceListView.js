// components/maintenance-components/MaintenanceListView.js
"use client";

import { useState, useMemo, useEffect } from "react";
import MaintenanceListTable from "./MaintenanceListTable";
import Pagination from "@/components/pagination";

// Terima 'maintenanceData' dan 'setMaintenanceData' dari props
export default function MaintenanceListView({ maintenanceData, setMaintenanceData }) {
    // State lokal hanya untuk UI komponen ini (search, filter, pagination)
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        setCurrentPage(1);
    }, [search, statusFilter]);

    // Handler yang spesifik untuk komponen ini
    const handleEdit = (id) => alert(`Edit ${id}`);
    const handleDelete = (id) => {
        if (confirm(`Hapus ${id}?`)) {
            // Gunakan setter dari props untuk mengubah data di parent
            setMaintenanceData(prev => prev.filter(p => p.id !== id));
        }
    };

    // Logika filter dan paginasi tetap di sini, tapi menggunakan 'maintenanceData' dari props
    const filteredMaintenanceData = useMemo(() => maintenanceData.filter(item => (item.asset.toLowerCase().includes(search.toLowerCase()) || item.issue.toLowerCase().includes(search.toLowerCase())) && (statusFilter === 'all' || item.status.toLowerCase() === statusFilter.toLowerCase())), [maintenanceData, search, statusFilter]);
    const paginatedMaintenanceData = useMemo(() => filteredMaintenanceData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage), [filteredMaintenanceData, currentPage, itemsPerPage]);

    return (
        <div>
            {/* Tombol "+ Lapor Kerusakan" dan Modal sudah dipindahkan ke page.js */}

            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input type="text" placeholder="Cari laporan..." className="w-full md:w-2/3 p-2 border rounded" value={search} onChange={(e) => setSearch(e.target.value)} />
                <select className="w-full md:w-1/3 p-2 border rounded" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="all">Semua Status</option>
                    <option value="Dalam Proses">Dalam Proses</option>
                    <option value="Selesai">Selesai</option>
                    <option value="Menunggu Persetujuan">Menunggu Persetujuan</option>
                </select>
            </div>
            
            <MaintenanceListTable data={paginatedMaintenanceData} onEdit={handleEdit} onDelete={handleDelete} />
            
            <Pagination totalItems={filteredMaintenanceData.length} itemsPerPage={itemsPerPage} currentPage={currentPage} onPageChange={setCurrentPage} />
        </div>
    );
}