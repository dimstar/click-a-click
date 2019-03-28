import React, { Component } from 'react';
import './App.css';
import Listitem from './components/Listitem';
import _ from 'lodash';
// import TimeKeeper from './components/TimeKeeper';
const logger = true;
let log = (qualif = 'general mssg: ', mssg) => (logger) ? console.log( qualif + ': ', mssg) : '' ;

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
      score: 0,
      upsidedown: false,
      time: 5,
    }
  }

  handleGuess = (e) => {
    this.setState((state, props) => { 
      return {
        images: (state.upsidedown === false) ? _.shuffle(this.state.images) : this.state.images,
        upsidedown: true,
      };
    });
    this.handleGuessCondition(e.target.id); // @todo get state the fuck out of the dom
  }

  handleGuessCondition = ( made_guess ) => {
      switch(this.state.guess){
        case null :
          this.setState({ guess: made_guess} );
          break;
        case made_guess :
          this.resetGameState();
          break;
        default :
          this.setState((prevState, props) => {
            log('prev score', prevState.score)
            log('point', 1)
            log('new score', prevState.score + 1)
            return {score: prevState.score + 1};
          });
          this.resetGameState();
          break; 
      }
  }

  resetGameState = () => {
    //reset the game state
    this.setState({ guess: null, upsidedown: false, time: 5 } );
  }

  componentDidUpdate(){
    log('app state', this.state.upsidedown);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CLICK A CLICK!!!</h1>
          <p>Your Score: {this.state.score}</p>
        </header>
        {/* <TimeKeeper time={this.state.time} /> */}
        <div className="container w-100">
            <Listitem upsidedown={this.state.upsidedown} images={this.state.images} makeGuess={this.handleGuess} />
            {/* <LossModal /> */}
        </div>
        <footer>
          
        </footer>
      </div>
    );
  }
}

export default App;
