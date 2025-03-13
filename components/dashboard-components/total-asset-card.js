"use client";

import Link from "next/link";

export default function TotalAssetCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-gray-600 text-lg">Total Asset</h2>
      <p className="text-4xl font-bold">145</p>
      <Link href="/inventory" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">
        Kelola lebih lanjut
      </Link>
    </div>
  );
}
