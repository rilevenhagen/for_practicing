import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: 'Ricardo',
      contador: 0,
    };
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar() {
    let state = this.state;
    state.contador += 1;
    state.nome = 'aaaaa';
    this.setState(state);
  }

  diminuir() {
    let state = this.state;
    if (state.contador === 0) {
      alert('ja deu 0');
      return;
    }
    state.contador -= 1;
    this.setState(state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>{this.state.nome}</div>
          <div>
            <h1>Contador</h1>
            <div>
              <button onClick={this.diminuir}>-</button>
              {this.state.contador}
              <button onClick={this.aumentar}>+</button>
            </div>
            <h1>sssssssssssssssss</h1>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
