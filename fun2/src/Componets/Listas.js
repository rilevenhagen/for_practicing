import React, { Component } from 'react';
import Feed from './Feed';

class Listas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, username: 'Ricardo', curtidas: 10, comentarios: 2 },
        { id: 1, username: 'Luca', curtidas: 100, comentarios: 22 },
        { id: 1, username: 'Nicholas', curtidas: 134, comentarios: 24 },
        { id: 1, username: 'Matteo', curtidas: 156, comentarios: 26 },
        { id: 1, username: 'Barbara', curtidas: 165, comentarios: 28 },
        { id: 1, username: 'Aurelia', curtidas: 157, comentarios: 42 },
        { id: 1, username: 'Nico', curtidas: 145, comentarios: 82 },
        { id: 1, username: 'Pedro', curtidas: 145, comentarios: 0 },
        { id: 1, username: 'Zé', curtidas: 0, comentarios: 82 },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <div>hello hello</div>
        {this.state.feed.map(item => {
          return (
            <Feed
              key={item.id}
              username={item.username}
              curtidas={item.curtidas}
              comentarios={item.comentarios}
            />
          );
        })}
      </div>
    );
  }
}

export default Listas;
