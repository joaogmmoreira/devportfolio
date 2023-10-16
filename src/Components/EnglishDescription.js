import React from 'react';
const meAndSammy = require('../Images/me_and_sammy.jpg');


export default function EnglishDescription() {
    return (
      <div className='aboutMe'>
        <div className='text'>
          <h4>About me</h4>  
          <br/>    
          <ul>
            <li>I was born in Rio de Janeiro and I&apos;m Samuel&apos;s father!</li>
          <br/>
            <li>I am a certified freelance software developer through Trybe, and I strive to improve my skills every day.</li>
          <br/>
            <li>I am a Software Engineering student, aiming to solidify all the practical knowledge I have.</li>
          <br/>
            <li>I work as a musician on weekends.</li>
          </ul>
        </div>
        <div className='photo'>
          <img className='me_and_sammy' alt='Me and Sammy' src={meAndSammy}/>
        </div>
      </div>
    )
}
