"use client";

import { useState, useRef, useEffect } from "react";

export default function AddCategoryForm({ onClose, onAddCategory }) {
  const inputRef = useRef(null);

  const [formData, setFormData] = useState({
    code: "",
    abbr: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "code" && !/^[A-Za-z0-9]*$/.test(value)) {
      return;
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCategory(formData);
    setFormData({ code: "", abbr: "", title: "", description: "" });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Kode Kategori
        </label>
        <input
          type="text"
          name="code"
          value={formData.code}
          onChange={handleChange}
          ref={inputRef}
          required
          className="mt-1 block w-full rounded-md border border-gray-400 bg-gray-100 shadow-sm p-2 focus:outline-none focus:border-gray-600"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Singkatan
        </label>
        <input
          type="text"
          name="abbr"
          value={formData.abbr}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border border-gray-400 bg-gray-100 shadow-sm p-2 focus:outline-none focus:border-gray-600"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nama Kategori
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border border-gray-400 bg-gray-100 shadow-sm p-2 focus:outline-none focus:border-gray-600"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Deskripsi
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          className="mt-1 block w-full rounded-md border border-gray-400 bg-gray-100 shadow-sm p-2 focus:outline-none focus:border-gray-600"
        ></textarea>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          Batal
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Simpan
        </button>
      </div>
    </form>
  );
}
