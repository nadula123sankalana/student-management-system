// src/pages/StudentProfile.jsx

import React from 'react';
import { FaBirthdayCake, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Importing Font Awesome icons
import { BiBookReader } from 'react-icons/bi'; // Importing icons from another library
import Avatar from '../components/Avatar'; // Assume you have an Avatar component
import { useAuth } from '../contexts/AuthContext'; // Example of using authentication context

const StudentProfile = () => {
  const { currentUser } = useAuth(); // Example of fetching current user data from context

  // Dummy data for courses (replace with actual data)
  const currentCourses = ['Mathematics', 'Physics', 'History'];
  const achievements = ['Student of the Month', 'Perfect Attendance'];

  return (
    <div className="container mx-auto mt-8">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar src={currentUser.photoURL} alt="Profile Picture" size="lg" /> {/* Assume Avatar component with src, alt props */}
            <div>
              <h2 className="text-2xl font-bold">{currentUser.displayName}</h2>
              <p className="text-gray-500">{currentUser.email}</p>
            </div>
          </div>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Edit Profile
          </button>
        </div>

        <hr className="my-6" />

        <div className="mt-6">
          <h3 className="flex items-center mb-4 text-xl font-semibold">
            <FaBirthdayCake className="mr-2" /> Personal Information
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-center">
              <FaBirthdayCake className="mr-2 text-gray-600" />
              <p>Date of Birth:</p>
              <p className="ml-2">{currentUser.dateOfBirth}</p>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2 text-gray-600" />
              <p>Phone Number:</p>
              <p className="ml-2">{currentUser.phoneNumber}</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gray-600" />
              <p>Address:</p>
              <p className="ml-2">{currentUser.address}</p>
            </div>
            {/* Add more personal info fields as needed */}
          </div>
        </div>

        <hr className="my-6" />

        <div className="mt-6">
          <h3 className="flex items-center mb-4 text-xl font-semibold">
            <BiBookReader className="mr-2" /> Academic Information
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p className="text-gray-600">Current Courses:</p>
              <ul>
                {currentCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center">
              <BiBookReader className="mr-2 text-gray-600" />
              <p>GPA:</p>
              <p className="ml-2">3.8</p>
            </div>
            {/* Add more academic info fields as needed */}
          </div>
        </div>

        <hr className="my-6" />

        <div className="mt-6">
          <h3 className="flex items-center mb-4 text-xl font-semibold">
            <BiBookReader className="mr-2" /> Achievements
          </h3>
          <ul className="list-disc list-inside">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        {/* Add more sections for activities, achievements, progress, etc. */}

      </div>
    </div>
  );
};

export default StudentProfile;

