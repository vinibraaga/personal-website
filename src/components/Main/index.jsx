import React from 'react';
import AboutColumn from '../AboutColumn';
import EducationColumn from '../EducationColumn';
import ExperienceColumn from '../ExperienceColumn';

import './styles.css';

function Main() {
  return (
      <div className="Main">
          <AboutColumn />
          <ExperienceColumn />
          <EducationColumn />
      </div>
  );
}

export default Main;