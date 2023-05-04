import React from 'react';
import { useState } from 'react';
import Header from '../Components/Header';
import Body from '../Components/Body';
import Footer from '../Components/Footer';


export default function MainPage() {
    const [languageState, setLanguageState] = useState({ language: "portugues" })

    const setLanguageToEnglish = () => {
        setLanguageState({language: "english"})
    }

    const setLanguageToPortuguese = () => {
        setLanguageState({language: "portugues"})
    }


    return(
    <div className='allComponents'>
    <Header 
        setLanguageToEnglish={setLanguageToEnglish}
        setLanguageToPortuguese={setLanguageToPortuguese}
        />
    <Body languageState={languageState}/>       
    <Footer />
    </div>
  
  )
}

// class MainPage extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       language: 'portugues',
//     };
//   }

//   languageChangeToEnglish = () => {
//       this.setState({
//         language: 'english'
//     });
//   }

//   languageChangeToPortuguese = () => {
//     this.setState({
//       language: 'portugues'
//     });
//   }
    
//   render() {
//     const languageState = this.state;
//     return (      
//       <div className='allComponents'>
//         <Header 
//           languageChangeToEnglish={this.languageChangeToEnglish}
//           languageChangeToPortuguese={this.languageChangeToPortuguese}
//           />
//         <Body languageState={languageState}/>       
//         <Footer />
//       </div>
      
//     )
//   }
// }

// export default MainPage;
