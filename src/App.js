import React from 'react';
import MainPage from './Pages/MainPage';
import './Style/allComponents.css';

// estado para alterar de portugues para ingles com renderização condicional

class App extends React.Component {
  render() {
    return (      
      <MainPage/>
    )
  }
}

export default App;
