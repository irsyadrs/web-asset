"use client";

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function AddAssetModal({ isOpen, onClose, assetData }) {
  const [formData, setFormData] = useState(assetData || {
    assetNumber: "",
    assetName: "",
    pic: "",
    division: "",
    status: "",
    lastUpdate: "",
  });

  // Handle perubahan input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null; // Jangan render jika modal tidak terbuka

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-bold">Tambah Aset</h2>
          <button onClick={onClose}>
            <XMarkIcon className="w-6 h-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Form */}
        <form className="mt-4 space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nama Aset</label>
            <input
              type="text"
              name="assetName"
              value={formData.assetName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">PIC</label>
            <input
              type="text"
              name="pic"
              value={formData.pic}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Divisi</label>
            <input
              type="text"
              name="division"
              value={formData.division}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="Tersedia">Tersedia</option>
              <option value="Digunakan">Digunakan</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Terakhir Update</label>
            <input
              type="text"
              name="lastUpdate"
              value={formData.lastUpdate}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 text-sm text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
              onClick={onClose}
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
