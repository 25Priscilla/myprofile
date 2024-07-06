import React from 'react';
import skillsData from '../data/skillsData';

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {skillsData.map((skill, index) => (
          <li key={index}>
            <h3>{skill.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
