import React from 'react';
import '../Style/projects.css';
import ProjectsDetail from './ProjectsDetail';

class Projects extends React.Component {
  render() {
    const { languageState } = this.props;
    return (
      <>
        <div className='projects'>
          {
            languageState.language === 'portugues' ? <h3>Projetos</h3> : <h3>Projects</h3>
          }
        </div>
        <div>
          <ProjectsDetail languageState={ languageState } />
          <p>Outros projetos estão em manutenção</p>
        </div>
      </>
    )
  }
}

export default Projects;