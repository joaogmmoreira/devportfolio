import React from 'react';
import EnglishDescription from './EnglishDescription';
import PortugueseDescription from './PortugueseDescription';
import Arrow from './Arrow';
import PropTypes from 'prop-types';
import '../Style/description.css';

export default function Description(props) { 
    const { languageState } = props;

    return (
    <div className='description'>        
        { languageState.language === 'portugues' ? <PortugueseDescription /> : <EnglishDescription /> }
        <Arrow />
    </div>
    )
}

Description.propTypes = {
    languageState: PropTypes.object.isRequired,
}