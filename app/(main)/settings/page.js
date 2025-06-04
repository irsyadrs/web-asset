"use client";

import { useState, useEffect } from "react";
import SettingsTabs from "@/components/setting-components/SettingsTabs";
import GeneralSettings from "@/components/setting-components/GeneralSettings";
import AssetSettings from "@/components/setting-components/AssetSettings";
import NotificationSettings from "@/components/setting-components/NotificationSettings";
import SecuritySettings from "@/components/setting-components/SecuritySettings";
import BackupSettings from "@/components/setting-components/BackupSettings";
import AppearanceSettings from "@/components/setting-components/AppearanceSettings";

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
      fiscalYearStart: "01-01",
    },
    assets: {
      autoGenerateId: true,
      idPrefix: "AST",
      depreciation: {
        method: "straight-line",
        defaultYears: 5,
      },
      lowStockThreshold: 5,
      maintenanceAlert: 30,
      warrantyAlert: 90,
    },
    notifications: {
      emailNotifications: true,
      maintenanceReminders: true,
      warrantyExpiry: true,
      lowStock: true,
      assetTransfer: true,
      disposalApproval: true,
    },
    security: {
      sessionTimeout: 60,
      passwordComplexity: true,
      twoFactorAuth: false,
      ipRestriction: false,
      auditLog: true,
    },
    backup: {
      autoBackup: true,
      backupFrequency: "daily",
      retentionDays: 30,
      cloudBackup: false,
    },
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
    console.log("Saving settings:", settings); // You would typically send this to an API
    setTimeout(() => {
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus(""), 2000);
    }, 1000);
  };

  const handleSettingChange = (category, field, value) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value,
      },
    }));
  };

  const handleNestedSettingChange = (category, parentField, field, value) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [parentField]: {
          ...prev[category][parentField],
          [field]: value,
        },
      },
    }));
  };

  const tabs = [
    { id: "general", label: "Umum", icon: "⚙️" },
    { id: "assets", label: "Asset", icon: "📦" },
    { id: "notifications", label: "Notifikasi", icon: "🔔" },
    { id: "security", label: "Keamanan", icon: "🔒" },
    { id: "backup", label: "Backup", icon: "💾" },
    { id: "appearance", label: "Tampilan", icon: "🎨" },
  ];

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case "general":
        return <GeneralSettings settings={settings.general} onSettingChange={handleSettingChange} isDarkMode={isDarkMode} />;
      case "assets":
        return <AssetSettings settings={settings.assets} onSettingChange={handleSettingChange} onNestedChange={handleNestedSettingChange} isDarkMode={isDarkMode} />;
      case "notifications":
        return <NotificationSettings settings={settings.notifications} onSettingChange={handleSettingChange} isDarkMode={isDarkMode} />;
      case "security":
        return <SecuritySettings settings={settings.security} onSettingChange={handleSettingChange} isDarkMode={isDarkMode} />;
      case "backup":
        return <BackupSettings settings={settings.backup} onSettingChange={handleSettingChange} isDarkMode={isDarkMode} />;
      case "appearance":
        return <AppearanceSettings settings={settings.general} onSettingChange={handleSettingChange} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      <div className="p-6">
       <h1 className="text-xl font-bold text-gray-700 mb-2">System Setting</h1>
        
        <SettingsTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} />

        <div className={`mt-6 ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-sm border ${isDarkMode ? "border-gray-700" : "border-gray-200"} p-6`}>
          {renderActiveTabContent()}

          {/* Save Button */}
          <div className="flex justify-end mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button onClick={handleSave} disabled={saveStatus === "saving"} className={`px-6 py-2 rounded-lg font-medium transition-colors ${saveStatus === "saving" ? "bg-gray-400 text-white cursor-not-allowed" : saveStatus === "saved" ? "bg-green-500 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"}`}>
              {saveStatus === "saving" && "Menyimpan..."}
              {saveStatus === "saved" && "✓ Tersimpan"}
              {!saveStatus && "Simpan Pengaturan"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;