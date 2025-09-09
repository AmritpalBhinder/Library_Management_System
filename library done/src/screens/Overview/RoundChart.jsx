import React from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  CartesianGrid, 
  Cell 
} from "recharts";
import "./Overview.css";

// Use 6-digit HEX codes instead of 8-digit for better compatibility
const COLORS = ["#137708ff", "#b0ad1eff", "#2a14b9ff", "#be0404ff","#2f2046ff"];

export default function RoundChart({ books, members, issued, fines, reservations }) {
  // Ensure props are arrays; fallback to empty arrays if undefined
  const safeBooks = Array.isArray(books) ? books : [];
  const safeMembers = Array.isArray(members) ? members : [];
  const safeIssued = Array.isArray(issued) ? issued : [];
  const safeFines = Array.isArray(fines) ? fines : [];
  const safeReservations = Array.isArray(reservations) ? reservations : [];

  // Data for the bar chart
  const data = [
    { name: "Books", value: safeBooks.length },
    { name: "Members", value: safeMembers.length },
    { name: "Issued", value: safeIssued.length },
    { name: "Fines", value: safeFines.length },
    { name: "Reservations", value: safeReservations.length },
  ];

  return (
    <div 
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" , height:"510px"}} 
      className="chart" 
    >
      <BarChart className="bar" width={500} height={500} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}
