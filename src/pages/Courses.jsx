// src/pages/Courses.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('/api/courses');
        setCourses(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="mb-4 text-3xl font-bold">Courses</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div key={course._id} className="p-4 bg-white rounded-lg shadow-md">
            <img src={course.thumbnailUrl} alt={course.courseTitle} className="object-cover w-full h-48 rounded-md" />
            <h3 className="mt-4 text-xl font-bold">{course.courseTitle}</h3>
            <p className="mt-2 text-gray-700">{course.courseDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
