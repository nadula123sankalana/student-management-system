// src/components/StudentForm.jsx

import React, { useState } from 'react';
import { FaBirthdayCake, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { BiBookReader } from 'react-icons/bi';

const StudentForm = ({ onSubmit }) => {
  const [studentData, setStudentData] = useState({
    displayName: '',
    email: '',
    dateOfBirth: '',
    phoneNumber: '',
    address: '',
    currentCourses: '',
    gpa: '',
    achievements: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(studentData);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Student Profile Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Personal Information */}
          <div>
            <h3 className="flex items-center mb-4 text-xl font-semibold">
              <FaBirthdayCake className="mr-2" /> Personal Information
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="displayName"
                  value={studentData.displayName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={studentData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={studentData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={studentData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={studentData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div>
            <h3 className="flex items-center mb-4 text-xl font-semibold">
              <BiBookReader className="mr-2" /> Academic Information
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Current Courses</label>
                <input
                  type="text"
                  name="currentCourses"
                  value={studentData.currentCourses}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Separate courses with commas"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">GPA</label>
                <input
                  type="text"
                  name="gpa"
                  value={studentData.gpa}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="flex items-center mb-4 text-xl font-semibold">
              <BiBookReader className="mr-2" /> Achievements
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">Achievements</label>
              <input
                type="text"
                name="achievements"
                value={studentData.achievements}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Separate achievements with commas"
              />
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
