import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import { useFirebase } from './context/Firebase.jsx';
import {Loader} from "lucide-react";
import PerformCRUDPage from './pages/PerformCRUDPage.jsx';
import GeneratePage from './pages/GeneratePage.jsx'
import Navbar from './components/Navbar.jsx'
import ProfilePage from './pages/ProfilePage.jsx';
import {Toaster} from "react-hot-toast";
import ProjectPage from './pages/ProjectPage.jsx';
import AllProjectsPage from './pages/AllProjectsPage.jsx'
import ProjectDetailsPage from './pages/ProjectDetailsPage.jsx'



function App() {
  const { authUser, isCheckingAuth } = useFirebase();

  if (isCheckingAuth)
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );



  return (
    <div className='flex flex-col w-[100vw] h-[100%] text-center justify-center items-center'>

      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignupPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/performCRUD" element={authUser ? <PerformCRUDPage /> : <Navigate to="/" />} />
        <Route path="/ai" element={authUser ? <GeneratePage /> : <Navigate to="/" />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path="/project" element={authUser ? <ProjectPage /> : <Navigate to="/login" />} />
        <Route path="/project/:id" element={authUser ? <ProjectDetailsPage /> : <Navigate to="/login" />} />
        <Route path="/allprojects" element={authUser ? <AllProjectsPage /> : <Navigate to="/login" />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
