"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black text-center">
      <h1 className="text-9xl font-extrabold text-gray-500">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 mt-2">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 bg-gray-200 hover:bg-gray-300 text-gray-500 hover:text-gray-600 font-extrabold px-6 py-3 rounded-lg shadow-md inline-block"
      >
        Back to Home
      </Link>
    </div>
  );
}
