import React from 'react';

export default function ProjectsDescriptionEnglish(props) {
    const { name, type, tech, group, description, thumbnail, linkToPage } = props;
    return (
      <a href={ linkToPage }>
        <div className='project'>
        <p id='projectName'>{ name }</p>
        <img className='folder' alt={`${name} folder`} src={ thumbnail }/>   
        <div className='list'>   
          <ul>
            <li>Type: { type }</li>
            <li>Main Technologies: {`${ tech.tech1 }, ${ tech.tech2 }, ${ tech.tech3 }`}</li>
            <li>Group: { group }</li>
            <li>Project Description: { description }</li>
          </ul>
          </div>
        </div>
      </a>     
    )
}
