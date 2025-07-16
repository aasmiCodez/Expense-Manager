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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Checking authentication...</p>
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
    <div className="min-h-screen bg-gray-50">
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="lg:pl-64">
        <main className="p-4 lg:p-8 animate-fade-in-up">{renderPage()}</main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-200"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
