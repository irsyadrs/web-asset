"use client";

export default function NotificationSettings({ settings, onSettingChange, isDarkMode }) {
  const notificationLabels = {
    emailNotifications: 'Email Notifications',
    maintenanceReminders: 'Pengingat Maintenance',
    warrantyExpiry: 'Peringatan Garansi Habis',
    lowStock: 'Peringatan Stok Rendah',
    assetTransfer: 'Notifikasi Transfer Asset',
    disposalApproval: 'Approval Disposal Asset'
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold mb-4">Pengaturan Notifikasi</h2>
      <div className="space-y-4">
        {Object.entries(settings).map(([key, value]) => (
          <label key={key} className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors ${isDarkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'}`}>
            <div>
              <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {notificationLabels[key] || key}
              </span>
            </div>
            <div className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => onSettingChange('notifications', key, e.target.checked)}
                    className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}