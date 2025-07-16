"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import AddExpense from "./AddExpense";
import Analytics from "./Analytics";
import Budget from "./Budget";
import Settings from "./Settings";
import Navigation from "./Navigation";

type Page = "dashboard" | "add" | "analytics" | "budget" | "settings";

export default function ExpenseApp() {
  const { isAuthenticated, isLoading } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center safe-area-top safe-area-bottom">
        <div className="text-center p-8 bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl card animate-scale-in">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6" />
          <p className="text-gray-700 font-medium">
            Checking authentication...
          </p>
          <p className="text-gray-500 text-sm mt-2">Please wait a moment</p>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="lg:pl-64 transition-all duration-300">
        <main className="container p-4 sm:p-6 lg:p-8 animate-fade-in-up safe-area-top safe-area-bottom">
          <div className="max-w-7xl mx-auto">{renderPage()}</div>
        </main>
      </div>

      {/* Enhanced Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-all duration-300 animate-fade-in-up"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
