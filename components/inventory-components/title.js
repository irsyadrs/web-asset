"use client";

import { useState } from "react";
import { FunnelIcon, PlusIcon } from "@heroicons/react/24/outline";
import AddAssetModal from "./add-asset-modal";

const dummyAssets = [
  { id: 1, assetNumber: "001", assetName: "Laptop HP ProBook", pic: "John Doe", division: "IT", status: "Tersedia", lastUpdate: "10-12-2024" },
  { id: 2, assetNumber: "002", assetName: "Proyektor Epson", pic: "Jane Smith", division: "HCGA", status: "Maintenance", lastUpdate: "2023-03-11" },
  { id: 3, assetNumber: "003", assetName: "Kamera Canon EOS", pic: "Michael Brown", division: "Brand", status: "Digunakan", lastUpdate: "2023-03-12" },
  { id: 4, assetNumber: "004", assetName: "Mobil Operasional", pic: "Emily Clark", division: "General", status: "Tersedia", lastUpdate: "2023-03-13" },
  { id: 5, assetNumber: "005", assetName: "Printer Canon LBP2900", pic: "Samuel Green", division: "Finance", status: "Maintenance", lastUpdate: "2023-03-14" },
  { id: 6, assetNumber: "006", assetName: "Meja Rapat", pic: "Natalie White", division: "Retail", status: "Digunakan", lastUpdate: "2023-03-15" }
];

export default function InventoryTitle() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);

  // Fungsi untuk membuka modal dengan data aset tertentu
  const openModal = (asset) => {
    setSelectedAsset(asset);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-xl font-bold text-gray-700">Inventory</h1>
        <div className="flex gap-2">
          <button className="flex text-sm items-center gap-2 px-2 py-2 border rounded-md hover:bg-gray-100">
            <FunnelIcon className="w-5 h-5" /> Filter
          </button>
          <button
            className="flex text-sm items-center gap-2 px-2 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            onClick={() => openModal(null)}
          >
            <PlusIcon className="w-5 h-5" /> Tambah Aset
          </button>
        </div>
      </div>

      {/* Modal */}
      <AddAssetModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} assetData={selectedAsset} />
    </div>
  );
}
