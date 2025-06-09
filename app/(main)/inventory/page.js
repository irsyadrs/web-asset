"use client";

import { useState } from "react";
import InventoryTitle from "@/components/inventory-components/title";
import AssetTable from "@/components/inventory-components/table";
import Pagination from "@/components/pagination";

const dummyAssets = [
  {
    id: 1,
    assetNumber: "001",
    assetName: "Laptop HP ProBook",
    pic: "John Doe",
    division: "IT",
    status: "Tersedia",
    lastUpdate: "2024-10-28",
  },
  {
    id: 2,
    assetNumber: "002",
    assetName: "Proyektor Epson",
    pic: "Jane Smith",
    division: "HCGA",
    status: "Maintenance",
    lastUpdate: "2024-03-11",
  },
  {
    id: 3,
    assetNumber: "003",
    assetName: "Kamera Canon EOS",
    pic: "Michael Brown",
    division: "Brand",
    status: "Digunakan",
    lastUpdate: "2024-05-05",
  },
  {
    id: 4,
    assetNumber: "004",
    assetName: "Mobil Operasional",
    pic: "Emily Clark",
    division: "General",
    status: "Tersedia",
    lastUpdate: "2023-11-25",
  },
  {
    id: 5,
    assetNumber: "005",
    assetName: "Printer Canon LBP2900",
    pic: "Samuel Green",
    division: "Finance",
    status: "Maintenance",
    lastUpdate: "2023-08-14",
  },
  {
    id: 6,
    assetNumber: "006",
    assetName: "Meja Rapat",
    pic: "Natalie White",
    division: "Retail",
    status: "Digunakan",
    lastUpdate: "2024-01-07",
  },
];

export default function InventoryPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    division: [],
    status: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleFilterApply = (filters) => {
    setSelectedFilters(filters);
    setCurrentPage(1);
  };

  const filteredAssets = dummyAssets.filter(
    (asset) =>
      (selectedFilters.division.length === 0 ||
        selectedFilters.division.includes(asset.division)) &&
      (selectedFilters.status.length === 0 ||
        selectedFilters.status.includes(asset.status))
  );

  const paginatedAssets = filteredAssets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <InventoryTitle onFilterApply={handleFilterApply} />

      <AssetTable assets={paginatedAssets} />

      <Pagination
        totalItems={filteredAssets.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
