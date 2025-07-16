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
    { name: "Food & Dining", icon: "🍽️" },
    { name: "Transportation", icon: "🚗" },
    { name: "Shopping", icon: "🛍️" },
    { name: "Bills & Utilities", icon: "🏠" },
    { name: "Entertainment", icon: "🎬" },
    { name: "Healthcare", icon: "⚕️" },
    { name: "Education", icon: "📚" },
    { name: "Others", icon: "📦" },
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
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Add Expense
        </h1>
        <p className="text-gray-600 mt-1">
          Track your spending quickly and efficiently
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Add Expense Form */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            New Expense
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount (₹)*
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0.00"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description*
              </label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="What did you spend on?"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category*
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Method
              </label>
              <select
                value={formData.paymentMethod}
                onChange={(e) =>
                  setFormData({ ...formData, paymentMethod: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Add Expense
            </button>
          </form>
        </div>

        {/* Recent Expenses */}
        <div className="bg-white rounded-xl shadow-sm border">
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Add</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() =>
                setFormData({ ...formData, category: category.name })
              }
              className="flex flex-col items-center p-4 rounded-lg border hover:bg-gray-50 transition-colors"
            >
              <span className="text-2xl mb-2">{category.icon}</span>
              <span className="text-xs font-medium text-gray-700 text-center">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
