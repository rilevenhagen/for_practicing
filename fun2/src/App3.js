import './App.css';
import React, { Component } from 'react';
import Membro from './Componets/Membros/Membros';
import Listas from './Componets/Listas';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: '00:00:00',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Hi there {this.state.hora}</div>
          <Membro nome="Visitante:)" />
        </header>
        <Listas />
      </div>
    );
  }
}

export default App;
