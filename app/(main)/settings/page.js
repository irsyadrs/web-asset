"use client";
import { useState, useEffect } from "react";

function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [settings, setSettings] = useState({
    general: {
      companyName: "PT Solomon Indo Global",
      currency: "IDR",
      dateFormat: "DD/MM/YYYY",
      timezone: "Asia/Jakarta",
      language: "id",
      fiscalYearStart: "01-01"
    },
    assets: {
      autoGenerateId: true,
      idPrefix: "AST",
      depreciation: {
        method: "straight-line",
        defaultYears: 5
      },
      lowStockThreshold: 5,
      maintenanceAlert: 30,
      warrantyAlert: 90
    },
    notifications: {
      emailNotifications: true,
      maintenanceReminders: true,
      warrantyExpiry: true,
      lowStock: true,
      assetTransfer: true,
      disposalApproval: true
    },
    security: {
      sessionTimeout: 60,
      passwordComplexity: true,
      twoFactorAuth: false,
      ipRestriction: false,
      auditLog: true
    },
    backup: {
      autoBackup: true,
      backupFrequency: "daily",
      retentionDays: 30,
      cloudBackup: false
    }
  });

  const [saveStatus, setSaveStatus] = useState("");

  // Apply dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleSave = () => {
    setSaveStatus("saving");
    setTimeout(() => {
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus(""), 2000);
    }, 1000);
  };

  const handleSettingChange = (category, field, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const handleNestedSettingChange = (category, parentField, field, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [parentField]: {
          ...prev[category][parentField],
          [field]: value
        }
      }
    }));
  };

  const tabs = [
    { id: "general", label: "Umum", icon: "⚙️" },
    { id: "assets", label: "Asset", icon: "📦" },
    { id: "notifications", label: "Notifikasi", icon: "🔔" },
    { id: "security", label: "Keamanan", icon: "🔒" },
    { id: "backup", label: "Backup", icon: "💾" },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="p-6">
        <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
         <h1 className="text-xl font-bold text-gray-700 mb-2">System Settings</h1>
          
          {/* Tabs Navigation */}
          <div className="mb-6">
            <div className={`flex flex-wrap border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-4 py-2 mr-2 mb-2 rounded-t-lg transition-colors duration-200 ${
                    activeTab === tab.id
                      ? isDarkMode
                        ? 'bg-blue-600 text-white border-b-2 border-blue-500'
                        : 'bg-blue-500 text-white border-b-2 border-blue-500'
                      : isDarkMode
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Settings Content */}
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} p-6`}>
            
            {/* General Settings */}
            {activeTab === "general" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold mb-4">Pengaturan Umum</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Nama Perusahaan
                    </label>
                    <input
                      type="text"
                      value={settings.general.companyName}
                      onChange={(e) => handleSettingChange('general', 'companyName', e.target.value)}
                      className={`w-full p-3 border rounded-lg transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } focus:outline-none`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Mata Uang
                    </label>
                    <select
                      value={settings.general.currency}
                      onChange={(e) => handleSettingChange('general', 'currency', e.target.value)}
                      className={`w-full p-3 border rounded-lg transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } focus:outline-none`}
                    >
                      <option value="IDR">Indonesian Rupiah (IDR)</option>
                      <option value="USD">US Dollar (USD)</option>
                      <option value="EUR">Euro (EUR)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Format Tanggal
                    </label>
                    <select
                      value={settings.general.dateFormat}
                      onChange={(e) => handleSettingChange('general', 'dateFormat', e.target.value)}
                      className={`w-full p-3 border rounded-lg transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } focus:outline-none`}
                    >
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Zona Waktu
                    </label>
                    <select
                      value={settings.general.timezone}
                      onChange={(e) => handleSettingChange('general', 'timezone', e.target.value)}
                      className={`w-full p-3 border rounded-lg transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } focus:outline-none`}
                    >
                      <option value="Asia/Jakarta">Asia/Jakarta (WIB)</option>
                      <option value="Asia/Makassar">Asia/Makassar (WITA)</option>
                      <option value="Asia/Jayapura">Asia/Jayapura (WIT)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Asset Settings */}
            {activeTab === "assets" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold mb-4">Pengaturan Asset</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`flex items-center space-x-3 cursor-pointer`}>
                      <input
                        type="checkbox"
                        checked={settings.assets.autoGenerateId}
                        onChange={(e) => handleSettingChange('assets', 'autoGenerateId', e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Auto Generate Asset ID
                      </span>
                    </label>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Prefix Asset ID
                    </label>
                    <input
                      type="text"
                      value={settings.assets.idPrefix}
                      onChange={(e) => handleSettingChange('assets', 'idPrefix', e.target.value)}
                      className={`w-full p-3 border rounded-lg transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } focus:outline-none`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Metode Depresiasi
                    </label>
                    <select
                      value={settings.assets.depreciation.method}
                      onChange={(e) => handleNestedSettingChange('assets', 'depreciation', 'method', e.target.value)}
                      className={`w-full p-3 border rounded-lg transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } focus:outline-none`}
                    >
                      <option value="straight-line">Straight Line</option>
                      <option value="declining-balance">Declining Balance</option>
                      <option value="sum-of-years">Sum of Years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Default Masa Pakai (Tahun)
                    </label>
                    <input
                      type="number"
                      value={settings.assets.depreciation.defaultYears}
                      onChange={(e) => handleNestedSettingChange('assets', 'depreciation', 'defaultYears', parseInt(e.target.value))}
                      className={`w-full p-3 border rounded-lg transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } focus:outline-none`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Threshold Stok Rendah
                    </label>
                    <input
                      type="number"
                      value={settings.assets.lowStockThreshold}
                      onChange={(e) => handleSettingChange('assets', 'lowStockThreshold', parseInt(e.target.value))}
                      className={`w-full p-3 border rounded-lg transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } focus:outline-none`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Alert Maintenance (Hari)
                    </label>
                    <input
                      type="number"
                      value={settings.assets.maintenanceAlert}
                      onChange={(e) => handleSettingChange('assets', 'maintenanceAlert', parseInt(e.target.value))}
                      className={`w-full p-3 border rounded-lg transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } focus:outline-none`}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Settings */}
            {activeTab === "notifications" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold mb-4">Pengaturan Notifikasi</h2>
                
                <div className="space-y-4">
                  {Object.entries(settings.notifications).map(([key, value]) => (
                    <label key={key} className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <div>
                        <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {key === 'emailNotifications' && 'Email Notifications'}
                          {key === 'maintenanceReminders' && 'Pengingat Maintenance'}
                          {key === 'warrantyExpiry' && 'Peringatan Garansi Habis'}
                          {key === 'lowStock' && 'Peringatan Stok Rendah'}
                          {key === 'assetTransfer' && 'Notifikasi Transfer Asset'}
                          {key === 'disposalApproval' && 'Approval Disposal Asset'}
                        </span>
                      </div>
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={(e) => handleSettingChange('notifications', key, e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold mb-4">Pengaturan Keamanan</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Session Timeout (Menit)
                    </label>
                    <input
                      type="number"
                      value={settings.security.sessionTimeout}
                      onChange={(e) => handleSettingChange('security', 'sessionTimeout', parseInt(e.target.value))}
                      className={`w-full p-3 border rounded-lg transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } focus:outline-none`}
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Password Complexity Required
                    </span>
                    <input
                      type="checkbox"
                      checked={settings.security.passwordComplexity}
                      onChange={(e) => handleSettingChange('security', 'passwordComplexity', e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                  </label>
                  
                  <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Two Factor Authentication
                    </span>
                    <input
                      type="checkbox"
                      checked={settings.security.twoFactorAuth}
                      onChange={(e) => handleSettingChange('security', 'twoFactorAuth', e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                  </label>
                  
                  <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Audit Log
                    </span>
                    <input
                      type="checkbox"
                      checked={settings.security.auditLog}
                      onChange={(e) => handleSettingChange('security', 'auditLog', e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                  </label>
                </div>
              </div>
            )}

            {/* Backup Settings */}
            {activeTab === "backup" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold mb-4">Pengaturan Backup</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Frekuensi Backup
                    </label>
                    <select
                      value={settings.backup.backupFrequency}
                      onChange={(e) => handleSettingChange('backup', 'backupFrequency', e.target.value)}
                      className={`w-full p-3 border rounded-lg transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } focus:outline-none`}
                    >
                      <option value="daily">Harian</option>
                      <option value="weekly">Mingguan</option>
                      <option value="monthly">Bulanan</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Retention (Hari)
                    </label>
                    <input
                      type="number"
                      value={settings.backup.retentionDays}
                      onChange={(e) => handleSettingChange('backup', 'retentionDays', parseInt(e.target.value))}
                      className={`w-full p-3 border rounded-lg transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } focus:outline-none`}
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Auto Backup
                    </span>
                    <input
                      type="checkbox"
                      checked={settings.backup.autoBackup}
                      onChange={(e) => handleSettingChange('backup', 'autoBackup', e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                  </label>
                  
                  <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Cloud Backup
                    </span>
                    <input
                      type="checkbox"
                      checked={settings.backup.cloudBackup}
                      onChange={(e) => handleSettingChange('backup', 'cloudBackup', e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                  </label>
                </div>
              </div>
            )}

            {/* Appearance Settings */}
            {activeTab === "appearance" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold mb-4">Pengaturan Tampilan</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
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
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Bahasa Interface
                      </label>
                      <select
                        value={settings.general.language}
                        onChange={(e) => handleSettingChange('general', 'language', e.target.value)}
                        className={`w-full p-3 border rounded-lg transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                            : 'bg-white border-gray-300 focus:border-blue-500'
                        } focus:outline-none`}
                      >
                        <option value="id">Bahasa Indonesia</option>
                        <option value="en">English</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="flex justify-end mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handleSave}
                disabled={saveStatus === "saving"}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  saveStatus === "saving"
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : saveStatus === "saved"
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                {saveStatus === "saving" && "Menyimpan..."}
                {saveStatus === "saved" && "✓ Tersimpan"}
                {!saveStatus && "Simpan Pengaturan"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;