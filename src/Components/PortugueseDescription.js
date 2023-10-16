import React from 'react';
const meAndSammy = require('../Images/me_and_sammy.jpg');

export default function PortugueseDescription() {
    return (
        <div className='aboutMe'>
          <div className='text'>
            <h4>Sobre mim</h4>
            <ul>
              <li>Nasci no Rio de Janeiro e sou pai do Samuel!</li>
            <br/>
              <li>Sou desenvolvedor de software freelance certificado pela Trybe e busco me aperfeiçoar todos os dias.</li>
            <br/>     
              <li>Estou estudando Engenharia de Software buscando embasar todo o conhecimento prático que possuo.</li>
            <br/>
              <li>Músico nos finais de semana</li>
            </ul>
          </div>
          <div className='photo'>
            <img className='me_and_sammy' alt='Me and Sammy' src={meAndSammy}/>
          </div>
        </div>
    )
}
