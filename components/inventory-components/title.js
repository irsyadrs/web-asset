"use client";

import { useState } from "react";
import { FunnelIcon, PlusIcon } from "@heroicons/react/24/outline";
import Modal from "../modal";
import AddAssetForm from "./add-asset-form"; 

export default function InventoryTitle() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-xl font-bold text-gray-700">Inventory</h1>
        <div className="flex gap-2">
          <button className="flex text-sm items-center gap-2 px-2 py-2 border rounded-md hover:bg-gray-100">
            <FunnelIcon className="w-5 h-5" /> Filter
          </button>
          <button
            className="flex text-sm items-center gap-2 px-2 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            onClick={() => setIsModalOpen(true)}
          >
            <PlusIcon className="w-5 h-5" /> Tambah Aset
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Tambah Aset">
        <AddAssetForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
