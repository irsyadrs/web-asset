// components/acquisition-components/AcquisitionTable.js
"use client";

export default function AcquisitionTable({ data, searchValue, onSearchChange }) {
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Aset</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.length > 0 ? (
              data.map((entry) => (
                <tr key={entry.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.item}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.vendor}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center">
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