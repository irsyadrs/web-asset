"use client";

import { useState, useMemo, useEffect } from "react";
import Pagination from "@/components/pagination";

export default function TrackingListView({ initialData, timelineData }) {
  const [trackingData, setTrackingData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    setCurrentPage(1);
  }, [search, typeFilter, statusFilter]);

  const filteredData = useMemo(() => {
    return trackingData.filter(
      (item) =>
        (item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.id.toLowerCase().includes(search.toLowerCase()) ||
          (item.description &&
            item.description.toLowerCase().includes(search.toLowerCase()))) &&
        (typeFilter === "all" ||
          item.type.toLowerCase() === typeFilter.toLowerCase()) &&
        (statusFilter === "all" ||
          item.status.toLowerCase() === statusFilter.toLowerCase())
    );
  }, [trackingData, search, typeFilter, statusFilter]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  useEffect(() => {
    if (paginatedData.length > 0) {
      const currentSelectionExistsInPaginated = paginatedData.find(
        (p) => p.id === selectedItem?.id
      );
      if (!currentSelectionExistsInPaginated) {
        setSelectedItem(paginatedData[0]);
      } else if (!selectedItem) {
        setSelectedItem(paginatedData[0]);
      }
    } else {
      setSelectedItem(null);
    }
  }, [paginatedData]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Cari berdasarkan ID, judul, atau deskripsi..."
          className="w-full lg:w-1/2 p-2 border rounded bg-white text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />{" "}
        <select
          className="w-full lg:w-1/4 p-2 border rounded bg-white text-sm"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          {" "}
          <option value="all">Semua Tipe</option>
          <option value="Barang">Barang</option>
        </select>
        <select
          className="w-full lg:w-1/4 p-2 border rounded bg-white text-sm"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          {" "}
          <option value="all">Semua Status</option>
          <option value="Dalam Perjalanan">Dalam Perjalanan</option>
          <option value="Di Lokasi">Di Lokasi</option>
          <option value="Menunggu Pengiriman">Menunggu Pengiriman</option>
          <option value="Terkirim">Terkirim</option>
          <option value="Menunggu Persetujuan">Menunggu Persetujuan</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          {paginatedData.length > 0 ? (
            paginatedData.map((item) => (
              <div
                key={item.id}
                className={`border rounded-lg p-4 shadow-sm cursor-pointer bg-white transition-all duration-200 
                                ${
                                  selectedItem?.id === item.id
                                    ? "border-blue-500 ring-2 ring-blue-300"
                                    : "hover:shadow-md hover:border-gray-300"
                                }`}
                onClick={() => setSelectedItem(item)}
              >
                <h3 className="font-semibold text-xl text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3 leading-tight line-clamp-2">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-sm text-gray-700">
                  <div>
                    <strong>ID:</strong> {item.id}
                  </div>
                  <div>
                    <strong>Tipe:</strong> {item.type}
                  </div>
                  <div>
                    <strong>Mulai:</strong> {item.startDate}
                  </div>
                  <div>
                    <strong>Target:</strong> {item.estimatedDate}
                  </div>
                  <div className="col-span-2">
                    <strong>PIC:</strong> {item.assignedTo}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500 bg-white rounded-lg border shadow-sm">
              Tidak ada data ditemukan
            </div>
          )}
          {paginatedData.length > 0 && (
            <Pagination
              totalItems={filteredData.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
        <div className="border rounded-lg p-6 shadow-sm bg-white self-start sticky top-6 min-h-[400px]">
          {selectedItem ? (
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {selectedItem.title}
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-base mb-4">
                {" "}
                <p>
                  <strong>ID Tracking:</strong> {selectedItem.id}
                </p>
                <p>
                  <strong>Tipe:</strong> {selectedItem.type}
                </p>
                <p>
                  <strong>Lokasi Saat Ini:</strong>{" "}
                  {selectedItem.currentLocation}
                </p>
                <p>
                  <strong>PIC:</strong> {selectedItem.assignedTo}
                </p>
              </div>

              <div className="mb-4">
                <strong className="text-base block text-gray-800 mb-1">
                  Deskripsi:
                </strong>
                <p className="text-base text-gray-600">
                  {selectedItem.description}
                </p>
              </div>

              <div>
                <strong className="text-base block text-gray-800 mb-2">
                  Timeline:
                </strong>
                <div className="space-y-4 border-l-2 border-blue-300 pl-4 max-h-[220px] overflow-y-auto pr-2">
                  {timelineData && timelineData[selectedItem.id] ? (
                    timelineData[selectedItem.id].map((event, index) => (
                      <div key={index} className="relative">
                        <div
                          className={`absolute -left-[31px] top-1 w-3.5 h-3.5 bg-blue-500 rounded-full border-2 border-white`}
                        ></div>
                        <div className="ml-2">
                          <p className="font-medium text-sm text-gray-700">
                            {event.status}
                          </p>
                          <p className="text-xs text-gray-500">
                            {event.date} - {event.time}
                          </p>
                          <p className="text-xs text-gray-500">
                            @{event.location}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">
                      Timeline tidak tersedia.
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-center text-gray-500">
              Pilih item dari daftar untuk melihat detail tracking.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
