import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectsDescriptionEnglish(props) {
    const { name, tech, description, thumbnail, linkToPage } = props;
    return (
        <div className='projectCard'>
            <a href={ linkToPage }>
              <p id='projectName'>{ name }</p>
              <img className='folder' alt={`${name} folder`} src={ thumbnail }/>   
              <div className='list'>
                  <p>{`${ tech.tech1 } ${ tech.tech2 } ${ tech.tech3 }`}</p>
                  <p>{ description }</p>                    
              </div>
              {/* <a href={ linkToPage }><button>Project</button></a>*/}
            </a>     
        </div>
    )
}

ProjectsDescriptionEnglish.propTypes = {    
    name: PropTypes.string,
    type: PropTypes.string,
    tech: PropTypes.shape({
        tech1: PropTypes.string,
        tech2: PropTypes.string,
        tech3: PropTypes.string,
    }),
    group: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    linkToPage: PropTypes.string,
}