import React from 'react';
import Title from './Title';
import Description from './Description';
import Projects from './Projects';
import '../Style/body.css';
import Contacts from './Contact';

class Body extends React.Component {
  render() {
    const { languageState } = this.props;
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
}

export default Body;
