// src/pages/Teachers.jsx
import React from 'react';

const Teachers = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Teachers Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-bold mb-2">Teacher Name</h3>
          <p className="text-gray-700">Subjects: Math, Physics</p>
          <div className="flex justify-between mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-bold">Assignments</button>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-bold">Evaluations</button>
          </div>
        </div>
        {/* Repeat teacher cards for each teacher */}
      </div>
    </div>
  );
};

export default Teachers;
