import React from 'react';

class ProjectsDescriptionEnglish extends React.Component {
  render() {
    const { name, type, tech, group, description, thumbnail } = this.props;
    return (
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
    )
  }
}

export default ProjectsDescriptionEnglish;