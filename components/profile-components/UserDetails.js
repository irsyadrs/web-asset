// /components/profile/UserDetails.js
"use client";

import {
  EnvelopeIcon,
  PhoneIcon,
  BriefcaseIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function UserDetails({ user }) {
  const details = [
    {
      label: "Alamat Email",
      value: user.email,
      icon: <EnvelopeIcon className="w-5 h-5 text-gray-400" />,
    },
    {
      label: "Nomor Telepon",
      value: user.phone,
      icon: <PhoneIcon className="w-5 h-5 text-gray-400" />,
    },
    {
      label: "Tim/Departemen",
      value: user.team,
      icon: <BriefcaseIcon className="w-5 h-5 text-gray-400" />,
    },
    {
      label: "Lokasi",
      value: user.location,
      icon: <MapPinIcon className="w-5 h-5 text-gray-400" />,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold text-gray-800 border-b pb-3 mb-4">
        Detail Informasi
      </h3>
      <div className="space-y-4">
        {details.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">{item.icon}</div>
            <div className="flex-grow">
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="font-semibold text-gray-700">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
