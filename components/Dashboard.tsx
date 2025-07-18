"use client";

import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  Wallet,
  TrendingDown,
  Target,
  TrendingUp,
  Coffee,
  Zap,
  Car,
  ShoppingBag,
  Home,
  Gamepad2,
  CreditCard,
  Receipt,
  PiggyBank,
  BarChart3,
} from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  // Data for different periods
  const periodData = {
    week: {
      stats: [
        {
          label: "Total Balance",
          value: "₹9,34,500",
          change: "+2.1%",
          trend: "up",
          icon: <Wallet className="w-6 h-6" />,
          color: "purple",
        },
        {
          label: "Weekly Expenses",
          value: "₹18,450",
          change: "-3.2%",
          trend: "down",
          icon: <TrendingDown className="w-6 h-6" />,
          color: "red",
        },
        {
          label: "Weekly Budget",
          value: "₹65,625",
          change: "+1.8%",
          trend: "up",
          icon: <Target className="w-6 h-6" />,
          color: "green",
        },
        {
          label: "Savings Rate",
          value: "72.5%",
          change: "+5.2%",
          trend: "up",
          icon: <PiggyBank className="w-6 h-6" />,
          color: "green",
        },
      ],
    },
    month: {
      stats: [
        {
          label: "Total Balance",
          value: "₹9,34,500",
          change: "+12.5%",
          trend: "up",
          icon: <Wallet className="w-6 h-6" />,
          color: "purple",
        },
        {
          label: "Monthly Expenses",
          value: "₹2,13,200",
          change: "-8.2%",
          trend: "down",
          icon: <TrendingDown className="w-6 h-6" />,
          color: "red",
        },
        {
          label: "Monthly Budget",
          value: "₹2,62,500",
          change: "+5.4%",
          trend: "up",
          icon: <Target className="w-6 h-6" />,
          color: "green",
        },
        {
          label: "Savings Rate",
          value: "18.7%",
          change: "+2.4%",
          trend: "up",
          icon: <PiggyBank className="w-6 h-6" />,
          color: "green",
        },
      ],
    },
    year: {
      stats: [
        {
          label: "Total Balance",
          value: "₹9,34,500",
          change: "+45.8%",
          trend: "up",
          icon: <Wallet className="w-6 h-6" />,
          color: "purple",
        },
        {
          label: "Yearly Expenses",
          value: "₹25,58,400",
          change: "-12.1%",
          trend: "down",
          icon: <TrendingDown className="w-6 h-6" />,
          color: "red",
        },
        {
          label: "Yearly Budget",
          value: "₹31,50,000",
          change: "+18.7%",
          trend: "up",
          icon: <Target className="w-6 h-6" />,
          color: "green",
        },
        {
          label: "Annual Growth",
          value: "23.4%",
          change: "+8.9%",
          trend: "up",
          icon: <BarChart3 className="w-6 h-6" />,
          color: "green",
        },
      ],
    },
  };

  const currentStats =
    periodData[selectedPeriod as keyof typeof periodData].stats;

  const getTransactionIcon = (category: string) => {
    switch (category) {
      case "Food":
        return <Coffee className="w-5 h-5" />;
      case "Income":
        return <TrendingUp className="w-5 h-5" />;
      case "Transport":
        return <Car className="w-5 h-5" />;
      case "Bills":
        return <Zap className="w-5 h-5" />;
      case "Shopping":
        return <ShoppingBag className="w-5 h-5" />;
      default:
        return <Receipt className="w-5 h-5" />;
    }
  };

  const recentTransactions = [
    {
      id: 1,
      description: "Grocery Shopping",
      amount: -2500,
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
      icon: <Coffee className="w-4 h-4" />,
    },
    {
      name: "Transportation",
      amount: 8750,
      percentage: 20,
      color: "bg-green-500",
      icon: <Car className="w-4 h-4" />,
    },
    {
      name: "Shopping",
      amount: 6580,
      percentage: 15,
      color: "bg-yellow-500",
      icon: <ShoppingBag className="w-4 h-4" />,
    },
    {
      name: "Bills & Utilities",
      amount: 5240,
      percentage: 12,
      color: "bg-red-500",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      name: "Entertainment",
      amount: 4380,
      percentage: 10,
      color: "bg-purple-500",
      icon: <Gamepad2 className="w-4 h-4" />,
    },
    {
      name: "Others",
      amount: 3500,
      percentage: 8,
      color: "bg-gray-500",
      icon: <Receipt className="w-4 h-4" />,
    },
  ];

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Modern Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 lg:gap-6">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white">
            Welcome back, {user?.name || "User"}!
          </h1>
          <p className="text-gray-600 mt-1">
            Here&apos;s what&apos;s happening with your finances today.
          </p>
        </div>

        {/* Period Selector with proper styling */}
        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-lg rounded-xl border border-purple-500/30 shadow-2xl p-1 animate-slide-in-right relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl"></div>
          {["week", "month", "year"].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-3 py-1.5 text-sm font-bold rounded-md transition-all duration-200 relative z-10 ${
                selectedPeriod === period
                  ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg"
                  : "bg-white text-black hover:bg-purple-50"
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Modern Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {currentStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-400 hover:scale-105 shadow-sm hover:shadow-md animate-scale-in relative overflow-hidden group"
          >
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
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div
                  className={`px-3 py-2 rounded-full text-sm font-bold backdrop-blur-sm ${
                    stat.trend === "up"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {stat.change}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Grid Layout for Recent Transactions and Category Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Recent Transactions */}
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-sm hover:shadow-md animate-scale-in relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
          <div className="relative z-10">
            <div className="p-6 border-b border-purple-500/20">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-purple-600" />
                Recent Transactions
              </h3>
            </div>
            <div className="divide-y divide-purple-500/10">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="p-6 hover:bg-purple-50/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 border border-purple-100 shadow-sm">
                        {getTransactionIcon(transaction.category)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {transaction.description}
                        </p>
                        <p className="text-sm text-gray-600">
                          {transaction.date}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-semibold ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}
                      >
                        {transaction.amount > 0 ? "+" : ""}₹
                        {Math.abs(transaction.amount).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-sm hover:shadow-md animate-scale-in relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
          <div className="relative z-10">
            <div className="p-6 border-b border-purple-500/20">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-600" />
                Spending by Category
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {categoryData.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full ${category.color} flex items-center justify-center text-white`}
                      >
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <span className="font-medium text-gray-900 block">
                          {category.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          ₹{category.amount.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${category.color}`}
                          style={{ width: `${category.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 w-8 text-right">
                        {category.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
