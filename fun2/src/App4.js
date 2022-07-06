import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      sexo: '',
    };
    this.trocarEmail = this.trocarEmail.bind(this);
    this.colocarSenha = this.colocarSenha.bind(this);
    this.changeGender = this.changeGender.bind(this);
  }

  changeGender(e) {
    let gender = e.target.value;
    this.setState({ sexo: gender });
  }

  trocarEmail(e) {
    let userInput = e.target.value;
    this.setState({ email: userInput });
    console.log(userInput);
  }

  colocarSenha(e) {
    let suaSenha = e.target.value;
    this.setState({ senha: suaSenha });
    console.log(suaSenha);
  }

  render() {
    return (
      <div className="App-header">
        email:
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.trocarEmail}
        />
        <br />
        Senha:
        <input
          type="password"
          name="senha"
          value={this.state.senha}
          onChange={this.colocarSenha}
        />
        Sexo:
        <select
          name="sexo"
          value={this.state.sexo}
          onChange={this.changeGender}
        >
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
        <div>
          <h3>{this.state.email}</h3>
          <h3>{this.state.senha}</h3>
          <h3>{this.state.sexo}</h3>
        </div>
      </div>
    );
  }
}

export default App;
