"use client";

import { useState } from "react";

export default function Budget() {
  const [budgets, setBudgets] = useState([
    {
      id: 1,
      category: "Food & Dining",
      budgeted: 12000,
      spent: 15420,
      icon: "🍽️",
    },
    {
      id: 2,
      category: "Transportation",
      budgeted: 10000,
      spent: 8750,
      icon: "🚗",
    },
    {
      id: 3,
      category: "Shopping",
      budgeted: 15000,
      spent: 22500,
      icon: "🛍️",
    },
    {
      id: 4,
      category: "Entertainment",
      budgeted: 6000,
      spent: 4800,
      icon: "🎬",
    },
    {
      id: 5,
      category: "Bills & Utilities",
      budgeted: 13000,
      spent: 12800,
      icon: "🏠",
    },
    {
      id: 6,
      category: "Healthcare",
      budgeted: 5000,
      spent: 3200,
      icon: "⚕️",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newBudget, setNewBudget] = useState({
    category: "",
    amount: "",
    icon: "📦",
  });

  const totalBudgeted = budgets.reduce(
    (sum, budget) => sum + budget.budgeted,
    0,
  );
  const totalSpent = budgets.reduce((sum, budget) => sum + budget.spent, 0);
  const overallProgress = (totalSpent / totalBudgeted) * 100;

  const getBudgetStatus = (spent: number, budgeted: number) => {
    const percentage = (spent / budgeted) * 100;
    if (percentage >= 100) return { status: "over", color: "red" };
    if (percentage >= 80) return { status: "warning", color: "yellow" };
    return { status: "good", color: "green" };
  };

  const handleAddBudget = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBudget.category || !newBudget.amount) return;

    const budget = {
      id: Date.now(),
      category: newBudget.category,
      budgeted: parseFloat(newBudget.amount),
      spent: 0,
      icon: newBudget.icon,
    };

    setBudgets([...budgets, budget]);
    setNewBudget({ category: "", amount: "", icon: "📦" });
    setShowAddForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Budget Tracker
          </h1>
          <p className="text-gray-600 mt-1">
            Monitor your spending and stay on track
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          + Add Budget
        </button>
      </div>

      {/* Overall Progress */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Overall Budget
          </h3>
          <span className="text-2xl">🎯</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-600">Total Budgeted</p>
            <p className="text-2xl font-bold text-gray-900">
              ₹{totalBudgeted.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Spent</p>
            <p className="text-2xl font-bold text-gray-900">
              ₹{totalSpent.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Remaining</p>
            <p
              className={`text-2xl font-bold ${
                totalSpent > totalBudgeted ? "text-red-600" : "text-green-600"
              }`}
            >
              ₹{Math.abs(totalBudgeted - totalSpent).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className={`h-3 rounded-full transition-all duration-500 ${
              overallProgress > 100
                ? "bg-red-500"
                : overallProgress > 80
                  ? "bg-yellow-500"
                  : "bg-green-500"
            }`}
            style={{ width: `${Math.min(overallProgress, 100)}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>0%</span>
          <span className="font-medium">{overallProgress.toFixed(1)}%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Budget Categories */}
      <div className="space-y-4">
        {budgets.map((budget) => {
          const percentage = (budget.spent / budget.budgeted) * 100;
          const status = getBudgetStatus(budget.spent, budget.budgeted);

          return (
            <div
              key={budget.id}
              className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{budget.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {budget.category}
                    </h4>
                    <p className="text-sm text-gray-600">
                      ₹{budget.spent.toLocaleString()} of ₹
                      {budget.budgeted.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    status.color === "red"
                      ? "bg-red-100 text-red-800"
                      : status.color === "yellow"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                  }`}
                >
                  {status.status === "over"
                    ? "Over Budget"
                    : status.status === "warning"
                      ? "Near Limit"
                      : "On Track"}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span
                    className={`font-medium ${
                      percentage > 100 ? "text-red-600" : "text-gray-900"
                    }`}
                  >
                    {percentage.toFixed(1)}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      percentage > 100
                        ? "bg-red-500"
                        : percentage > 80
                          ? "bg-yellow-500"
                          : "bg-green-500"
                    }`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  />
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>
                    Remaining: ₹
                    {Math.max(
                      budget.budgeted - budget.spent,
                      0,
                    ).toLocaleString()}
                  </span>
                  {percentage > 100 && (
                    <span className="text-red-600 font-medium">
                      Over by ₹
                      {(budget.spent - budget.budgeted).toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Budget Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Add New Budget
              </h3>
              <form onSubmit={handleAddBudget} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <input
                    type="text"
                    value={newBudget.category}
                    onChange={(e) =>
                      setNewBudget({ ...newBudget, category: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Groceries"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={newBudget.amount}
                    onChange={(e) =>
                      setNewBudget({ ...newBudget, amount: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                    required
                  />
                </div>
                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Add Budget
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Budget Insights */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-2xl">💡</span>
          <h3 className="text-lg font-semibold">Budget Insights</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">This Month</h4>
            <ul className="space-y-1 text-sm opacity-90">
              <li>
                •{" "}
                {overallProgress > 100
                  ? `You're ${(overallProgress - 100).toFixed(1)}% over budget`
                  : `You're ${(100 - overallProgress).toFixed(1)}% under budget`}
              </li>
              <li>
                • {budgets.filter((b) => b.spent / b.budgeted > 1).length}{" "}
                categories over budget
              </li>
              <li>
                • Best performing:{" "}
                {
                  budgets.reduce((best, current) =>
                    current.spent / current.budgeted <
                    best.spent / best.budgeted
                      ? current
                      : best,
                  ).category
                }
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Recommendations</h4>
            <ul className="space-y-1 text-sm opacity-90">
              <li>
                • Focus on reducing{" "}
                {budgets.find((b) => b.spent / b.budgeted > 1)?.category ||
                  "spending"}
              </li>
              <li>• Set alerts for categories near limits</li>
              <li>• Review and adjust budgets monthly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
