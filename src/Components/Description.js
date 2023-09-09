import React from 'react';
import EnglishDescription from './EnglishDescription';
import PortugueseDescription from './PortugueseDescription';
import Arrow from './Arrow';
import PropTypes from 'prop-types';
import { Link } from "react-scroll";
import '../Style/description.css';

export default function Description(props) { 
    const { languageState } = props;

    return (
      <div id="desc" className='main-description'>
        <div className='description'>        
          { languageState.language === 'portugues' ? <PortugueseDescription /> : <EnglishDescription /> }
        </div>
        <Link
          activeClass="active"
          to="proj"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <Arrow />
        </Link>
      </div>
    )
}

Description.propTypes = {
    languageState: PropTypes.object.isRequired,
}