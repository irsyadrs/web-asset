"use client";

import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import Modal from "../modal";

export default function CategoryNav({ categories, activeCategory, setActiveCategory }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between pb-4 border-b">
        <div className="flex gap-2">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 text-sm font-medium rounded-md border transition ${
                activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          onClick={() => setIsModalOpen(true)}
        >
          <PlusIcon className="w-4 h-4" /> Tambah Kategori
        </button>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Tambah Kategori">
        <p className="text-gray-600">Konten modal akan ditambahkan nanti.</p>
      </Modal>
    </>
  );
}
