import React from 'react';
import Description from './Description';
import Projects from './Projects';
import PropTypes from 'prop-types';
import Footer from './Footer';

export default function Body(props) {  
const { languageState } = props;
  return (
    <div className='body'>
        <Description languageState={ languageState } />
        <Projects languageState={ languageState } />
        <Footer />
    </div>
  )  
}

Body.propTypes = {
    languageState: PropTypes.object.isRequired,
}
