"use client";

export default function AppearanceSettings({ settings, onSettingChange, isDarkMode, setIsDarkMode }) {
    const inputClass = `w-full p-3 border rounded-lg transition-colors ${
    isDarkMode 
      ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
      : 'bg-white border-gray-300 focus:border-blue-500'
  } focus:outline-none`;
  const labelClass = `block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`;

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold mb-4">Pengaturan Tampilan</h2>
      
      <div className="space-y-6">
        <div className={`flex items-center justify-between p-4 border rounded-lg ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div>
            <h3 className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Dark Mode
            </h3>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Menggunakan tema gelap untuk mengurangi kelelahan mata
            </p>
          </div>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isDarkMode ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isDarkMode ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>
              Bahasa Interface
            </label>
            <select
              value={settings.language}
              onChange={(e) => onSettingChange('general', 'language', e.target.value)}
              className={inputClass}
            >
              <option value="id">Bahasa Indonesia</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}