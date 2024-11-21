import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
import { FaUserCircle, FaChartLine } from "react-icons/fa";


const HomePage = () => {
  const loanData = {
    labels: ["Pending", "Approved", "Rejected"],
    datasets: [
      {
        data: [35, 50, 15],
        backgroundColor: ["#F87171", "#34D399", "#60A5FA"],
        hoverBackgroundColor: ["#EF4444", "#10B981", "#3B82F6"],
      },
    ],
  };

  return (
    <div className="p-6 space-y-8">
      {/* Welcome Section */}
      <div className="flex justify-between items-center bg-white shadow-md p-6 rounded-lg">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome, Ashutosh Kumar</h1>
          <p className="text-gray-600 mt-1">Role: Senior Loan Manager</p>
          <p className="text-gray-600">Email: ad23b1007@gmail.com</p>
        </div>
        <FaUserCircle className="text-gray-400 text-6xl" />
      </div>

      {/* Graphical Analysis Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pending Requests Card */}
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold text-gray-800">Loan Requests Overview</h2>
          <Doughnut data={loanData} />
          <div className="flex justify-between w-full mt-4">
            <p className="text-sm text-gray-600">Pending: <span className="font-semibold">35</span></p>
            <p className="text-sm text-gray-600">Approved: <span className="font-semibold">50</span></p>
            <p className="text-sm text-gray-600">Rejected: <span className="font-semibold">15</span></p>
          </div>
        </div>

        {/* Performance Insights Section */}
<div className="bg-white shadow-md p-6 rounded-lg">
  <h2 className="text-lg font-semibold text-gray-800 mb-4">Performance Insights</h2>
  <div className="grid grid-cols-2 gap-4">
    <div className="p-4 bg-blue-100 rounded-lg">
      <h3 className="text-sm text-gray-600">Monthly Requests</h3>
      <p className="text-2xl font-bold text-gray-800">120</p>
    </div>
    <div className="p-4 bg-green-100 rounded-lg">
      <h3 className="text-sm text-gray-600">Approvals</h3>
      <p className="text-2xl font-bold text-gray-800">85</p>
    </div>
    <div className="p-4 bg-red-100 rounded-lg">
      <h3 className="text-sm text-gray-600">Rejections</h3>
      <p className="text-2xl font-bold text-gray-800">20</p>
    </div>
    <div className="p-4 bg-yellow-100 rounded-lg">
      <h3 className="text-sm text-gray-600">Pending Requests</h3>
      <p className="text-2xl font-bold text-gray-800">15</p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default HomePage;
