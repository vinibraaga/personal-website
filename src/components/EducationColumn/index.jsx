import React from 'react';

import './styles.css';

function EducationColumn() {
  return (
      <div className="Education">
        <section className="division-education">
          <div>
            <h2 className="title">Educação</h2>
            <h2>BandTec - Faculdade de Tecnologia Bandeirantes</h2>
            <p>Tecnologo - Análise e Desenvolvimento de Sistemas - Coding</p>
            <p>2019 - 2020</p>
            <p></p>
          </div>
          <div className="division-education">
            <h2>NEMC - Natasha Franco Vieira Educação Profissional</h2>
            <p>Técnico - Informática para internet</p>
            <p>2015 - 2016</p>
            <p></p>
          </div>
        </section>
        <section className="certification">
          <div>
            <h2 className="title">Certificados</h2>
            <div className="alura">
              <a href="https://cursos.alura.com.br/certificate/c71878df-1828-4a31-9053-9c595e3ef3d7">
                JavaScript: Programando na linguagem da web
              </a>
              <a href="https://cursos.alura.com.br/certificate/ab286d0e-39bf-4a71-b155-fbe5c1e8def4">
                Lógica de programação I: Os primeiros programas com JavaScript e HTML
              </a>
              <a href="https://cursos.alura.com.br/certificate/vinibraaga/jquery-a-biblioteca-do-mercado">
                jQuery: Domine a biblioteca mais popular do mercado
              </a>
              <ul>
               <h2>HTML5 e CSS3:</h2>
               <a href="https://cursos.alura.com.br/certificate/01227f39-18a6-470c-b0e8-19373f5498cf">Parte: I,</a> 
               <a href="https://cursos.alura.com.br/certificate/01227f39-18a6-470c-b0e8-19373f5498cf">Parte: II,</a> 
               <a href="https://cursos.alura.com.br/certificate/01227f39-18a6-470c-b0e8-19373f5498cf">Parte: III,</a> 
               <a href="https://cursos.alura.com.br/certificate/01227f39-18a6-470c-b0e8-19373f5498cf">Parte: IV</a> 
              </ul>
              <a href="https://cursos.alura.com.br/certificate/c71878df-1828-4a31-9053-9c595e3ef3d7">
                JavaScript: Programando na linguagem da web
              </a>
              <a href="https://cursos.alura.com.br/certificate/c71878df-1828-4a31-9053-9c595e3ef3d7">
                JavaScript: Programando na linguagem da web
              </a>
              
              <p>Alura</p>
              <p>2020</p>
            </div>
          </div>
        </section>
      </div>
  );
}

export default EducationColumn;