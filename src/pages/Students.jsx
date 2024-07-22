// src/pages/Students.jsx
import React from 'react';
import { FaEdit, FaTrash, FaUserGraduate, FaCamera } from 'react-icons/fa';

const Students = () => {
  return (
    <div className="container p-4 mx-auto mt-8">
      <h2 className="mb-8 text-4xl font-bold text-center text-indigo-700">Students Management</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Student Card */}
        <div className="p-6 transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
          <div className="flex items-center mb-4">
            <FaUserGraduate className="mr-2 text-2xl text-blue-500" />
            <h3 className="text-2xl font-bold text-blue-700">John Doe</h3>
          </div>
          <p className="mb-2 text-gray-700"><strong>ID:</strong> 12345</p>
          <p className="mb-2 text-gray-700"><strong>Grade:</strong> 10</p>
          <div className="flex items-center justify-between mt-4">
            <button className="flex items-center px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              <FaEdit className="mr-2" /> Edit
            </button>
            <button className="flex items-center px-4 py-2 font-bold text-white bg-red-500 rounded-lg hover:bg-red-600">
              <FaTrash className="mr-2" /> Delete
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <label className="flex flex-col items-center p-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300">
              <FaCamera className="mb-1 text-xl text-gray-600" />
              <span className="text-sm text-gray-600">Upload Photo</span>
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
        {/* Repeat student cards for each student */}
        {/* Example of another student card */}
        <div className="p-6 transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
          <div className="flex items-center mb-4">
            <FaUserGraduate className="mr-2 text-2xl text-green-500" />
            <h3 className="text-2xl font-bold text-green-700">Jane Smith</h3>
          </div>
          <p className="mb-2 text-gray-700"><strong>ID:</strong> 67890</p>
          <p className="mb-2 text-gray-700"><strong>Grade:</strong> 11</p>
          <div className="flex items-center justify-between mt-4">
            <button className="flex items-center px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              <FaEdit className="mr-2" /> Edit
            </button>
            <button className="flex items-center px-4 py-2 font-bold text-white bg-red-500 rounded-lg hover:bg-red-600">
              <FaTrash className="mr-2" /> Delete
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <label className="flex flex-col items-center p-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300">
              <FaCamera className="mb-1 text-xl text-gray-600" />
              <span className="text-sm text-gray-600">Upload Photo</span>
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
