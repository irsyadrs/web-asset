"use client";

export default function SettingsTabs({ tabs, activeTab, setActiveTab, isDarkMode }) {
  return (
    <div className={`flex flex-wrap border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-4 py-2 mr-2 mb-2 rounded-t-lg transition-colors duration-200 ${
            activeTab === tab.id
              ? isDarkMode ? 'bg-blue-600 text-white border-b-2 border-blue-500' : 'bg-blue-500 text-white border-b-2 border-blue-500'
              : isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          <span className="mr-2">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </div>
  );
}