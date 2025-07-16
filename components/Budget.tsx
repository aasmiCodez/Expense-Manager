"use client";

import { useState } from "react";

export default function Budget() {
  const [budgets, setBudgets] = useState([
    {
      id: 1,
      category: "Food & Dining",
      budgeted: 12000,
      spent: 15420,
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
      id: 2,
      category: "Transportation",
      budgeted: 10000,
      spent: 8750,
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
      id: 3,
      category: "Shopping",
      budgeted: 15000,
      spent: 22500,
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
      id: 4,
      category: "Entertainment",
      budgeted: 6000,
      spent: 4800,
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
      id: 5,
      category: "Bills & Utilities",
      budgeted: 13000,
      spent: 12800,
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
      id: 6,
      category: "Healthcare",
      budgeted: 5000,
      spent: 3200,
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
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newBudget, setNewBudget] = useState({
    category: "",
    amount: "",
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
          className="btn-primary px-6 py-3 rounded-xl font-medium flex items-center space-x-2 shadow-lg"
        >
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span>Add Budget</span>
        </button>
      </div>

      {/* Overall Progress */}
      <div className="bg-white rounded-xl shadow-sm border p-6 card animate-scale-in">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Overall Budget
          </h3>
          <svg
            className="w-6 h-6 text-purple-600"
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
              className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-all duration-300 hover:scale-105 card animate-fade-in-up"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                    {budget.icon}
                  </div>
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in-up">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 animate-scale-in">
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
                    className="modern-input"
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
                    className="modern-input"
                    placeholder="0"
                    required
                  />
                </div>
                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary flex-1 px-4 py-3 font-medium"
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
              d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
          </svg>
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
