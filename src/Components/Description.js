import React from 'react';
import EnglishDescription from './EnglishDescription';
import PortugueseDescription from './PortugueseDescription';
// import '../Style/description.css';

export default function Description(props) { 
    const { languageState } = props;

    return (
    <div className='description'>
        <section className='myStory'>
            { languageState.language === 'portugues' ? <PortugueseDescription /> : <EnglishDescription /> }
        </section>
    </div>
    )
}
