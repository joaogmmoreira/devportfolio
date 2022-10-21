import React from 'react';
import me from '../Images/eu.jpg';
import '../Style/description.css';
import EnglishDescription from './EnglishDescription';
import PortugueseDescription from './PortugueseDescription';

class Description extends React.Component {
  render() {
    const { languageState } = this.props;

    return (
      <div className='description'>
        <section className='myStory'>
          {
            languageState.language === 'portugues' ? <PortugueseDescription /> : <EnglishDescription />
          }
        </section>
        <section className='myPhoto'>
          <img id='myPhoto' alt='Me' src={me}/>
        </section>
      </div>
    )
  }
}

export default Description;