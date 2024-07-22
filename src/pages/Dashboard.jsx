// src/pages/Dashboard.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Ensure axios is installed

const Dashboard = () => {
  const [analyticsData, setAnalyticsData] = useState({});

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  const fetchAnalyticsData = async () => {
    try {
      // Replace with actual API endpoint for analytics data
      const res = await axios.get('/api/analytics');
      setAnalyticsData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="mb-4 text-3xl font-bold">Student Dashboard</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Placeholder for dashboard content */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="mb-2 text-xl font-bold">Analytics Overview</h3>
          <p className="text-gray-700">Overall performance, attendance, course progress, etc.</p>
          {/* Display analytics data */}
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="mb-2 text-xl font-bold">Performance Chart</h3>
          {/* Example chart or graph */}
          <div style={{ height: '300px' }}>
            {/* Chart component can be placed here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
