"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";

export default function AddAssetModal({ isOpen, onClose }) {
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
        <p className="mt-4 text-gray-600">Isi form untuk menambahkan aset baru.</p>
        <div className="mt-6 flex justify-end">
          <button
            className="px-4 py-2 text-sm text-white bg-gray-500 rounded-md hover:bg-gray-600"
            onClick={onClose}
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
