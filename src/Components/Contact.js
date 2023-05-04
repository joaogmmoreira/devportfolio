import React from 'react';
// import '../Style/contacts.css';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

export default function Contact() {  
    // const { languageState } = props;
    return (              
    <div className='contacts'>
        {/* {
            languageState.language === 'portugues' ? <h4>Contatos</h4> : <h4>Contacts</h4>
        } */}
        <div className='contact'>
            <div className='figure'><AiOutlineLinkedin/></div>
            <div><a href='https://www.linkedin.com/in/joao-moreira-dev/'>Linkedin</a></div>
        </div>      
        <div className='contact'>
            <div className='figure'><AiFillGithub/></div>
            <div><a href='https://github.com/joaogmmoreira'>GitHub</a></div>
        </div>
        <div className='contact'>
            <div className='figure'><AiOutlineMail/></div>
            <div><a href='mailto:jgmoreira1809@gmail.com'>Email</a></div>
        </div>
    </div>       
    )
}
