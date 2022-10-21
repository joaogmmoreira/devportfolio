import React from 'react';
import '../Style/header.css';
import HeaderName from './HeaderName';
import brazilianFlag from '../Images/Flag_of_Brazil.svg';
import britishFlag from '../Images/Flag_of_the_United_Kingdom.svg.png';

class Header extends React.Component {
  handleClickToEnglish = () => {
    const { languageChangeToEnglish} = this.props;
    languageChangeToEnglish();
  }

  handleClickToPortuguese = () => {
    const { languageChangeToPortuguese} = this.props;
    languageChangeToPortuguese();
  }

  render() {
    return (
      <header>
        <div className='myName'>
          <HeaderName />
        </div>
        <div className='language'>          
          <div className='britishLanguage' onClick={this.handleClickToEnglish}>            
            <img id='britishFlag'alt='British Flag' src={britishFlag}/>
            <span>English</span>
          </div>
          <div className='brazilianLanguage' onClick={this.handleClickToPortuguese}>
            <img id='brazilianFlag' alt='Brazilian Flag' src={brazilianFlag}/>          
            <span>Português</span>
          </div>               
        </div>
      </header>      
    )
  }
}

export default Header;
