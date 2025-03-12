'use client';

import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function CategoryTable({ data }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden mt-4">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          {/* Header Tabel */}
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

          {/* Body Tabel */}
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.code} className="hover:bg-gray-50">
                <td className="px-4 py-4 text-sm text-gray-900">{item.code}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{item.abbrv}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{item.title}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{item.description}</td>
                <td className="px-4 py-4 text-center text-sm font-medium">
                  <button className="text-blue-500 hover:text-blue-700 mx-2">
                    <PencilSquareIcon className="h-5 w-5" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
