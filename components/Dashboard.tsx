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
      icon: (
        <svg
          className="w-6 h-6"
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
      color: "purple",
    },
    {
      label: "Monthly Expenses",
      value: "₹2,13,200",
      change: "-8.2%",
      trend: "down",
      icon: (
        <svg
          className="w-6 h-6"
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
      color: "red",
    },
    {
      label: "Monthly Budget",
      value: "₹2,62,500",
      change: "+5.4%",
      trend: "up",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      ),
      color: "green",
    },
    {
      label: "Savings Goal",
      value: "78.2%",
      change: "+2.1%",
      trend: "up",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.228a25.075 25.075 0 012.25-.468 6.078 6.078 0 014.407 4.972c.12.734-.165 1.473-.85 1.99a9.01 9.01 0 01-4.807 1.306c-.836 0-1.66-.089-2.471-.262m0 0c.24.716.66 1.348 1.216 1.838.559.49 1.264.83 2.049 1.006"
          />
        </svg>
      ),
      color: "purple",
    },
  ];

  const getTransactionIcon = (category: string) => {
    switch (category) {
      case "Food":
        return (
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
              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
            />
          </svg>
        );
      case "Income":
        return (
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
        );
      case "Bills":
        return (
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
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
        );
      case "Transport":
        return (
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
              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m0 0V9.75a1.125 1.125 0 011.125-1.125h17.25A1.125 1.125 0 0122.5 9.75v4.5m0 0v4.5a1.125 1.125 0 01-1.125 1.125H18m3.75-7.5H3.75m0 0h3.375M7.5 12V9.375a1.125 1.125 0 011.125-1.125h1.125m-2.25 2.25L9 10.5v1.5m0 0v1.5m0-1.5h1.5m0 0h1.5"
            />
          </svg>
        );
      default:
        return (
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
              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H15.75c.621 0 1.125.504 1.125 1.125v.375m-5.25-3.375V3h3.75V1.5m-3.75 1.5V3c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125.504 1.125 1.125V3h.75v1.5H15"
            />
          </svg>
        );
    }
  };

  const recentTransactions = [
    {
      id: 1,
      description: "Grocery Shopping",
      amount: -2400,
      category: "Food",
      date: "Today",
    },
    {
      id: 2,
      description: "Salary Credit",
      amount: 75000,
      category: "Income",
      date: "Yesterday",
    },
    {
      id: 3,
      description: "Electricity Bill",
      amount: -3200,
      category: "Bills",
      date: "2 days ago",
    },
    {
      id: 4,
      description: "Coffee Shop",
      amount: -450,
      category: "Food",
      date: "3 days ago",
    },
    {
      id: 5,
      description: "Uber Ride",
      amount: -650,
      category: "Transport",
      date: "3 days ago",
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
    <div className="space-y-6 lg:space-y-8">
      {/* Modern Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 lg:gap-6">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Welcome back, {user?.name || "User"}!
          </h1>
          <p className="text-gray-600 mt-1">
            Here&apos;s what&apos;s happening with your finances today.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-lg rounded-xl border border-purple-500/30 shadow-2xl p-1 animate-slide-in-right relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl"></div>
          {["week", "month", "year"].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-3 py-1.5 text-sm font-bold rounded-md transition-colors ${
                selectedPeriod === period
                  ? "bg-gradient-to-r from-purple-600 to-purple-700"
                  : "hover:bg-purple-50"
              }`}
              style={{
                color: selectedPeriod === period ? "#ffffff" : "#000000",
                fontWeight: "700",
              }}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Modern Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-400 hover:scale-105 card animate-scale-in relative overflow-hidden group"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`p-4 rounded-xl bg-gradient-to-r ${
                    stat.color === "purple"
                      ? "from-purple-500 to-purple-700"
                      : stat.color === "red"
                        ? "from-red-500 to-red-700"
                        : stat.color === "green"
                          ? "from-green-500 to-green-700"
                          : "from-purple-500 to-purple-700"
                  } shadow-lg`}
                  style={{
                    filter: `drop-shadow(0 0 10px rgba(147, 51, 234, 0.4))`,
                  }}
                >
                  <div className="text-gray-900">{stat.icon}</div>
                </div>
                <div
                  className={`px-3 py-2 rounded-full text-sm font-bold backdrop-blur-sm ${
                    stat.trend === "up"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                  style={{
                    boxShadow:
                      stat.trend === "up"
                        ? "0 0 10px rgba(34, 197, 94, 0.3)"
                        : "0 0 10px rgba(239, 68, 68, 0.3)",
                  }}
                >
                  {stat.change}
                </div>
              </div>
            </div>
            <div className="mt-4 relative z-10">
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 text-sm mt-2 font-medium">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Recent Transactions */}
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 card animate-scale-in relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
          <div className="p-6 border-b border-purple-500/30 relative z-10">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Transactions
            </h3>
          </div>
          <div className="divide-y">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="p-4 hover:bg-purple-500/10 transition-all duration-300 relative z-10 border-b border-purple-200/50 last:border-b-0"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center text-purple-400 border border-purple-500/30 shadow-lg">
                      {getTransactionIcon(transaction.category)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {transaction.description}
                      </p>
                      <p className="text-sm text-gray-600">
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
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 card animate-scale-in relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
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
                    <span className="text-sm font-medium text-black">
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
          <button className="p-4 text-center hover:bg-gray-50 rounded-lg transition-all duration-200 hover:scale-105">
            <div className="text-gray-600 mb-2">
              <svg
                className="w-6 h-6 mx-auto"
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
            </div>
            <div className="text-sm font-medium text-black">Add Expense</div>
          </button>
          <button className="p-4 text-center hover:bg-gray-50 rounded-lg transition-all duration-200 hover:scale-105">
            <div className="text-gray-600 mb-2">
              <svg
                className="w-6 h-6 mx-auto"
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
            </div>
            <div className="text-sm font-medium text-black">View Analytics</div>
          </button>
          <button className="p-4 text-center hover:bg-gray-50 rounded-lg transition-all duration-200 hover:scale-105">
            <div className="text-gray-600 mb-2">
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </div>
            <div className="text-sm font-medium text-black">Set Budget</div>
          </button>
          <button className="p-4 text-center hover:bg-gray-50 rounded-lg transition-all duration-200 hover:scale-105">
            <div className="text-gray-600 mb-2">
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </div>
            <div className="text-sm font-medium text-black">Export Data</div>
          </button>
        </div>
      </div>
    </div>
  );
}
