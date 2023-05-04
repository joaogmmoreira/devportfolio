import React from 'react';
import '../Style/projectsDescription.css';

export default function ProjectsDescriptionPortuguese(props) {

    const { name, type, tech, group, description, thumbnail, linkToPage } = props;
    return (
      <div className='project'>
        <a href={ linkToPage }>
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
        </a>     
      </div>
    )
}
