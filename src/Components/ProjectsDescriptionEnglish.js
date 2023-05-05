import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectsDescriptionEnglish(props) {
    const { name, type, tech, group, description, thumbnail, linkToPage } = props;
    return (
        <div className='projectCard'>
            <a href={ linkToPage }>
                <p id='projectName'>{ name }</p>
                <img className='folder' alt={`${name} folder`} src={ thumbnail }/>   
                <div className='list'>                    
                    <p>Type: { type }</p>
                    <p>Main Technologies: {`${ tech.tech1 }, ${ tech.tech2 }, ${ tech.tech3 }`}</p>
                    <p>Group: { group }</p>
                    <p>Project Description: { description }</p>                    
                </div>
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