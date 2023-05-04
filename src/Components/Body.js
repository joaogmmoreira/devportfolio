import React from 'react';
import Description from './Description';
import Projects from './Projects';
import Contacts from './Contact';
import '../Style/body.css';

export default function Body(props) {  
const { languageState } = props;
  return (
    <div className='body'>
        <Description languageState={ languageState } />
        <hr className='rounded'/>
        <Projects languageState={ languageState } />
        <hr className='rounded'/>
        <Contacts languageState={ languageState }/>
    </div>
  )  
}
