import React, { Component } from 'react';
// import Button from './components/Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: ' ',
    };

    this.openCookie = this.openCookie.bind(this);

    this.sentence2 = [
      `Keep smiling, because life is a beautiful thing and there's so much to smile about.`,
      'The way to get started is to quit talking and begin doing. -Walt Disney',
      ` Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs`,
      `If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt`,
      `If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey`,
      `If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron`,
      `Life is what happens when you're busy making other plans. -John Lennon`,
      `Whoever is happy will make others happy too. -Anne Frank`,
      `Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson`,
      `The future belongs to those who believe in the beauty of their dreams." -Eleanor Roosevelt`,
      `Tell me and I forget. Teach me and I remember. Involve me and I learn." -Benjamin Franklin`,
      `The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." -Helen Keller`,
      `It is during our darkest moments that we must focus to see the light." -Aristotle`,
      `You will face many defeats in life, but never let yourself be defeated." -Maya Angelou`,
      `Life is a succession of lessons which must be lived to be understood." -Ralph Waldo Emerson`,
    ];
  }

  openCookie() {
    let state = this.state;
    let number = Math.floor(Math.random() * this.sentence2.length);
    state.sentence = '" ' + this.sentence2[number] + ' "';
    this.setState(state);
    console.log(state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img src={require('./assets/biscoito.png')} alt="" />
            <Button name="Open Cookie" openBtn={this.openCookie} />
            <h3>{this.state.sentence}</h3>
          </div>
        </header>
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.openBtn}>{this.props.name}</button>
      </div>
    );
  }
}

export default App;
