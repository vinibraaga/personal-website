import React from 'react';

import './styles.css';

function Header() {
  return (
    <div className="Header">
        <section>
            <img className="photo" src="https://github.com/vinibraaga.png"/>
            <h1>Vinicio Braga</h1>
            <h2 className="title">Redes: </h2>
            
            <a href="https://github.com/vinibraaga">
              <img className="icons" alt="GitHub"
              src="https://cdn.icon-icons.com/icons2/936/PNG/512/github-sign_icon-icons.com_73545.png"/>
            </a>
            <a href="https://www.linkedin.com/in/vinicio-braga-54096b17b/">
              <img className="icons" 
              src="https://cdn.icon-icons.com/icons2/1753/PNG/512/iconfinder-social-media-applications-14linkedin-4102586_113786.png"/>
            </a>
            
        </section>
    </div>
  );
}

export default Header;