"use client";

import { useState } from "react";
import AcquisitionTable from "./acquisition-table";
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
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Acquisition</h1>

      <AcquisitionTable
        data={filteredData}
        searchValue={search}
        onSearchChange={handleSearchChange}
      />

      <div className="flex justify-end mt-4">
        <AddAcquisition onAdd={handleAddNewAcquisition} />
      </div>
    </div>
  );
}
