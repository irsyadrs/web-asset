"use client";

export default function AssetSettings({ settings, onSettingChange, onNestedChange, isDarkMode }) {
    const inputClass = `w-full p-3 border rounded-lg transition-colors ${
    isDarkMode 
      ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
      : 'bg-white border-gray-300 focus:border-blue-500'
  } focus:outline-none`;
  const labelClass = `block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`;

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold mb-4">Pengaturan Asset</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center">
             <label className={`flex items-center space-x-3 cursor-pointer`}>
                <input type="checkbox" checked={settings.autoGenerateId} onChange={(e) => onSettingChange('assets', 'autoGenerateId', e.target.checked)} className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Auto Generate Asset ID</span>
            </label>
        </div>
        <div>
            <label className={labelClass}>Prefix Asset ID</label>
            <input type="text" value={settings.idPrefix} onChange={(e) => onSettingChange('assets', 'idPrefix', e.target.value)} className={inputClass} />
        </div>
        <div>
            <label className={labelClass}>Metode Depresiasi</label>
            <select value={settings.depreciation.method} onChange={(e) => onNestedChange('assets', 'depreciation', 'method', e.target.value)} className={inputClass}>
                <option value="straight-line">Straight Line</option>
                <option value="declining-balance">Declining Balance</option>
                <option value="sum-of-years">Sum of Years</option>
            </select>
        </div>
        <div>
            <label className={labelClass}>Default Masa Pakai (Tahun)</label>
            <input type="number" value={settings.depreciation.defaultYears} onChange={(e) => onNestedChange('assets', 'depreciation', 'defaultYears', parseInt(e.target.value))} className={inputClass} />
        </div>
        <div>
            <label className={labelClass}>Threshold Stok Rendah</label>
            <input type="number" value={settings.lowStockThreshold} onChange={(e) => onSettingChange('assets', 'lowStockThreshold', parseInt(e.target.value))} className={inputClass} />
        </div>
        <div>
            <label className={labelClass}>Alert Maintenance (Hari)</label>
            <input type="number" value={settings.maintenanceAlert} onChange={(e) => onSettingChange('assets', 'maintenanceAlert', parseInt(e.target.value))} className={inputClass} />
        </div>
      </div>
    </div>
  );
}