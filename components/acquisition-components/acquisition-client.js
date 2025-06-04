// components/acquisition-components/AcquisitionClient.js
"use client";

import { useState } from "react";
// Pastikan nama file ini sesuai dengan file Anda (misal: AcquisitionTable.js)
import AcquisitionTable from "./acquisition-table";
// Pastikan nama file ini sesuai dengan file Anda (misal: AddAcquisition.js)
import AddAcquisition from "./add-acquisition";
export default function AcquisitionClient({ initialData }) {
  const [acquisitions, setAcquisitions] = useState(initialData);
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleAddNewAcquisition = (newAcquisition) => {
    setAcquisitions((prevAcquisitions) => [
      ...prevAcquisitions,
      newAcquisition,
    ]);
  };

  const filteredData = acquisitions.filter(
    (item) =>
      item.item.toLowerCase().includes(search.toLowerCase()) ||
      item.vendor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* 1. Judul halaman sekarang berdiri sendiri di atas */}
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Acquisition</h1>

      {/* 2. Komponen tabel (yang berisi search bar dan tabel itu sendiri) */}
      <AcquisitionTable
        data={filteredData}
        searchValue={search}
        onSearchChange={handleSearchChange}
      />

      {/* 3. Tombol "Tambah Pengadaan" sekarang berada di bawah tabel */}
      {/* Kita bungkus dengan div dan `justify-end` agar posisi tombol tetap di kanan */}
      <div className="flex justify-end mt-4">
        <AddAcquisition onAdd={handleAddNewAcquisition} />
      </div>
    </div>
  );
}