"use client";

import { useState } from "react";
import Modal from "@/components/modal";

export default function MaintenanceScheduleView({ initialData }) {
    const [scheduleData, setScheduleData] = useState(initialData);
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

    const handleSaveSchedule = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newSchedule = {
            id: `SCH-00${scheduleData.length + 1}`,
            asset: formData.get('asset'),
            maintenanceType: formData.get('maintenanceType'),
            frequency: formData.get('frequency'),
            nextDate: formData.get('nextDate'),
            pic: formData.get('pic'),
        };
        setScheduleData(prev => [...prev, newSchedule]);
        setIsScheduleModalOpen(false);
    };

    return (
        <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Jadwal Pemeliharaan Rutin</h2>
                <button onClick={() => setIsScheduleModalOpen(true)} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Tambah Jadwal Baru
                </button>
            </div>
            <div className="border rounded overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aset</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tipe</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Frekuensi</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Jadwal Berikutnya</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">PIC</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {scheduleData.map((s) => (<tr key={s.id}><td className="px-6 py-4 text-sm">{s.asset}</td><td className="px-6 py-4 text-sm">{s.maintenanceType}</td><td className="px-6 py-4 text-sm">{s.frequency}</td><td className="px-6 py-4 text-sm">{s.nextDate}</td><td className="px-6 py-4 text-sm">{s.pic}</td></tr>))}
                    </tbody>
                </table>
            </div>

            <Modal isOpen={isScheduleModalOpen} onClose={() => setIsScheduleModalOpen(false)} title="Tambah Jadwal Baru">
                <form onSubmit={handleSaveSchedule} className="space-y-4 pt-2">
                     <div><label className="block text-sm font-medium text-gray-700">Aset</label><input name="asset" type="text" required className="mt-1 w-full p-2 border rounded" /></div><div><label className="block text-sm font-medium text-gray-700">Tipe Pemeliharaan</label><input name="maintenanceType" type="text" required className="mt-1 w-full p-2 border rounded" /></div><div><label className="block text-sm font-medium text-gray-700">Frekuensi</label><input name="frequency" type="text" placeholder="Contoh: Bulanan, 3 Bulan" required className="mt-1 w-full p-2 border rounded" /></div><div><label className="block text-sm font-medium text-gray-700">Tanggal Berikutnya</label><input name="nextDate" type="date" required className="mt-1 w-full p-2 border rounded" /></div><div><label className="block text-sm font-medium text-gray-700">PIC</label><input name="pic" type="text" required className="mt-1 w-full p-2 border rounded" /></div>
                    <div className="pt-2 flex justify-end gap-3"><button type="button" onClick={() => setIsScheduleModalOpen(false)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Batal</button><button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Simpan Jadwal</button></div>
                </form>
            </Modal>
        </div>
    );
}