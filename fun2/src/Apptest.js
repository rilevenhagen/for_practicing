// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

// const BemVindo = props => {
//   return (
//     <div>
//       <h2>Seja Bem-vindo(a) {props.nome}</h2>
//       <h3> Tenho {props.idade} anos</h3>
//     </div>
//   );
// };

// const Equipe = props => {
//   return (
//     <div>
//       <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
//       <Social insta={props.instagram} />
//     </div>
//   );
// };

// const Sobre = props => {
//   return (
//     <div>
//       <h2>Olá sou o(a) {props.nome}</h2>
//       <h2>🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟</h2>
//       <h2>Cargo: {props.cargo}</h2>
//       <h2>🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟</h2>
//       <h2>Cargo: {props.idade}</h2>
//       <h2>🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟</h2>
//     </div>
//   );
// };

// const Social = props => {
//   return (
//     <div>
//       <a href="https://linkedin.com/in/ricardo-levenhagen">LinkedIn</a>
//       <br />
//       <a href={props.insta}>Instagram</a>
//       <br />
//       <a href="https://www.ricardowebdev.com">Portifolio</a>
//     </div>
//   );
// };

// const Oi = () => {
//   return (
//     <div>
//       <h2>Bora ver no que da</h2>
//       <h2>Pois é hora de fazer codigo</h2>
//     </div>
//   );
// };

// class Equipe extends Component {
//   render() {
//     return (
//       <div>
//         <Sobre
//           nome={this.props.nome}
//           cargo={this.props.cargo}
//           idade={this.props.idade}
//         />
//       </div>
//     );
//   }
// }

// class Sobre extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Olá sou o(a) {this.props.nome}</h2>
//         <h2>Idade: {this.props.idade}</h2>
//         <h2>➡️🦖Cargo: {this.props.cargo}</h2>
//         <Sobre />
//         <h2>🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟</h2>
//       </div>
//     );
//   }
// }

// const Sosical = () => {
//   return (
//     <div>
//       <a href=""> Facebook </a>
//       <a href=""> instaram </a>
//     </div>
//   );
// };

function App() {
  // constructor(props){ super(props);
  //   this.state = {
  //     nome: 'Ricardo'
  //   };}

  return (
    <div className="App">
      <header className="App-header">
        <div>{this.state.nome}</div>

        {/* <BemVindo nome="Ricardo" idade="44" />
        <BemVindo nome="Luca" idade="13" />
        <BemVindo nome="Matteo" idade="9" />
        <Oi />
        <h1>Vamos fazer um pouco de codigo</h1>

        <div>
          <h1>Conheç nossa Equipe</h1>
          <Equipe
            nome="Ricardo"
            cargo="Programador"
            idade="44"
            instagram="https://www.instagram.com/levenhagen/"
          />
          <Equipe nome="Barbara" cargo="Programador" idade="46" />
          <Equipe nome="Luca" cargo="Programador" idade="12" />
          <Equipe nome="Nicholas" cargo="Programador" idade="9" />
          <Equipe nome="Matteo" cargo="Programador" idade="9" />
        </div> */}

        {/* <div>
          <h1>Connheça nossa equipe!!</h1>
          <Equipe nome="Ricardo" cargo="Programador" idade="44" />
          <Equipe nome="Luca" cargo="Filho" idade="13" />
          <Equipe nome="Nicholas" cargo="Filho" idade="9" />
          <Equipe nome="Matteo" cargo="Filho" idade="9" />
        </div> */}
      </header>
    </div>
  );
}

export default App;
