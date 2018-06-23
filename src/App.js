import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listitem from './components/Listitem';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [
        { id: 0 ,img: '/assets/images/beth.png'},
        { id: 1 ,img: '/assets/images/birdperson.png'},
        { id: 2 ,img: '/assets/images/evilmorty.png'},
        { id: 3 ,img: '/assets/images/gianthead.png'},
        { id: 4 ,img: '/assets/images/goldenford.png'},
        { id: 5 ,img: '/assets/images/jerry.png'},
        { id: 6 ,img: '/assets/images/jessica.png'},
        { id: 7 ,img: '/assets/images/meeseeks.png'},
        { id: 8 ,img: '/assets/images/morty.png'},
        { id: 9 ,img: '/assets/images/mr.png'},
        { id: 10 ,img: '/assets/images/rick.png'},
        { id: 11 ,img: '/assets/images/summer.png'},
      ],
      guess: null,
      answer: null,
      score: 0,
    }
  }

  shuffle() {
    let cut_per_click = this.state.images.slice();

    let new_state_images = this.state.images.sort( this.sortCrazy );

    console.log(new_state_images);
    
    this.setState({ 
      images: new_state_images
    });
  }

  sortCrazy(a, b){
    console.log(a > Math.floor(Math.random() * Math.floor(b)));
    return a > Math.floor(Math.random() * Math.floor(b));
  }

  handleGuess = (e) => {
    console.log(e.target.id);
    this.shuffle();
    this.setState({ guess: e });
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Click a CLick!</h1>
        </header>
        <div className="container">
            <Listitem images={this.state.images} makeGuess={this.handleGuess} />
        </div>
        <footer>
          
        </footer>
      </div>
    );
  }
}

export default App;
