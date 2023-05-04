import React from 'react';
import { useState } from 'react';
import Title from '../Components/Title';
import Body from '../Components/Body';
import Footer from '../Components/Footer';
import '../Style/general.css'


export default function MainPage() {
    const [languageState, setLanguageState] = useState({ language: "english" })

    const setLanguageToEnglish = () => {
        setLanguageState({language: "english"})
    }

    const setLanguageToPortuguese = () => {
        setLanguageState({language: "portugues"})
    }

    return(
        <div className="general">
            <Title 
                setLanguageToEnglish={ setLanguageToEnglish }
                setLanguageToPortuguese={ setLanguageToPortuguese }
                languageState={ languageState }
            />
            <Body languageState={ languageState }/>       
            <Footer />
        </div>  
  )
}
