import React from 'react';

import './styles.css';

function EducationColumn() {
  return (
      <section className="Education">
        <section className="division-education">
          <div>
            <h1>Educação</h1>
            <h2>BandTec - Faculdade de Tecnologia Bandeirantes</h2>
            <h3>Tecnologo - Análise e Desenvolvimento de Sistemas - Coding</h3>
            <h4>2019 - 2020</h4>
            <p></p>
          </div>
          <div className="division-education">
            <h2>NEMC Natasha Franco Vieira Educação Profissional</h2>
            <h3>Técnico - Informática para internet</h3>
            <h4>2015 - 2016</h4>
            <p></p>
          </div>
        </section>
        <section className="certification">
          <div>
            <h1>Certificados</h1>
            <h2>BandTec - Faculdade de Tecnologia Bandeirantes</h2>
            <h3>Tecnologo - Análise e Desenvolvimento de Sistemas - Coding</h3>
            <h4>2019 - 2020</h4>
            <p></p>
          </div>
        </section>
      </section>
  );
}

export default EducationColumn;