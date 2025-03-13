'use client';

import { PlusIcon } from '@heroicons/react/24/outline';

export default function CategoryNav({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="flex items-center justify-between pb-4 border-b">
      <div className="flex gap-2">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 text-sm font-medium rounded-md border transition ${
              activeCategory === cat
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
        <PlusIcon className="w-4 h-4" /> Tambah Kategori
      </button>
    </div>
  );
}
