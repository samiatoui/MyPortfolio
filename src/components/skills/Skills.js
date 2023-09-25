import React from 'react';
import "./skills.css";
import SkillSection from './SkillSection'; // Import the SkillSection component

export default function Skills() {
  const programmingSkills = ['Java', 'JavaScript', 'HTML', 'CSS', 'VueJS', 'React'];
  const toolsSkills = ['GraphQL', 'Docker', 'Wordpress', 'Shopify', 'GitHub', 'Azure Devops', 'Visual Studio', 'IntelliJ', 'MS Teams'];
  const databaseSkills = ['ArangoDB', 'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'MS Access'];
  const uiUxSkills = ['Adobe Photoshop', 'Canva'];

  return (
    <div className="skills-main">
      <div className="skills-title">
        <h1>My Toolbox</h1>
      </div>

      <div className="skills-container">
        {/* Programming Skills */}
        <SkillSection title="Programming" skills={programmingSkills} />

        {/* Tools Skills */}
        <SkillSection title="Tools" skills={toolsSkills} />

        {/* Databases Skills */}
        <SkillSection title="Databases" skills={databaseSkills} />

        {/* UI/UX Skills */}
        <SkillSection title="UI/UX" skills={uiUxSkills} />
      </div>
    </div>
  );
}





