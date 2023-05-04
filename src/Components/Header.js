import React from 'react';
import '../Style/header.css';
import HeaderName from './HeaderName';
import brazilianFlag from '../Images/Flag_of_Brazil.svg';
import britishFlag from '../Images/Flag_of_the_United_Kingdom.svg.png';

export default function Header(props) {
  const handleClickToEnglish = () => {
    const { setLanguageToEnglish } = props;
    setLanguageToEnglish();
  }

  const handleClickToPortuguese = () => {
    const { setLanguageToPortuguese } = props;
    setLanguageToPortuguese ();
  }
  
  return (
    <header>
      <div className='myName'>
        <HeaderName />
      </div>
      <div className='language'>          
        <div className='britishLanguage' onClick={handleClickToEnglish}>            
          <img id='britishFlag'alt='British Flag' src={britishFlag}/>
          <span>English</span>
        </div>
        <div className='brazilianLanguage' onClick={handleClickToPortuguese}>
          <img id='brazilianFlag' alt='Brazilian Flag' src={brazilianFlag}/>          
          <span>Português</span>
        </div>               
      </div>
    </header>      
  )
}
