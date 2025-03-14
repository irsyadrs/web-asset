"use client";

import { useState, useCallback, useEffect } from "react";
import CategoryNav from "@/components/category-components/category-nav";
import CategoryTable from "@/components/category-components/category-table";
import Pagination from "@/components/pagination";

const categories = {
  "Activa Type": [
    {
      code: "A001",
      abbrv: "PROP",
      title: "Properti",
      description: "Bangunan & tanah",
    },
    {
      code: "A002",
      abbrv: "KEND",
      title: "Kendaraan",
      description: "Mobil & motor",
    },
    {
      code: "A003",
      abbrv: "PERA",
      title: "Peralatan",
      description: "Alat produksi",
    },
    {
      code: "A004",
      abbrv: "PERL",
      title: "Perlengkapan",
      description: "Barang pendukung",
    },
    {
      code: "A005",
      abbrv: "TI",
      title: "Teknologi Informasi",
      description: "Perangkat IT",
    },
  ],
  "Location Code": [
    {
      code: "L001",
      abbrv: "HO",
      title: "Head Office",
      description: "Kantor pusat",
    },
    {
      code: "L002",
      abbrv: "WH",
      title: "Warehouse",
      description: "Gudang penyimpanan",
    },
    {
      code: "L003",
      abbrv: "SL",
      title: "Studio Live",
      description: "Studio siaran langsung",
    },
  ],
  "Team Code": [
    { code: "T001", abbrv: "GEN", title: "General", description: "Umum" },
    { code: "T002", abbrv: "CHIEF", title: "Chief", description: "Pimpinan" },
    {
      code: "T003",
      abbrv: "STR",
      title: "Strategic",
      description: "Tim strategi",
    },
    {
      code: "T004",
      abbrv: "CRE",
      title: "Creative",
      description: "Tim kreatif",
    },
    {
      code: "T005",
      abbrv: "MKT",
      title: "Marketing",
      description: "Tim pemasaran",
    },
    { code: "T006", abbrv: "BRAND", title: "Brand", description: "Tim merek" },
    {
      code: "T007",
      abbrv: "COM",
      title: "Commercial Business",
      description: "Tim bisnis",
    },
    { code: "T008", abbrv: "HCGA", title: "HCGA", description: "Tim HR & GA" },
    {
      code: "T009",
      abbrv: "SCM",
      title: "SCM",
      description: "Supply Chain Management",
    },
    {
      code: "T010",
      abbrv: "PID",
      title: "PID",
      description: "Project Implementation",
    },
    { code: "T011", abbrv: "IT", title: "IT", description: "Tim Teknologi" },
    { code: "T012", abbrv: "RTL", title: "Retail", description: "Tim retail" },
    { code: "T013", abbrv: "FIN", title: "Finance", description: "Keuangan" },
  ],
};

export default function CategoriesPage() {
  const [activeCategory, setActiveCategory] = useState("Activa Type");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 5;

  const currentCategoryData = categories[activeCategory] || [];
  const totalItems = currentCategoryData.length;
  const paginatedCategory = currentCategoryData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const onOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    console.log("Menutup modal!");
    setIsModalOpen(false);
  }, []);

  
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-700 mb-2">Categories</h1>
      </div>

      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        onOpenModal={onOpenModal}
      />

      <CategoryTable data={paginatedCategory} />

      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

    </main>
  );
}
