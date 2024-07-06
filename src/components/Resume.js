import React from 'react';
import Education from './Education';
import Skills from './Skills';
import '../App.css'; 

const Resume = () => {
  return (
    <div className="resume">
      <div className="profile">
      <img src="profile-pic.jpg" alt="Profile" className="profile-pic" />
        <h1>Priscilla Rachel Toby</h1>
        <p>Student</p>
      </div>
      <div className="sections">
        <Education />
        <Skills />
      </div>
    </div>
  );
}

export default Resume;
