// components/tracking-components/TrackingAnalyticsView.js
"use client";

export default function TrackingAnalyticsView({ trackingData }) {
    const totalItems = trackingData.length;
    const onGoingItems = trackingData.filter(item => !['terkirim', 'di lokasi'].includes(item.status.toLowerCase())).length;
    const completedItems = trackingData.filter(item => ['terkirim', 'di lokasi'].includes(item.status.toLowerCase())).length;
    const averageProgress = totalItems > 0 ? Math.round(trackingData.reduce((sum, item) => sum + item.progress, 0) / totalItems) : 0;

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h3 className="text-sm font-medium text-gray-500">Total Item</h3>
                    <p className="text-2xl font-bold text-blue-600">{totalItems}</p>
                </div>
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h3 className="text-sm font-medium text-gray-500">Dalam Proses</h3>
                    <p className="text-2xl font-bold text-yellow-600">{onGoingItems}</p>
                </div>
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h3 className="text-sm font-medium text-gray-500">Selesai</h3>
                    <p className="text-2xl font-bold text-green-600">{completedItems}</p>
                </div>
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h3 className="text-sm font-medium text-gray-500">Rata-rata Progress</h3>
                    <p className="text-2xl font-bold text-purple-600">{averageProgress}%</p>
                </div>
            </div>
            {/* Anda bisa menambahkan chart atau tabel distribusi lain di sini */}
        </div>
    );
}