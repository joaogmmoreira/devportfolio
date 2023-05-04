import React from 'react';
import Description from './Description';
import Projects from './Projects';

export default function Body(props) {  
const { languageState } = props;
  return (
    <div className='body'>
        <Description languageState={ languageState } />
        <Projects languageState={ languageState } />
    </div>
  )  
}
