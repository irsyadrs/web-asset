"use client";

import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function AcquisitionTable({
  data,
  searchValue,
  onSearchChange,
}) {
  const getStatusConfig = (status) => {
    switch (status) {
      case "Disetujui":
        return { color: "bg-green-100 text-green-600" };
      case "Menunggu Persetujuan":
        return { color: "bg-blue-100 text-blue-600" };
      case "Ditolak":
        return { color: "bg-red-100 text-red-600" };
      default:
        return { color: "bg-gray-100 text-gray-600" };
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Cari berdasarkan nama aset atau vendor..."
        className="w-full p-2 mb-4 border rounded"
        value={searchValue}
        onChange={onSearchChange}
      />

      <div className="border rounded overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nama Aset
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vendor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.length > 0 ? (
              data.map((entry) => {
                const { color } = getStatusConfig(entry.status);
                return (
                  <tr key={entry.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{entry.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {entry.item}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {entry.vendor}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {entry.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}
                      >
                        {entry.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <PencilSquareIcon className="h-5 w-5" />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center">
                  Tidak ada data yang ditemukan
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
