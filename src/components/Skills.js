import React from 'react';
import SkillSection from './SkillSection'; // Import the SkillSection component

export default function Skills() {
  const programmingSkills = ['Java', 'JavaScript', 'HTML', 'CSS', 'VueJS', 'React','GraphQL', 'Docker', 'Wordpress', 'Shopify', 'GitHub', 'Azure Devops', 'Visual Studio', 'IntelliJ', 'MS Teams','ArangoDB', 'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'MS Access','Adobe Photoshop', 'Canva'];

  return (
    <div className="skills-main">
      <div className="skills-title">
        <h1>My Technical Toolbox</h1>
      </div>

      <div className="skills-container">
        <SkillSection  skills={programmingSkills} />
      </div>
    </div>
  );
}





