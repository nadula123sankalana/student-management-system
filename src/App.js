// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Students from './pages/Students';
import Courses from './pages/Courses';
import Teachers from './pages/Teachers';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddCourse from './pages/AddCourse';
import StudentProfile from './pages/StudentProfile';
import StudentForm from './components/StudentForm';
import TeacherForm from './components/TeacherForm';
import Signup from './pages/SignUp'; // Import Signup page
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> {/* Add route for Signup */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-course" element={<AddCourse />} />
            <Route path="/profile" element={<StudentProfile />} />
            <Route path="/student-form" element={<StudentForm />} />
            <Route path="/teacher-form" element={<TeacherForm />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
