import React from 'react';

function SkillSection({ title, skills }) {
  return (
    <div className="skill-div">
      <h3>{title}</h3>
      <div className="skill-divide">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillSection;