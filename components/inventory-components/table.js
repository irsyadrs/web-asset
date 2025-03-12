'use client';

import { useState } from 'react';
import { CheckCircleIcon, XCircleIcon, ClockIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

export default function AssetTable({ assets }) {
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedAssets, setSelectedAssets] = useState([]);

  const handleSelectAll = () => {
    setSelectedAll(!selectedAll);
    setSelectedAssets(!selectedAll ? assets.map((asset) => asset.id) : []);
  };

  const handleSelectAsset = (id) => {
    setSelectedAssets((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((assetId) => assetId !== id) : [...prevSelected, id]
    );
  };

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Intl.DateTimeFormat('id-ID', options).format(new Date(dateString));
  };

  const getStatusConfig = (status) => {
    switch (status) {
      case 'Tersedia':
        return { color: 'bg-green-100 text-green-600', icon: CheckCircleIcon };
      case 'Maintenance':
        return { color: 'bg-red-100 text-red-600', icon: XCircleIcon };
      case 'Digunakan':
        return { color: 'bg-blue-100 text-blue-600', icon: ClockIcon };
      default:
        return { color: 'bg-gray-100 text-gray-600', icon: CheckCircleIcon };
    }
  };

  const getDivisionConfig = (division) => {
    switch (division) {
      case 'IT':
        return { color: 'bg-blue-200 text-blue-800' };
      case 'HCGA':
        return { color: 'bg-pink-100 text-pink-600' };
      case 'Brand':
        return { color: 'bg-cyan-100 text-cyan-600' };
      case 'General':
        return { color: 'bg-orange-200 text-orange-800' };
      case 'Finance':
        return { color: 'bg-emerald-200 text-emerald-800' };
      case 'Retail':
        return { color: 'bg-purple-200 text-purple-800' };
      default:
        return { color: 'bg-gray-200 text-gray-800' };
    }
  };

  return (
    <div className="flex-1 bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-12 px-4 py-3 text-left">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                  checked={selectedAll}
                  onChange={handleSelectAll}
                />
              </th>
              {['No Aset', 'Title Aset', 'PIC', 'Divisi', 'Status', 'Update Terakhir', 'Actions'].map((col) => (
                <th key={col} className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {assets.map((asset) => {
              const { color: statusColor, icon: Icon } = getStatusConfig(asset.status);
              const { color: divisionColor } = getDivisionConfig(asset.division);
              const formattedDate = formatDate(asset.lastUpdate);

              return (
                <tr key={asset.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300"
                      checked={selectedAssets.includes(asset.id)}
                      onChange={() => handleSelectAsset(asset.id)}
                    />
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">{asset.assetNumber}</td>
                  <td className="px-4 py-4 text-sm text-gray-900">{asset.assetName}</td>
                  <td className="px-4 py-4 text-sm text-gray-900">{asset.pic}</td>
                  <td className="px-4 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-normal ${divisionColor}`}>
                      {asset.division}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className={`inline-flex items-center rounded-full px-3 py-1 ${statusColor}`}>
                      <Icon className="h-4 w-4 mr-2" />
                      <span className="text-xs font-normal">{asset.status}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">{formattedDate}</td>
                  <td className="px-4 py-4 text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-500">
                      <EllipsisHorizontalIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
