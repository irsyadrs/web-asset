// components/maintenance-components/AddScheduleModal.js
"use client";

import { useState, useEffect } from "react";

export default function AddScheduleModal({ isOpen, onClose, onSubmit }) {
  const [asset, setAsset] = useState("");
  const [maintenanceType, setMaintenanceType] = useState("");
  const [frequency, setFrequency] = useState("");
  const [nextDate, setNextDate] = useState("");
  const [pic, setPic] = useState("");

  useEffect(() => {
    // Reset form when modal opens or closes, if needed
    if (isOpen) {
      setAsset("");
      setMaintenanceType("");
      setFrequency("");
      setNextDate("");
      setPic("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation (can be expanded)
    if (!asset || !maintenanceType || !frequency || !nextDate || !pic) {
      alert("Semua field wajib diisi!");
      return;
    }
    onSubmit({ asset, maintenanceType, frequency, nextDate, pic });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Tambah Jadwal Pemeliharaan Baru</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 text-2xl"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="asset" className="block text-sm font-medium text-gray-700 mb-1">
                Nama Aset
              </label>
              <input
                type="text"
                id="asset"
                value={asset}
                onChange={(e) => setAsset(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Contoh: AC Kantor Lantai 2"
                required
              />
            </div>
            <div>
              <label htmlFor="maintenanceType" className="block text-sm font-medium text-gray-700 mb-1">
                Tipe Pemeliharaan
              </label>
              <input
                type="text"
                id="maintenanceType"
                value={maintenanceType}
                onChange={(e) => setMaintenanceType(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Contoh: Pembersihan Filter"
                required
              />
            </div>
            <div>
              <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">
                Frekuensi
              </label>
              <input
                type="text"
                id="frequency"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Contoh: Bulanan, 3 Bulan, Mingguan"
                required
              />
            </div>
            <div>
              <label htmlFor="nextDate" className="block text-sm font-medium text-gray-700 mb-1">
                Tanggal Berikutnya
              </label>
              <input
                type="date"
                id="nextDate"
                value={nextDate}
                onChange={(e) => setNextDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="pic" className="block text-sm font-medium text-gray-700 mb-1">
                PIC (Person In Charge)
              </label>
              <input
                type="text"
                id="pic"
                value={pic}
                onChange={(e) => setPic(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Contoh: Rudi Hartono"
                required
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Simpan Jadwal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}