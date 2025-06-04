// /components/profile/RecentActivity.js
"use client";

import { ArrowRightOnRectangleIcon, PlusCircleIcon, PencilIcon, DocumentChartBarIcon, KeyIcon } from "@heroicons/react/24/outline";

const iconMap = {
  login: <ArrowRightOnRectangleIcon className="w-5 h-5 text-white"/>,
  add: <PlusCircleIcon className="w-5 h-5 text-white"/>,
  update: <PencilIcon className="w-5 h-5 text-white"/>,
  report: <DocumentChartBarIcon className="w-5 h-5 text-white"/>,
  password: <KeyIcon className="w-5 h-5 text-white"/>
};

const colorMap = {
  login: "bg-blue-500",
  add: "bg-green-500",
  update: "bg-yellow-500",
  report: "bg-purple-500",
  password: "bg-red-500"
};

export default function RecentActivity({ activities }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold text-gray-800 border-b pb-3 mb-4">Aktivitas Terakhir</h3>
      <ul className="space-y-4">
        {activities.map(activity => (
          <li key={activity.id} className="flex items-start space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${colorMap[activity.icon]}`}>
              {iconMap[activity.icon]}
            </div>
            <div className="flex-grow">
              <p className="text-sm text-gray-700">{activity.description}</p>
              <p className="text-xs text-gray-400">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}