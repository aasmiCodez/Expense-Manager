"use client";

import { useState } from "react";

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const monthlyData = [
    { month: "Jan", income: 75000, expenses: 45000 },
    { month: "Feb", income: 75000, expenses: 52000 },
    { month: "Mar", income: 75000, expenses: 38000 },
    { month: "Apr", income: 75000, expenses: 47000 },
    { month: "May", income: 75000, expenses: 55000 },
    { month: "Jun", income: 75000, expenses: 48000 },
  ];

  const categoryBreakdown = [
    { category: "Food & Dining", amount: 15420, percentage: 35, trend: "+5%" },
    { category: "Transportation", amount: 8750, percentage: 20, trend: "-2%" },
    { category: "Shopping", amount: 6580, percentage: 15, trend: "+12%" },
    {
      category: "Bills & Utilities",
      amount: 5240,
      percentage: 12,
      trend: "+1%",
    },
    { category: "Entertainment", amount: 4380, percentage: 10, trend: "-8%" },
    { category: "Others", amount: 3500, percentage: 8, trend: "+3%" },
  ];

  const insights = [
    {
      title: "Spending Trend",
      description: "Your expenses decreased by 8% compared to last month",
      type: "positive",
      icon: "📉",
    },
    {
      title: "Top Category",
      description: "Food & Dining accounts for 35% of your spending",
      type: "info",
      icon: "🍽️",
    },
    {
      title: "Budget Status",
      description: "You're 15% under your monthly budget",
      type: "positive",
      icon: "✅",
    },
    {
      title: "Savings Goal",
      description: "On track to reach your ₹50,000 monthly savings goal",
      type: "positive",
      icon: "🎯",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Analytics
          </h1>
          <p className="text-gray-600 mt-1">
            Deep insights into your spending patterns
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-white rounded-lg border p-1">
          {["week", "month", "quarter", "year"].map((period) => (
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

      {/* Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map((insight, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-sm border">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">{insight.icon}</div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm">
                  {insight.title}
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  {insight.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trend */}
        <div className="bg-white rounded-xl shadow-sm border card animate-scale-in">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">
              Income vs Expenses
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="text-sm font-medium text-black">
                    {data.month}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-sm text-green-600">
                        +₹{data.income.toLocaleString()}
                      </div>
                      <div className="text-sm text-red-600">
                        -₹{data.expenses.toLocaleString()}
                      </div>
                    </div>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{
                          width: `${(data.expenses / data.income) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white rounded-xl shadow-sm border card animate-scale-in">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">
              Spending by Category
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {categoryBreakdown.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-black">
                      {category.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">
                        ₹{category.amount.toLocaleString()}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          category.trend.startsWith("+")
                            ? "bg-red-100 text-red-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {category.trend}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
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

      {/* Detailed Stats */}
      <div className="bg-white rounded-xl shadow-sm border card animate-scale-in">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">
            Detailed Statistics
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">₹43,870</div>
              <div className="text-sm text-gray-600">
                Average Monthly Spending
              </div>
              <div className="text-xs text-green-600 mt-1">
                ↓ 12% from last period
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">156</div>
              <div className="text-sm text-gray-600">Total Transactions</div>
              <div className="text-xs text-blue-600 mt-1">
                ↑ 8% from last period
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">₹281</div>
              <div className="text-sm text-gray-600">
                Average per Transaction
              </div>
              <div className="text-xs text-red-600 mt-1">
                ↑ 5% from last period
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
