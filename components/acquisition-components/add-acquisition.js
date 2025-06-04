// components/acquisition-components/AddAcquisition.js
"use client";

import { useState } from "react";
// Path import ini disesuaikan untuk mengambil modal.js dari folder components
import Modal from "../modal";

export default function AddAcquisition({ onAdd }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newAcquisition = {
      id: `ACQ-${String(Date.now()).slice(-4)}`,
      item: formData.get("assetName"),
      vendor: formData.get("vendor"),
      date: formData.get("date"),
      status: "Menunggu Persetujuan",
    };
    onAdd(newAcquisition);
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Tambah Pengadaan
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Tambah Pengadaan Baru"
      >
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <input name="assetName" type="text" placeholder="Nama Aset" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <input name="quantity" type="number" placeholder="Jumlah" min="1" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <input name="vendor" type="text" placeholder="Vendor" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <input name="date" type="date" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Ajukan Pengadaan
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}