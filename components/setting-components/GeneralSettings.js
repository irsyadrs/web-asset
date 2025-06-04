"use client";

export default function GeneralSettings({ settings, onSettingChange, isDarkMode }) {
  const inputClass = `w-full p-3 border rounded-lg transition-colors ${
    isDarkMode 
      ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
      : 'bg-white border-gray-300 focus:border-blue-500'
  } focus:outline-none`;
  const labelClass = `block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`;

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold mb-4">Pengaturan Umum</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Nama Perusahaan</label>
          <input type="text" value={settings.companyName} onChange={(e) => onSettingChange('general', 'companyName', e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Mata Uang</label>
          <select value={settings.currency} onChange={(e) => onSettingChange('general', 'currency', e.target.value)} className={inputClass}>
            <option value="IDR">Indonesian Rupiah (IDR)</option>
            <option value="USD">US Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Format Tanggal</label>
          <select value={settings.dateFormat} onChange={(e) => onSettingChange('general', 'dateFormat', e.target.value)} className={inputClass}>
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Zona Waktu</label>
          <select value={settings.timezone} onChange={(e) => onSettingChange('general', 'timezone', e.target.value)} className={inputClass}>
            <option value="Asia/Jakarta">Asia/Jakarta (WIB)</option>
            <option value="Asia/Makassar">Asia/Makassar (WITA)</option>
            <option value="Asia/Jayapura">Asia/Jayapura (WIT)</option>
          </select>
        </div>
      </div>
    </div>
  );
}