// src/pages/Home.jsx
import React from 'react';
import { FaUserGraduate, FaBookOpen, FaChalkboardTeacher } from 'react-icons/fa';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="container px-4 mx-auto mt-8">
      <header className="py-8 mb-12 text-center rounded-lg shadow-lg bg-blue-50">
        <h1 className="text-5xl font-bold text-blue-600">Welcome to School Management System</h1>
        <p className="mt-4 text-lg text-gray-600">Manage students, courses, teachers, and more with ease and efficiency!</p>
        <a href="/login" className="inline-block px-6 py-2 mt-6 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600">Get Started</a>
      </header>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="mb-4 text-2xl font-bold">Student Management</h2>
          <p className="mb-4 text-gray-700">Manage student profiles, attendance, and performance.</p>
          <div className="flex justify-center">
            <FaUserGraduate className="w-16 h-16 text-blue-500" />
          </div>
        </div>
        <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="mb-4 text-2xl font-bold">Course Management</h2>
          <p className="mb-4 text-gray-700">Schedule courses, assignments, and grades.</p>
          <div className="flex justify-center">
            <FaBookOpen className="w-16 h-16 text-green-500" />
          </div>
        </div>
        <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="mb-4 text-2xl font-bold">Teacher Management</h2>
          <p className="mb-4 text-gray-700">Manage teacher profiles, assignments, and evaluations.</p>
          <div className="flex justify-center">
            <FaChalkboardTeacher className="w-16 h-16 text-red-500" />
          </div>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="mb-6 text-3xl font-bold text-center">Recent Announcements</h2>
        <div className="p-6 rounded-lg shadow-lg bg-gray-50">
          <p className="text-gray-700">No announcements at the moment.</p>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="mb-6 text-3xl font-bold text-center">Upcoming Events</h2>
        <div className="p-6 rounded-lg shadow-lg bg-gray-50">
          <p className="text-gray-700">No upcoming events at the moment.</p>
        </div>
      </section>
   
    </div>
  );
};

export default Home;
