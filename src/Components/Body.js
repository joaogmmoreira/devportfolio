import React from 'react';
import Title from './Title';
import Description from './Description';
import Projects from './Projects';
import '../Style/body.css';
import Contacts from './Contact';

export default function Body(props) {  
const { languageState } = props;
  return (
    <div className='body'>
      <Title languageState={ languageState } />
      <Description languageState={ languageState } />
      <hr className='rounded'/>
      <Projects languageState={ languageState } />
      <hr className='rounded'/>
      <Contacts languageState={ languageState }/>
    </div>
  )  
}
