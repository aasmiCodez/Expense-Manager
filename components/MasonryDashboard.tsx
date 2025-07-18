"use client";

import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function MasonryDashboard() {
  const { user } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const masonryItems = [
    {
      id: 1,
      type: "stats",
      title: "Total Balance",
      value: "₹9,34,500",
      change: "+12.5%",
      trend: "up",
      size: "small",
      gradient: "from-purple-600 via-purple-700 to-purple-800",
      icon: (
        <svg
          className="w-8 h-8"
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
      id: 2,
      type: "chart",
      title: "Spending Analytics",
      size: "large",
      gradient: "from-blue-600 via-blue-700 to-indigo-800",
      data: [
        { category: "Food", amount: 15420, percentage: 35, color: "#3b82f6" },
        {
          category: "Transport",
          amount: 8750,
          percentage: 20,
          color: "#10b981",
        },
        {
          category: "Shopping",
          amount: 6580,
          percentage: 15,
          color: "#f59e0b",
        },
        { category: "Bills", amount: 5240, percentage: 12, color: "#ef4444" },
        {
          category: "Entertainment",
          amount: 4380,
          percentage: 10,
          color: "#8b5cf6",
        },
        { category: "Others", amount: 3500, percentage: 8, color: "#6b7280" },
      ],
    },
    {
      id: 3,
      type: "stats",
      title: "Monthly Expenses",
      value: "₹2,13,200",
      change: "-8.2%",
      trend: "down",
      size: "small",
      gradient: "from-red-600 via-red-700 to-red-800",
      icon: (
        <svg
          className="w-8 h-8"
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
      id: 4,
      type: "transactions",
      title: "Recent Transactions",
      size: "medium",
      gradient: "from-emerald-600 via-emerald-700 to-emerald-800",
      transactions: [
        {
          description: "Grocery Shopping",
          amount: -2400,
          category: "Food",
          date: "Today",
        },
        {
          description: "Salary Credit",
          amount: 75000,
          category: "Income",
          date: "Yesterday",
        },
        {
          description: "Coffee Shop",
          amount: -450,
          category: "Food",
          date: "2 days ago",
        },
        {
          description: "Uber Ride",
          amount: -650,
          category: "Transport",
          date: "3 days ago",
        },
      ],
    },
    {
      id: 5,
      type: "goal",
      title: "Savings Goal",
      value: "78.2%",
      target: "₹50,000",
      current: "₹39,100",
      size: "medium",
      gradient: "from-cyan-600 via-cyan-700 to-cyan-800",
      icon: (
        <svg
          className="w-8 h-8"
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
    },
    {
      id: 6,
      type: "budget",
      title: "Monthly Budget",
      value: "₹2,62,500",
      used: "₹2,13,200",
      remaining: "₹49,300",
      size: "medium",
      gradient: "from-amber-600 via-amber-700 to-amber-800",
      icon: (
        <svg
          className="w-8 h-8"
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
    },
    {
      id: 7,
      type: "quick-stats",
      title: "Quick Overview",
      size: "small",
      gradient: "from-pink-600 via-pink-700 to-pink-800",
      stats: [
        { label: "This Week", value: "₹18,450" },
        { label: "Last Week", value: "₹21,200" },
        { label: "Avg Daily", value: "₹2,635" },
      ],
    },
    {
      id: 8,
      type: "investment",
      title: "Investment Portfolio",
      value: "₹1,24,300",
      change: "+15.8%",
      trend: "up",
      size: "large",
      gradient: "from-violet-600 via-violet-700 to-violet-800",
      investments: [
        { name: "Mutual Funds", value: "₹45,200", percentage: 36 },
        { name: "Stocks", value: "₹38,100", percentage: 31 },
        { name: "FD", value: "₹25,000", percentage: 20 },
        { name: "Gold", value: "₹16,000", percentage: 13 },
      ],
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

  const renderMasonryItem = (item: any) => {
    const baseClasses = `
            bg-white/90 backdrop-blur-xl rounded-3xl 
      border border-purple-500/30 hover:border-purple-500/60
      transition-all duration-500 hover:scale-[1.02] 
      relative overflow-hidden group cursor-pointer
            shadow-2xl hover:shadow-purple-500/25
      animate-scale-in
    `;

    const sizeClasses = {
      small: "min-h-[220px]",
      medium: "min-h-[320px]",
      large: "min-h-[480px]",
    };

    switch (item.type) {
      case "stats":
        return (
          <div
            key={item.id}
            className={`${baseClasses} ${sizeClasses[item.size as keyof typeof sizeClasses]} p-6`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
            ></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-white shadow-lg border border-purple-100">
                  <div className="text-purple-600">{item.icon}</div>
                </div>
                <div
                  className={`px-3 py-2 rounded-full text-sm font-bold ${
                    item.trend === "up"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {item.change}
                </div>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-2">
                {item.value}
              </h3>
              <p className="text-gray-600 text-sm font-medium">{item.title}</p>
            </div>
          </div>
        );

      case "chart":
        return (
          <div
            key={item.id}
            className={`${baseClasses} ${sizeClasses[item.size as keyof typeof sizeClasses]} p-6`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
            ></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-6">
                {item.title}
              </h3>
              <div className="space-y-4">
                {item.data.map((category: any, index: number) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-200">
                        {category.category}
                      </span>
                      <span className="text-sm text-slate-400">
                        ₹{category.amount.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-purple-100 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${category.percentage}%`,
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}dd)`,
                        }}
                      />
                    </div>
                    <div className="text-xs text-slate-400">
                      {category.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "transactions":
        return (
          <div
            key={item.id}
            className={`${baseClasses} ${sizeClasses[item.size as keyof typeof sizeClasses]} p-6`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
            ></div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-4">
                {item.title}
              </h3>
              <div className="space-y-3">
                {item.transactions.map((transaction: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-purple-50 rounded-xl"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-sm border border-purple-100">
                        {getTransactionIcon(transaction.category)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">
                          {transaction.description}
                        </p>
                        <p className="text-xs text-slate-400">
                          {transaction.date}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`font-bold text-sm ${transaction.amount > 0 ? "text-green-400" : "text-red-400"}`}
                    >
                      {transaction.amount > 0 ? "+" : ""}₹
                      {Math.abs(transaction.amount).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "goal":
        return (
          <div
            key={item.id}
            className={`${baseClasses} ${sizeClasses[item.size as keyof typeof sizeClasses]} p-6`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
            ></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-white shadow-lg border border-purple-100">
                  <div className="text-purple-600">{item.icon}</div>
                </div>
              </div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-4">
                {item.title}
              </h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.current} of {item.target}
                  </div>
                </div>
                <div className="w-full bg-purple-100 rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600"
                    style={{ width: item.value }}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case "budget":
        return (
          <div
            key={item.id}
            className={`${baseClasses} ${sizeClasses[item.size as keyof typeof sizeClasses]} p-6`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
            ></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-white shadow-lg border border-purple-100">
                  <div className="text-purple-600">{item.icon}</div>
                </div>
              </div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-4">
                {item.title}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Total Budget</span>
                  <span className="text-gray-900 font-bold">{item.value}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Used</span>
                  <span className="text-red-400 font-bold">{item.used}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Remaining</span>
                  <span className="text-green-400 font-bold">
                    {item.remaining}
                  </span>
                </div>
                <div className="w-full bg-purple-100 rounded-full h-2 mt-4">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
                    style={{ width: "81%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case "quick-stats":
        return (
          <div
            key={item.id}
            className={`${baseClasses} ${sizeClasses[item.size as keyof typeof sizeClasses]} p-6`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
            ></div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-4">
                {item.title}
              </h3>
              <div className="space-y-3">
                {item.stats.map((stat: any, index: number) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-600 text-sm">{stat.label}</span>
                    <span className="text-gray-900 font-bold text-sm">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "investment":
        return (
          <div
            key={item.id}
            className={`${baseClasses} ${sizeClasses[item.size as keyof typeof sizeClasses]} p-6`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
            ></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-6">
                {item.title}
              </h3>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold text-violet-400">
                    {item.value}
                  </div>
                  <div className="px-3 py-2 rounded-full text-sm font-bold bg-green-500/20 text-green-400 border border-green-500/30">
                    {item.change}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {item.investments.map((investment: any, index: number) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-200">
                        {investment.name}
                      </span>
                      <span className="text-sm text-slate-400">
                        {investment.value}
                      </span>
                    </div>
                    <div className="w-full bg-purple-100 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-violet-400 to-violet-600"
                        style={{ width: `${investment.percentage}%` }}
                      />
                    </div>
                    <div className="text-xs text-slate-400">
                      {investment.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 lg:gap-6">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Financial Dashboard
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            Welcome back, {user?.name || "User"}! Here's your financial
            overview.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-lg rounded-xl border border-purple-500/30 shadow-2xl p-1 animate-slide-in-right relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl"></div>
          {["week", "month", "year"].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 relative z-10 ${
                selectedPeriod === period
                  ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg"
                  : "hover:bg-purple-500/20 text-gray-600"
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max">
        {masonryItems.map(renderMasonryItem)}
      </div>
    </div>
  );
}
