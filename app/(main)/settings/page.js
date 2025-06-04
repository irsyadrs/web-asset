"use client";

import { useState, useEffect } from "react";
import SettingsTabs from "@/components/setting-components/SettingsTabs";
import GeneralSettings from "@/components/setting-components/GeneralSettings";
import NotificationSettings from "@/components/setting-components/NotificationSettings";
import SecuritySettings from "@/components/setting-components/SecuritySettings";
import BackupSettings from "@/components/setting-components/BackupSettings";

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
    { id: "notifications", label: "Notifikasi", icon: "🔔" },
    { id: "security", label: "Keamanan", icon: "🔒" },
    { id: "backup", label: "Backup", icon: "💾" },
  ];

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case "general":
        return <GeneralSettings settings={settings.general} onSettingChange={handleSettingChange} />;
      case "notifications":
        return <NotificationSettings settings={settings.notifications} onSettingChange={handleSettingChange}/>;
      case "security":
        return <SecuritySettings settings={settings.security} onSettingChange={handleSettingChange} />;
      case "backup":
        return <BackupSettings settings={settings.backup} onSettingChange={handleSettingChange}/>;
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