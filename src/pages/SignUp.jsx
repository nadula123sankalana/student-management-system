// src/pages/SignUp.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType === 'student') {
      navigate('/student-form');
    } else if (userType === 'teacher') {
      navigate('/teacher-form');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">User Type</label>
            <select
              name="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select User Type</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="text-center">
            <button type="submit" className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
