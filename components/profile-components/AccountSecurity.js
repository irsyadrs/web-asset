"use client";

import {
  KeyIcon,
  ShieldCheckIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function AccountSecurity({ user }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold text-gray-800 border-b pb-3 mb-4">
        Keamanan Akun
      </h3>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <KeyIcon className="w-5 h-5 text-gray-400" />
            <span className="text-gray-700">Kata Sandi</span>
          </div>
          <button className="text-sm text-blue-600 hover:underline">
            Ubah
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ShieldCheckIcon className="w-5 h-5 text-gray-400" />
            <span className="text-gray-700">Autentikasi 2 Faktor</span>
          </div>
          <span
            className={`text-sm px-2 py-0.5 rounded-full ${
              user.twoFactorEnabled
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {user.twoFactorEnabled ? "Aktif" : "Tidak Aktif"}
          </span>
        </div>

        <div className="flex items-start space-x-3 pt-4 border-t">
          <ClockIcon className="w-5 h-5 text-gray-400 mt-0.5" />
          <div>
            <p className="text-sm text-gray-700">Login Terakhir</p>
            <p className="text-xs text-gray-500">
              {user.lastLogin.timestamp} dari IP {user.lastLogin.ip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
