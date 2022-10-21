import React from 'react';
// import { Link } from 'react-router-dom';
import '../Style/projectsDescription.css';

class ProjectsDescriptionPortuguese extends React.Component {
  render() {
    const { name, type, tech, group, description, thumbnail, linkToPage } = this.props;
    return (
      <a href={ linkToPage }>
        <div className='project'>
          <p id='projectName'>{ name }</p>
          <img className='folder' alt={`Capa do ${name}`} src={ thumbnail }/>
          <div className='list'>   
            <ul>
              <li>Tipo: { type }</li>
              <li>Principais Tecnologias: {`${ tech.tech1 }, ${ tech.tech2 }, ${ tech.tech3 }`}</li>
              <li>Grupo: { group }</li>
              <li>Descrição do Projeto: { description }</li>
            </ul>
          </div> 
        </div>
      </a>     
    )
  }
}

export default ProjectsDescriptionPortuguese;