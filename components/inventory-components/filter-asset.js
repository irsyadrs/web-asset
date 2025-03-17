"use client";

import { useState } from "react";
import Modal from "../modal"; // Menggunakan Modal yang sudah dipisah

export default function FilterModal({ isOpen, onClose, onApply, selectedFilters }) {
  const [selectedDivision, setSelectedDivision] = useState(selectedFilters.division || []);
  const [selectedStatus, setSelectedStatus] = useState(selectedFilters.status || []);

  const handleFilterChange = (type, value) => {
    if (type === "division") {
      setSelectedDivision((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    } else if (type === "status") {
      setSelectedStatus((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    }
  };

  const resetFilters = () => {
    setSelectedDivision([]);
    setSelectedStatus([]);
  };

  const applyFilters = () => {
    onApply({ division: selectedDivision, status: selectedStatus });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Filter Aset">
      <div className="space-y-4">
        {/* Filter Divisi */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700">Divisi</h3>
          {["IT", "HCGA", "Brand", "General", "Finance"].map((division) => (
            <label key={division} className="flex items-center space-x-2 mt-2">
              <input
                type="checkbox"
                checked={selectedDivision.includes(division)}
                onChange={() => handleFilterChange("division", division)}
                className="h-4 w-4"
              />
              <span className="text-sm text-gray-700">{division}</span>
            </label>
          ))}
        </div>

        {/* Filter Status */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700">Status</h3>
          {["Tersedia", "Maintenance", "Digunakan"].map((status) => (
            <label key={status} className="flex items-center space-x-2 mt-2">
              <input
                type="checkbox"
                checked={selectedStatus.includes(status)}
                onChange={() => handleFilterChange("status", status)}
                className="h-4 w-4"
              />
              <span className="text-sm text-gray-700">{status}</span>
            </label>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={resetFilters}
            className="px-4 py-2 text-sm text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Reset
          </button>
          <button
            onClick={applyFilters}
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Terapkan
          </button>
        </div>
      </div>
    </Modal>
  );
}
