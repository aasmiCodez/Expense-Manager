"use client";

import { useAuth } from "@/contexts/AuthContext";

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: any) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
}

export default function Navigation({
  currentPage,
  setCurrentPage,
  sidebarOpen,
  setSidebarOpen,
  sidebarCollapsed,
  setSidebarCollapsed,
}: NavigationProps) {
  const { user, logout } = useAuth();

  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
    },
    {
      id: "add",
      label: "Add Expense",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      ),
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
          />
        </svg>
      ),
    },
    {
      id: "budget",
      label: "Budget",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: "settings",
      label: "Settings",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Modern Mobile header */}
      <div className="lg:hidden bg-white/90 backdrop-blur-lg shadow-sm border-b px-4 py-4 flex items-center justify-between sticky-header safe-area-top">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-md border border-gray-100">
            <svg
              className="w-5 h-5 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r text-gray-900">
            ExpenseTracker
          </h1>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-3 rounded-xl hover:bg-gray-100 transition-all duration-200 hover:scale-105 touch-target"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-white/95 backdrop-blur-xl shadow-2xl border-r border-purple-500/30 transform transition-all duration-300 ease-out lg:transform-purple lg:shadow-lg ${sidebarCollapsed ? "w-20 lg:w-20" : "w-72 lg:w-64"} ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center px-6 py-6 border-b border-purple-500/30 bg-gradient-to-r from-white to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="relative z-10 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg border border-purple-100">
            <svg
              className="w-7 h-7 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>
          </div>
          {!sidebarCollapsed && (
            <div className="ml-3">
              <span className="text-xl font-bold bg-gradient-to-r text-gray-900">
                ExpenseTracker
              </span>
              <p className="text-xs text-gray-600 mt-1">
                Modern Finance Management
              </p>
            </div>
          )}
          {/* Collapse Toggle - Desktop Only */}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="hidden lg:flex absolute -right-3 top-1/2 transform -translate-y-1/2 w-7 h-7 bg-purple-100 border border-purple-500/50 rounded-full items-center justify-center hover:bg-purple-200 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            <svg
              className={`w-3 h-3 text-gray-600 transition-transform duration-200 ${sidebarCollapsed ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        {/* User info */}
        <div className="px-6 py-5 border-b bg-gradient-to-r from-purple-50 to-white">
          <div className="flex items-center">
            <div className="relative">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-purple-100">
                <span className="text-purple-600 font-semibold text-lg">
                  {user?.name?.charAt(0)}
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            {!sidebarCollapsed && (
              <div className="flex-1 ml-4">
                <p className="font-semibold text-gray-900">{user?.name}</p>
                <p className="text-sm text-gray-600">{user?.email}</p>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-xs text-green-600 font-medium">
                    Active
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6 flex-1">
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center ${sidebarCollapsed ? "px-2 py-4 justify-center" : "px-4 py-4"} rounded-xl transition-all duration-300 hover:scale-105 animate-slide-in-left ${
                  currentPage === item.id
                    ? "bg-gradient-to-r from-purple-50 to-purple-100 text-black shadow-md border border-purple-200"
                    : "text-black hover:bg-purple-50 hover:shadow-sm"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                title={sidebarCollapsed ? item.label : ""}
              >
                <div
                  className={`${sidebarCollapsed ? "" : "mr-4"} p-2 rounded-lg transition-all duration-200 ${
                    currentPage === item.id
                      ? "bg-purple-100 text-gray-600 shadow-sm"
                      : "bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600 hover:shadow-sm border border-gray-100"
                  }`}
                >
                  {item.icon}
                </div>
                {!sidebarCollapsed && (
                  <>
                    <span className="font-medium">{item.label}</span>
                    {currentPage === item.id && (
                      <div className="ml-auto w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                    )}
                  </>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Logout button */}
        <div className="absolute bottom-6 left-4 right-4 safe-area-bottom">
          {!sidebarCollapsed && (
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-3 mb-4">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
                <span className="text-xs text-orange-700 font-medium">
                  Remember to track your expenses!
                </span>
              </div>
            </div>
          )}
          <button
            onClick={logout}
            className={`w-full flex items-center ${sidebarCollapsed ? "justify-center px-2" : "justify-center px-4"} py-4 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-200 hover:scale-105 border border-red-200 hover:border-red-300`}
            title={sidebarCollapsed ? "Sign Out" : ""}
          >
            <svg
              className={`w-5 h-5 ${sidebarCollapsed ? "" : "mr-3"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            {!sidebarCollapsed && <span className="font-medium">Sign Out</span>}
          </button>
        </div>
      </div>
    </>
  );
}
