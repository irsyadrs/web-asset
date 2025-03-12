'use client';

export default function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxPagesToShow = 5;

  const getPageNumbers = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <p className="text-gray-600 text-sm">
        {`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(currentPage * itemsPerPage, totalItems)} dari ${totalItems} hasil`}
      </p>

      <div className="flex items-center space-x-2">
        {/* Tombol Previous */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md text-gray-600 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
        >
          &lt;
        </button>

        {/* Nomor Halaman */}
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-7 h-7 text-sm font-medium flex items-center justify-center rounded-full ${
              currentPage === page ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            {page}
          </button>
        ))}

        {/* Tombol Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md text-gray-600 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
