import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#b0ad1eff", "#137708ff", "#2a14b9ff", "#2f2046ff", "#a67cf4ff"];

export default function PopularityChart({ books }) {
  // Group books by rating ranges
  const ratingGroups = {
    "4.5 - 5.0 ⭐": 0,
    "4.0 - 4.4 ⭐": 0,
    "3.0 - 3.9 ⭐": 0,
    "Below 2 ⭐": 0,
  };

  books.forEach((book) => {
    const rating = Number(book.rating) || 0;
    if (rating >= 4.5) ratingGroups["4.5 - 5.0 ⭐"]++;
    else if (rating >= 4.0) ratingGroups["4.0 - 4.4 ⭐"]++;
    else if (rating >= 3.0) ratingGroups["3.0 - 3.9 ⭐"]++;
    else ratingGroups["Below 2 ⭐"]++;
  });

  // convert into chart data
  const data = Object.keys(ratingGroups).map((range) => ({
    name: range,
    value: ratingGroups[range],
  }));

  return (
    <div className="chart-box">
      <PieChart width={500} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}


