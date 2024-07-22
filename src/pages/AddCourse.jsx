// src/pages/AddCourse.jsx

import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  const handleVideoChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleThumbnailChange = (e) => {
    setThumbnailFile(e.target.files[0]);
  };

  const handlePdfChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('courseTitle', courseTitle);
    formData.append('courseDescription', courseDescription);
    formData.append('videoFile', videoFile);
    formData.append('thumbnailFile', thumbnailFile);
    formData.append('pdfFile', pdfFile);

    try {
      const res = await axios.post('/api/courses', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.data);
      // Reset form
      setCourseTitle('');
      setCourseDescription('');
      setVideoFile(null);
      setThumbnailFile(null);
      setPdfFile(null);
      alert("Course added successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="mb-4 text-3xl font-bold">Add Course</h2>
      <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-white rounded-lg shadow-md">
        <div>
          <label className="block text-sm font-medium">Course Title</label>
          <input
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Course Description</label>
          <textarea
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium">Video File</label>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Thumbnail Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleThumbnailChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">PDF File</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={handlePdfChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
