import React from 'react';
// import '../Style/projects.css';
import ProjectsDetail from './ProjectsDetail';

export default function Projects(props) {
    const { languageState } = props;
    return (
      <>
        <div className='projects'>
          {
            languageState.language === 'portugues' ? <h3>Projetos</h3> : <h3>Projects</h3>
          }
          <ProjectsDetail languageState={ languageState } />
          {
          languageState.language === 'portugues' 
            ? <p>Outros projetos estão em manutenção</p>
            : <p>Other projects are under maintenance</p>
        }   
        </div>
      </>
    )
}
