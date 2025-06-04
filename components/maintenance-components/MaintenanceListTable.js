// components/maintenance-components/MaintenanceListTable.js
"use client";

import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function MaintenanceListTable({ data, onEdit, onDelete }) {
    return (
        // Hilangkan overflow-x-auto jika Anda yakin tabel tidak akan melebihi lebar
        // Atau biarkan untuk keamanan jika konten dinamis bisa sangat lebar
        <div className="border rounded shadow-sm overflow-hidden"> 
            {/* Tambahkan table-fixed agar browser menggunakan lebar kolom dari header atau kolom pertama */}
            <table className="min-w-full divide-y divide-gray-200 table-fixed"> 
                <thead className="bg-gray-50">
                    <tr>
                        {/* Berikan lebar perkiraan untuk setiap kolom */}
                        {/* Jumlah total lebar idealnya tidak lebih dari 100% */}
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[10%] sm:w-[8%]">ID</th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[25%] sm:w-[30%]">Aset</th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[30%] sm:w-[32%]">Masalah</th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[15%]">Status</th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[10%]">Ditugaskan</th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[10%]">Aksi</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.length > 0 ? (
                        data.map((entry) => (
                            <tr key={entry.id} className="hover:bg-gray-50">
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-700">{entry.id}</td>
                                <td className="px-4 sm:px-6 py-4 text-sm text-gray-900">
                                    {/* truncate dan max-w-xs (atau ukuran lain) untuk memotong teks jika terlalu panjang */}
                                    <div className="truncate max-w-xs" title={entry.asset}>{entry.asset}</div>
                                </td>
                                <td className="px-4 sm:px-6 py-4 text-sm text-gray-700">
                                    <div className="truncate max-w-sm" title={entry.issue}>{entry.issue}</div>
                                </td>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                        ${entry.status === 'Selesai' ? 'bg-green-100 text-green-800' : ''}
                                        ${entry.status === 'Dalam Proses' ? 'bg-blue-100 text-blue-800' : ''}
                                        ${entry.status === 'Menunggu Persetujuan' ? 'bg-yellow-100 text-yellow-800' : ''}
                                        ${entry.status === 'Jadwal Perbaikan' ? 'bg-purple-100 text-purple-800' : ''}
                                    `}>
                                        {entry.status}
                                    </span>
                                </td>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    <div className="truncate max-w-[100px]" title={entry.assignedTo}>{entry.assignedTo}</div>
                                </td>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
                                    <div className="flex items-center space-x-2 sm:space-x-3">
                                        <button onClick={() => onEdit(entry.id)} className="text-blue-600 hover:text-blue-800" title="Edit"><PencilSquareIcon className="w-5 h-5" /></button>
                                        <button onClick={() => onDelete(entry.id)} className="text-red-600 hover:text-red-800" title="Hapus"><TrashIcon className="w-5 h-5" /></button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">Tidak ada data yang ditemukan</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}