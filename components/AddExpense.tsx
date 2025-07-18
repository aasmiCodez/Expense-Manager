"use client";

import { useState } from "react";

export default function AddExpense() {
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    category: "",
    date: new Date().toISOString().split("T")[0],
    paymentMethod: "cash",
  });

  const [recentExpenses, setRecentExpenses] = useState([
    {
      id: 1,
      amount: 1250,
      description: "Lunch at McDonald's",
      category: "Food",
      date: "2024-01-15",
      method: "Credit Card",
    },
    {
      id: 2,
      amount: 3500,
      description: "New shirt",
      category: "Shopping",
      date: "2024-01-14",
      method: "UPI",
    },
    {
      id: 3,
      amount: 450,
      description: "Uber ride",
      category: "Transport",
      date: "2024-01-14",
      method: "Digital Wallet",
    },
    {
      id: 4,
      amount: 2800,
      description: "Electricity bill",
      category: "Bills",
      date: "2024-01-13",
      method: "Net Banking",
    },
  ]);

  const categories = [
    {
      name: "Food & Dining",
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
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
      ),
    },
    {
      name: "Transportation",
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
            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m0 0V9.75a1.125 1.125 0 011.125-1.125h17.25A1.125 1.125 0 0122.5 9.75v4.5m0 0v4.5a1.125 1.125 0 01-1.125 1.125H18m3.75-7.5H3.75m0 0h3.375M7.5 12V9.375a1.125 1.125 0 011.125-1.125h1.125m-2.25 2.25L9 10.5v1.5m0 0v1.5m0-1.5h1.5m0 0h1.5"
          />
        </svg>
      ),
    },
    {
      name: "Shopping",
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
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119.993z"
          />
        </svg>
      ),
    },
    {
      name: "Bills & Utilities",
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
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      name: "Entertainment",
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
            d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 0A2.25 2.25 0 015.625 3.375h12.75A2.25 2.25 0 0120.25 5.625v12.75m-9.75-8.25h6.75"
          />
        </svg>
      ),
    },
    {
      name: "Healthcare",
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
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      ),
    },
    {
      name: "Education",
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
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      ),
    },
    {
      name: "Others",
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
            d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
          />
        </svg>
      ),
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.amount || !formData.description || !formData.category) {
      alert("Please fill in all required fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      amount: parseFloat(formData.amount),
      description: formData.description,
      category: formData.category,
      date: formData.date,
      method: formData.paymentMethod,
    };

    setRecentExpenses([newExpense, ...recentExpenses.slice(0, 4)]);

    // Reset form
    setFormData({
      amount: "",
      description: "",
      category: "",
      date: new Date().toISOString().split("T")[0],
      paymentMethod: "cash",
    });

    alert("Expense added successfully!");
  };

  return (
    <div className="space-y-6 lg:space-y-8">
      <div>
        <div className="animate-slide-in-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Add
            </span>{" "}
            Expense
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Track your spending quickly and efficiently
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Add Expense Form */}
        <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-all duration-300 animate-scale-in">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            New Expense
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Amount (₹)*
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                placeholder="0.00"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Description*
              </label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                placeholder="What did you spend on?"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Category*
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
                style={{
                  color: "#111827",
                  backgroundColor: "#ffffff",
                  fontWeight: "600",
                  colorScheme: "light",
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Payment Method
              </label>
              <select
                value={formData.paymentMethod}
                onChange={(e) =>
                  setFormData({ ...formData, paymentMethod: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                style={{
                  color: "#000000 !important",
                  backgroundColor: "white !important",
                }}
              >
                <option value="cash">Cash</option>
                <option value="credit-card">Credit Card</option>
                <option value="debit-card">Debit Card</option>
                <option value="upi">UPI</option>
                <option value="net-banking">Net Banking</option>
                <option value="digital-wallet">Digital Wallet</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white w-full py-3 px-4 font-medium rounded-xl hover:from-purple-700 hover:to-purple-800 hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Add Expense
            </button>
          </form>
        </div>

        {/* Recent Expenses */}
        <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 animate-scale-in">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Expenses
            </h3>
          </div>
          <div className="divide-y">
            {recentExpenses.map((expense) => (
              <div key={expense.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">
                      {expense.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      {expense.category} • {expense.date}
                    </p>
                    <p className="text-xs text-gray-400">{expense.method}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-red-600">
                      -₹{expense.amount.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Add Categories */}
      <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-all duration-300 animate-scale-in">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Add</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() =>
                setFormData({ ...formData, category: category.name })
              }
              className="flex flex-col items-center p-4 rounded-lg border hover:bg-gray-50 transition-all duration-200 hover:shadow-md hover:scale-105"
            >
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-purple-600 mb-2 border border-purple-100 shadow-sm">
                {category.icon}
              </div>
              <span className="text-xs font-medium text-black text-center">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
