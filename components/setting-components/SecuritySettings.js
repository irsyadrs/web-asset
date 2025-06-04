"use client";

export default function SecuritySettings({ settings, onSettingChange, isDarkMode }) {
  const inputClass = `w-full p-3 border rounded-lg transition-colors ${
    isDarkMode 
      ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
      : 'bg-white border-gray-300 focus:border-blue-500'
  } focus:outline-none`;
  const labelClass = `block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`;

  const securityToggles = {
    passwordComplexity: "Password Complexity Required",
    twoFactorAuth: "Two Factor Authentication",
    auditLog: "Audit Log"
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold mb-4">Pengaturan Keamanan</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>
            Session Timeout (Menit)
          </label>
          <input
            type="number"
            value={settings.sessionTimeout}
            onChange={(e) => onSettingChange('security', 'sessionTimeout', parseInt(e.target.value))}
            className={inputClass}
          />
        </div>
      </div>
      
      <div className="space-y-4">
        {Object.entries(securityToggles).map(([key, label]) => (
            <label key={key} className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors ${isDarkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'}`}>
                <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {label}
                </span>
                <div className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={settings[key]}
                        onChange={(e) => onSettingChange('security', key, e.target.checked)}
                        className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </div>
            </label>
        ))}
      </div>
    </div>
  );
}