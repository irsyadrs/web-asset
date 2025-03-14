"use client";

import { useState } from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import Modal from '../modal';

export default function CategoryTable({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden mt-4">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['Code', 'Abbrv.', 'Title', 'Description', 'Actions'].map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.code} className="hover:bg-gray-50">
                <td className="px-4 py-4 text-sm text-gray-900">{item.code}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{item.abbrv}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{item.title}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{item.description}</td>
                <td className="px-4 py-4 text-center text-sm font-medium">
                  <button className="mr-3 text-blue-500 hover:text-blue-700 mx-2">
                    <PencilSquareIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(item)}
                    className="ml-3 text-red-500 hover:text-red-700"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Konfirmasi Hapus">
        <p className="text-sm ">Apakah anda yakin ingin menghapus <strong>{selectedItem?.title}</strong>?</p>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 text-sm bg-gray-300 text-gray-800  hover:bg-gray-400 hover:text-gray-900 rounded-lg mr-2"
            onClick={handleCloseModal}
          >
            Batal
          </button>
          <button
            className="px-4 py-2 text-sm bg-red-600 text-stone-100 hover:bg-red-700 hover:text-stone-50 rounded-lg"
            onClick={() => {
              console.log('Deleting:', selectedItem);
              handleCloseModal();
            }}
          >
            Hapus
          </button>
        </div>
      </Modal>
    </div>
  );
}
