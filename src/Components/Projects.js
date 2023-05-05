import React from 'react';
import ProjectsDetail from './ProjectsDetail';
import PropTypes from 'prop-types';
import '../Style/projects.css';

export default function Projects(props) {
    const { languageState } = props;
    return (
        <div className='projects'>
            {
                languageState.language === 'portugues' ? <h3>Projetos</h3> : <h3>Projects</h3>
            }
            <ProjectsDetail languageState={ languageState } />  
        </div>
    )
}

Projects.propTypes = {
    languageState: PropTypes.object.isRequired,
}

