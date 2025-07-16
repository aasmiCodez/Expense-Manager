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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center safe-area-top safe-area-bottom relative overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        <div className="text-center p-8 bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-500/30 animate-scale-in relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="relative z-10">
            <div
              className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-6 shadow-lg"
              style={{
                filter: "drop-shadow(0 0 10px rgba(147, 51, 234, 0.5))",
              }}
            />
            <p className="text-white font-semibold text-lg">
              Checking authentication...
            </p>
            <p className="text-slate-300 text-sm mt-2">Please wait a moment</p>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "6s" }}
        ></div>
      </div>
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-all duration-300 animate-fade-in-up"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
