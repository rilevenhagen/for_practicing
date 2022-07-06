import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      error: '',
    };
    this.userInput = this.userInput.bind(this);
    this.userEmail = this.userEmail.bind(this);
    this.userSenha = this.userSenha.bind(this);
    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar(e) {
    e.preventDefault();
    const { nome, email, senha } = this.state;
    if (nome !== '' && email !== '' && senha !== '') {
      alert(`nome: ${nome}
    email: ${email}
    senha: ${senha}`);
    } else {
      this.setState({ error: 'Ops!!!! Esta faltando algum dado' });
    }
  }
  userInput(e) {
    let input = e.target.value;
    this.setState({ nome: input });
    console.log(input);
  }

  userEmail(e) {
    let input = e.target.value;
    this.setState({ email: input });
    console.log(input);
  }

  userSenha(e) {
    let input = e.target.value;
    this.setState({ senha: input });
    console.log(input);
  }

  render() {
    return (
      <div className="App-header">
        <h1>Novo Usuario</h1>

        {this.state.error && <p>{this.state.error}</p>}

        <form onSubmit={this.cadastrar}>
          <label>Nome - </label>
          <input
            type="text"
            value={this.state.nome}
            onChange={this.userInput}
          />{' '}
          <br />
          <label>Email - </label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.userEmail}
          />{' '}
          <br />
          <label>Senha - </label>
          <input
            type="password"
            value={this.state.senha}
            onChange={this.userSenha}
          />{' '}
          <br />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default App;
