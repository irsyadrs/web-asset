"use client";

export default function NewItemForm({ onSubmitForm, onCancel }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = {
      type: formData.get("type"),
      title: formData.get("title"),
      description: formData.get("description"),
    };
    onSubmitForm(newItem);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipe Item
          </label>
          <select name="type" className="w-full p-2 border rounded">
            <option value="Barang">Barang</option>
            <option value="Proyek">Proyek</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Judul
          </label>
          <input
            name="title"
            type="text"
            placeholder="Masukkan judul item"
            required
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tanggal Mulai
          </label>
          <input
            type="date"
            className="w-full p-2 border rounded"
            defaultValue={new Date().toISOString().substring(0, 10)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tanggal Target
          </label>
          <input
            type="date"
            className="w-full p-2 border rounded"
            defaultValue={new Date().toISOString().substring(0, 10)}
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Deskripsi
        </label>
        <textarea
          name="description"
          placeholder="Jelaskan detail item"
          className="w-full p-2 border rounded h-24"
        ></textarea>
      </div>
      <div className="pt-4 flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          Batal
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Buat Item Tracking
        </button>
      </div>
    </form>
  );
}
