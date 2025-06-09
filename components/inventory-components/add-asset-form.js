"use client";

import { useState } from "react";

export default function AddAssetForm({ onClose }) {
  const [formData, setFormData] = useState({
    assetNumber: "",
    assetName: "",
    pic: "",
    division: "General",
    status: "Tersedia",
    lastUpdate: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data aset baru:", formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          No Aset
        </label>
        <input
          type="text"
          name="assetNumber"
          value={formData.assetNumber}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border border-gray-400 bg-gray-100 shadow-sm p-2 focus:outline-none focus:border-gray-600"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Title Aset
        </label>
        <input
          type="text"
          name="assetName"
          value={formData.assetName}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border border-gray-400 bg-gray-100 shadow-sm p-2 focus:outline-none focus:border-gray-600"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">PIC</label>
        <input
          type="text"
          name="pic"
          value={formData.pic}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border border-gray-400 bg-gray-100 shadow-sm p-2 focus:outline-none focus:border-gray-600"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Divisi
        </label>
        <select
          name="division"
          value={formData.division}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-400 bg-gray-100 shadow-sm p-2 focus:outline-none focus:border-gray-600"
        >
          {[
            "General",
            "Chief",
            "Strategic",
            "Creative",
            "Marketing",
            "Brand",
            "Commercial Business",
            "HCGA",
            "SCM",
            "PID",
            "IT",
            "Retail",
            "Finance",
          ].map((div) => (
            <option key={div} value={div}>
              {div}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Status
        </label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-400 bg-gray-100 shadow-sm p-2 focus:outline-none focus:border-gray-600"
        >
          {["Tersedia", "Maintenance", "Digunakan"].map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Batal
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Simpan
        </button>
      </div>
    </form>
  );
}
