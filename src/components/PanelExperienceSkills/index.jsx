import React from 'react';
import ExperienceColumn from '../ExperienceColumn';
import SkillsColumn from '../SkillsColumn';

import './styles.css';

function PanelExperienceSkills() {
  return (
      <section className="Panel">
          <ExperienceColumn />
          <SkillsColumn />
      </section>
  );
}

export default PanelExperienceSkills;