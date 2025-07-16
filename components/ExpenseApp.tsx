"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import MasonryDashboard from "./MasonryDashboard";
import AddExpense from "./AddExpense";
import Analytics from "./Analytics";
import Budget from "./Budget";
import Settings from "./Settings";
import Navigation from "./Navigation";

type Page =
  | "dashboard"
  | "masonry"
  | "add"
  | "analytics"
  | "budget"
  | "settings";

export default function ExpenseApp() {
  const { isAuthenticated, isLoading } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center safe-area-top safe-area-bottom relative overflow-hidden">
        <div className="text-center p-8 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-500/30 animate-scale-in relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-purple-400/10 to-purple-600/10 animate-pulse"></div>
          <div className="relative z-10">
            <div
              className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-6 shadow-lg"
              style={{
                filter: "drop-shadow(0 0 10px rgba(147, 51, 234, 0.5))",
              }}
            />
            <p className="text-gray-800 font-semibold text-lg">
              Checking authentication...
            </p>
            <p className="text-gray-600 text-sm mt-2">Please wait a moment</p>
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "masonry":
        return <MasonryDashboard />;
      case "add":
        return <AddExpense />;
      case "analytics":
        return <Analytics />;
      case "budget":
        return <Budget />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Removed dark background elements */}
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />

      <div
        className={`transition-all duration-300 ${sidebarCollapsed ? "lg:pl-20" : "lg:pl-64"}`}
      >
        <main className="container p-4 sm:p-6 lg:p-8 animate-fade-in-up safe-area-top safe-area-bottom relative z-10">
          <div className="max-w-7xl mx-auto">{renderPage()}</div>
        </main>
      </div>

      {/* Enhanced Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-white/60 backdrop-blur-sm z-40 lg:hidden transition-all duration-300 animate-fade-in-up"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
