import React from 'react';
import EnglishTitle from './EnglishTitle';
import PortugueseTitle from './PortugueseTitle';
import brazilianFlag from '../Images/Flag_of_Brazil.svg';
import britishFlag from '../Images/Flag_of_the_United_Kingdom.svg.png';
import Arrow from './Arrow';
// import { AiOutlineLinkedin } from 'react-icons/ai';
// import { AiFillGithub } from 'react-icons/ai';
// import { AiOutlineMail } from 'react-icons/ai';
import '../Style/title.css';
import Contact from './Contact';

export default function Title(props) {
    const { languageState } = props;
    const handleClickToEnglish = () => {
        const { setLanguageToEnglish } = props;
        setLanguageToEnglish();
    }

    const handleClickToPortuguese = () => {
        const { setLanguageToPortuguese } = props;
        setLanguageToPortuguese();
    }
  return (   
    <div className="hero">
        <div className='language'>          
            <div className='flags' onClick={handleClickToEnglish}>            
                <img id='britishFlag'alt='British Flag' src={britishFlag}/>
                <span>English</span>
            </div>
            <div className='flags' onClick={handleClickToPortuguese}>
                <img id='brazilianFlag' alt='Brazilian Flag' src={brazilianFlag}/>          
                <span>Português</span>
            </div>               
        </div>
        <div className="title-paragraph">
            {
                languageState.language === 'english' ? <EnglishTitle /> : <PortugueseTitle /> 
            }
        </div>
        <Contact />
        <Arrow />
    </div>
  )
}

