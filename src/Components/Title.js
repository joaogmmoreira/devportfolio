import React from 'react';
import EnglishTitle from './EnglishTitle';
import PortugueseTitle from './PortugueseTitle';

class Title extends React.Component {
  render() {
    const { languageState } = this.props;
    return (
      <>
       {
        languageState.language === 'portugues' ? <PortugueseTitle /> : <EnglishTitle />
       }
      </>
    )
  }
}

export default Title;
