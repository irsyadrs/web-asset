"use client";

import { useState } from "react";
import { FunnelIcon, PlusIcon } from "@heroicons/react/24/outline";
import Modal from "../modal";
import AddAssetForm from "./add-asset-form"; 
import FilterModal from "./filter-asset";

export default function InventoryTitle({ onFilterApply }) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({ division: [], status: [] });

  const handleFilterApply = (filters) => {
    setSelectedFilters(filters);
    onFilterApply(filters); // Kirim filter ke parent (Inventory Page)
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b gap-2 md:gap-4">
        <h1 className="text-lg md:text-xl font-bold text-gray-700">Inventory</h1>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <button
            className="flex text-sm items-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-100 w-full md:w-auto"
            onClick={() => setIsFilterModalOpen(true)}
          >
            <FunnelIcon className="w-5 h-5" /> Filter
          </button>
          <button
            className="flex text-sm items-center gap-2 px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 w-full md:w-auto"
            onClick={() => setIsAddModalOpen(true)}
          >
            <PlusIcon className="w-5 h-5" /> Tambah Aset
          </button>
        </div>
      </div>

      {/* Modal Tambah Aset */}
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Tambah Aset">
        <AddAssetForm onClose={() => setIsAddModalOpen(false)} />
      </Modal>

      {/* Modal Filter */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApply={handleFilterApply}
        selectedFilters={selectedFilters}
      />
    </>
  );
}
