import React from 'react';
import educationData from '../data/educationData';

const Education = () => {
  return (
    <div className="education">
      <h2>Education</h2>
      <ul>
        {educationData.map((edu, index) => (
          <li key={index}>
            <h3>{edu.school}</h3>
            <p>{edu.degree}</p>
            <p>{edu.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
