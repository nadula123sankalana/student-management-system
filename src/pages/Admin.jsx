// src/pages/Admin.jsx
import React from 'react';

const Admin = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
          <p className="text-gray-700">View system-wide statistics and analytics.</p>
          <div className="flex justify-center mt-4">
            <img src="/icons/analytics.svg" alt="Analytics" className="h-20 w-20" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-bold mb-2">Reports Generator</h3>
          <p className="text-gray-700">Generate and download system reports.</p>
          <div className="flex justify-center mt-4">
            <img src="/icons/reports.svg" alt="Reports" className="h-20 w-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
