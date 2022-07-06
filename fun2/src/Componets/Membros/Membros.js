import React, { Component } from 'react';

class Membro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: props.nome,
      status: false,
    };
    this.entrar2 = this.entrar2.bind(this);
    this.sair2 = this.sair2.bind(this);
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar2() {
    this.setState({ nome: 'Ricardo' });
  }

  sair2() {
    this.setState({ nome: 'Volte sempre 🤪' });
  }

  entrar() {
    this.setState({ status: true });
  }

  sair() {
    this.setState({ status: false });
  }

  render() {
    return (
      <div>
        <div>Membros</div>
        <h2>Bem-vindo(a) {this.state.nome}</h2>
        <button onClick={this.entrar2}>Entrar como Ricardo</button>
        <button onClick={this.sair2}>Sair</button>

        <div>
          <div>
            {this.state.status ? (
              <div>
                <h1>Seja bem-vindo</h1>
                <button onClick={this.sair}>Sair</button>
              </div>
            ) : (
              <div>
                <h2>Volte sempre!!</h2>
                <button onClick={this.entrar}>Entrar no Sistema</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Membro;
