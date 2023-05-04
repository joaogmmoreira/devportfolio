import React from 'react';
import EnglishTitle from './EnglishTitle';
import PortugueseTitle from './PortugueseTitle';

export default function Title(props) {
  const { languageState } = props;
  return (
    <>
      {
      languageState.language === 'portugues' ? <PortugueseTitle /> : <EnglishTitle />
      }
    </>
  )
}

