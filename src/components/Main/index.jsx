import React from 'react';
import AboutColumn from '../AboutColumn';
import EducationColumn from '../EducationColumn';
import PanelExperienceSkills from '../PanelExperienceSkills';


import './styles.css';

function Main() {
  return (
      <div className="Main">
          <AboutColumn />
          <PanelExperienceSkills /> 
          <EducationColumn />
      </div>
  );
}

export default Main;