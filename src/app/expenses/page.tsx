"use client";

import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { useMemo, useState } from "react";

const Expenses = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Mock data for demo purposes
  const expensesData = [
    { category: "Food", amount: 100 },
    { category: "Transportation", amount: 200 },
    { category: "Housing", amount: 300 },
    { category: "Food", amount: 150 },
    { category: "Transportation", amount: 250 },
    { category: "Housing", amount: 350 },
  ];

  const expenses = useMemo(() => expensesData, []);

// Aggregate the data
const aggregateData = useMemo(() => {
    if (!expenses) return [];
  
    // Define the type for aggregatedData
    const aggregatedData: Record<string, number> = expenses.reduce((acc: Record<string, number>, expense) => {
      const category = expense.category;
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += expense.amount;
      return acc;
    }, {});
  
    return Object.keys(aggregatedData).map((category) => ({
      name: category,
      value: aggregatedData[category],
    }));
  }, [expenses]);
  

  const classNames = {
    label: "block text-sm font-medium text-gray-700",
    selectInput: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:ring-indigo-500 sm:text-sm rounded-md",
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-5">
        <h1>Expenses</h1>
        <p className="text-sm text-gray-500">A virtual representation of expenses over time</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="w-full md:w-1/3 bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Filter by Category & Date</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="category" className={classNames.label}>
                Category
              </label>
              <select
                id="category"
                name="category"
                className={classNames.selectInput}
                defaultValue="All"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Food">Food</option>
                <option value="Transportation">Transportation</option>
                <option value="Housing">Housing</option>
              </select>
            </div>

            {/* Start date */}
            <div>
              <label htmlFor="start-date" className={classNames.label}>
                Start Date
              </label>
              <input
                id="start-date"
                type="date"
                name="start-date"
                className={classNames.selectInput}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            {/* End date */}
            <div>
              <label htmlFor="end-date" className={classNames.label}>
                End Date
              </label>
              <input
                id="end-date"
                type="date"
                name="end-date"
                className={classNames.selectInput}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Pie charts */}
        <div className="flex-grow bg-white shadow rounded-lg p-4 md:p-6">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
            <Pie
  data={aggregateData}
  dataKey="value" // Specify the dataKey here
  cx="50%"
  cy="50%"
  label
  outerRadius={150}
  fill="#8884d8"
  onMouseEnter={(event, index) => setActiveIndex(index)}
/>

            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
