import React from 'react';
import me from '../Images/eu.jpg';
import '../Style/description.css';
import EnglishDescription from './EnglishDescription';
import PortugueseDescription from './PortugueseDescription';

export default function Description(props) { 
    const { languageState } = props;

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
