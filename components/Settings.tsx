"use client";

import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Settings() {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || "Aasmi C",
    email: user?.email || "aasmi@example.com",
    currency: "INR",
    language: "English",
    timezone: "Asia/Kolkata",
  });

  const [notifications, setNotifications] = useState({
    budgetAlerts: true,
    expenseReminders: false,
    weeklyReports: true,
    monthlyReports: true,
  });

  const handleSaveProfile = () => {
    // In a real app, this would update the user profile via API
    console.log("Saving profile:", profileData);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const exportData = (format: string) => {
    // Simulate data export
    console.log(`Exporting data in ${format} format...`);
    alert(`Exporting data in ${format} format...`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Settings
        </h1>
        <p className="text-gray-600 mt-1">
          Manage your account preferences and app settings
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Profile Information
              </h3>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {isEditing ? "Cancel" : "Edit"}
              </button>
            </div>

            <div className="flex items-center space-x-6 mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">
                  {profileData.name.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  {profileData.name}
                </h4>
                <p className="text-gray-500">{profileData.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) =>
                    setProfileData({ ...profileData, name: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) =>
                    setProfileData({ ...profileData, email: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Default Currency
                </label>
                <select
                  value={profileData.currency}
                  onChange={(e) =>
                    setProfileData({ ...profileData, currency: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                >
                  <option value="INR">Indian Rupee (₹)</option>
                  <option value="USD">US Dollar ($)</option>
                  <option value="EUR">Euro (€)</option>
                  <option value="GBP">British Pound (£)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <select
                  value={profileData.language}
                  onChange={(e) =>
                    setProfileData({ ...profileData, language: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                </select>
              </div>
            </div>

            {isEditing && (
              <div className="flex justify-end mt-6">
                <button
                  onClick={handleSaveProfile}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Notification Preferences
            </h3>

            <div className="space-y-4">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </p>
                    <p className="text-sm text-gray-500">
                      {key === "budgetAlerts" &&
                        "Get notified when approaching budget limits"}
                      {key === "expenseReminders" &&
                        "Daily reminders to log expenses"}
                      {key === "weeklyReports" && "Weekly spending summary"}
                      {key === "monthlyReports" && "Monthly financial report"}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) =>
                        setNotifications({
                          ...notifications,
                          [key]: e.target.checked,
                        })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Data & Export */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Data & Export
            </h3>

            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-2">
                  Export Your Data
                </h4>
                <p className="text-sm text-blue-700 mb-4">
                  Download your expense data in various formats
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => exportData("CSV")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Export as CSV
                  </button>
                  <button
                    onClick={() => exportData("PDF")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Export as PDF
                  </button>
                  <button
                    onClick={() => exportData("JSON")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Export as JSON
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Account Info */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Account Information
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-gray-600">Member since:</span>
                <span className="ml-2 font-medium">March 2023</span>
              </div>
              <div>
                <span className="text-gray-600">Total transactions:</span>
                <span className="ml-2 font-medium">1,247</span>
              </div>
              <div>
                <span className="text-gray-600">Categories used:</span>
                <span className="ml-2 font-medium">8</span>
              </div>
              <div>
                <span className="text-gray-600">Data exported:</span>
                <span className="ml-2 font-medium">3 times</span>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Security
            </h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="font-medium text-gray-900">Change Password</div>
                <div className="text-sm text-gray-500">
                  Update your account password
                </div>
              </button>
              <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="font-medium text-gray-900">
                  Two-Factor Authentication
                </div>
                <div className="text-sm text-gray-500">
                  Add extra security to your account
                </div>
              </button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-red-600 mb-4">
              Danger Zone
            </h3>
            <div className="space-y-3">
              <button
                onClick={logout}
                className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
              <button className="w-full border border-red-300 text-red-600 py-2 px-4 rounded-lg hover:bg-red-50 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
