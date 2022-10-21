import React from 'react';
import Header from '../Components/Header';
import Body from '../Components/Body';
import Footer from '../Components/Footer';


class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'portugues',
    };
  }

  languageChangeToEnglish = () => {
      this.setState({
        language: 'english'
    });
  }

  languageChangeToPortuguese = () => {
    this.setState({
      language: 'portugues'
    });
  }
    
  render() {
    const languageState = this.state;
    return (      
      <div className='allComponents'>
        <Header 
          languageChangeToEnglish={this.languageChangeToEnglish}
          languageChangeToPortuguese={this.languageChangeToPortuguese}
          />
        <Body languageState={languageState}/>       
        <Footer />
      </div>
      
    )
  }
}

export default MainPage;
