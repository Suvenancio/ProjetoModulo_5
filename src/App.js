import './App.css';
import React, { Component } from 'react'
import Dentista from './components/Dentistas/Dentistas'
import Header from './components/Header/Header';

class App extends Component{
  render(){
      return(<div>
          <Header />
    
          <Dentista /></div>
      )
  }


}

export default App;
