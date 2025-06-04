// components/maintenance-components/NewMaintenanceForm.js
"use client";

export default function NewMaintenanceForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // alert("Form laporan pemeliharaan baru telah dikirim!");
        // Logika untuk mengirim data form ke API
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded border shadow-sm space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ID Aset</label>
                    <input type="text" placeholder="Masukkan ID Aset" className="w-full p-2 border rounded" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Aset</label>
                    <input type="text" placeholder="Nama Aset" className="w-full p-2 border rounded" required />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Masalah</label>
                <textarea placeholder="Jelaskan masalah dengan detail" className="w-full p-2 border rounded h-24" required></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select className="w-full p-2 border rounded" required>
                        <option value="">Pilih status</option>
                        <option value="menunggu">Menunggu Persetujuan</option>
                        <option value="proses">Dalam Proses</option>
                        <option value="selesai">Selesai</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Laporan</label>
                    <input type="date" className="w-full p-2 border rounded" defaultValue={new Date().toISOString().substring(0, 10)} required />
                </div>
            </div>
            <div className="pt-4">
                <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Kirim Laporan Pemeliharaan
                </button>
            </div>
        </form>
    );
}