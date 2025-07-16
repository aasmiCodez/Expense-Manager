"use client";

import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const stats = [
    {
      label: "Total Balance",
      value: "₹9,34,500",
      change: "+12.5%",
      trend: "up",
      icon: "💰",
      color: "blue",
    },
    {
      label: "Monthly Expenses",
      value: "₹2,13,200",
      change: "-8.2%",
      trend: "down",
      icon: "📉",
      color: "red",
    },
    {
      label: "Monthly Budget",
      value: "₹2,62,500",
      change: "+5.4%",
      trend: "up",
      icon: "🎯",
      color: "green",
    },
    {
      label: "Savings Goal",
      value: "78.2%",
      change: "+2.1%",
      trend: "up",
      icon: "💎",
      color: "purple",
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      description: "Grocery Shopping",
      amount: -2400,
      category: "Food",
      date: "Today",
      icon: "🛒",
    },
    {
      id: 2,
      description: "Salary Credit",
      amount: 75000,
      category: "Income",
      date: "Yesterday",
      icon: "💰",
    },
    {
      id: 3,
      description: "Electricity Bill",
      amount: -3200,
      category: "Bills",
      date: "2 days ago",
      icon: "⚡",
    },
    {
      id: 4,
      description: "Coffee Shop",
      amount: -450,
      category: "Food",
      date: "3 days ago",
      icon: "☕",
    },
    {
      id: 5,
      description: "Uber Ride",
      amount: -650,
      category: "Transport",
      date: "3 days ago",
      icon: "🚗",
    },
  ];

  const categoryData = [
    {
      name: "Food & Dining",
      amount: 15420,
      percentage: 35,
      color: "bg-blue-500",
    },
    {
      name: "Transportation",
      amount: 8750,
      percentage: 20,
      color: "bg-green-500",
    },
    { name: "Shopping", amount: 6580, percentage: 15, color: "bg-yellow-500" },
    {
      name: "Bills & Utilities",
      amount: 5240,
      percentage: 12,
      color: "bg-red-500",
    },
    {
      name: "Entertainment",
      amount: 4380,
      percentage: 10,
      color: "bg-purple-500",
    },
    { name: "Others", amount: 3500, percentage: 8, color: "bg-gray-500" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Welcome back, {user?.name || "User"}! 👋
          </h1>
          <p className="text-gray-600 mt-1">
            Here&apos;s what&apos;s happening with your finances today.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-white rounded-lg border p-1">
          {["week", "month", "year"].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                selectedPeriod === period
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div
                className={`text-sm font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Transactions
            </h3>
          </div>
          <div className="divide-y">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-lg">{transaction.icon}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {transaction.description}
                      </p>
                      <p className="text-sm text-gray-500">
                        {transaction.category} • {transaction.date}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`font-semibold ${
                      transaction.amount > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}₹
                    {Math.abs(transaction.amount).toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">
              Spending by Category
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {categoryData.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {category.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      ₹{category.amount.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${category.color}`}
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {category.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 text-center hover:bg-gray-50 rounded-lg transition-colors">
            <div className="text-2xl mb-2">➕</div>
            <div className="text-sm font-medium text-gray-700">Add Expense</div>
          </button>
          <button className="p-4 text-center hover:bg-gray-50 rounded-lg transition-colors">
            <div className="text-2xl mb-2">📊</div>
            <div className="text-sm font-medium text-gray-700">
              View Analytics
            </div>
          </button>
          <button className="p-4 text-center hover:bg-gray-50 rounded-lg transition-colors">
            <div className="text-2xl mb-2">🎯</div>
            <div className="text-sm font-medium text-gray-700">Set Budget</div>
          </button>
          <button className="p-4 text-center hover:bg-gray-50 rounded-lg transition-colors">
            <div className="text-2xl mb-2">📈</div>
            <div className="text-sm font-medium text-gray-700">Export Data</div>
          </button>
        </div>
      </div>
    </div>
  );
}
