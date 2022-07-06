import React, { Component } from 'react';

class Feed extends Component {
  render() {
    return (
      <div>
        <div className="App" key={this.props.id}>
          <h2>Usuario: {this.props.username}</h2>
          <h3>
            Tem{' '}
            {this.props.curtidas > 1
              ? this.props.curtidas + ' curtidas'
              : this.props.curtidas + ' curtida'}
          </h3>
          <h3>
            Tem{' '}
            {this.props.comentarios > 1
              ? this.props.comentarios + ' comentarios'
              : this.props.comentarios + ' comentario'}
          </h3>
          <hr />
        </div>
      </div>
    );
  }
}

export default Feed;
