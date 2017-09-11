import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './Question';
import Results from './Results';

const initState = {
  englishCards: '',
  germanCards: '',
  frenchCards: '',
  spanishCards: '',
  fromLanguage: '',
  toLanguage: '',

  words: [
    { "en": "cat", "de": "Katz", "fr": "chat", "sp": "gato" },
    { "en": "dog", "de": "Hund", "fr": "chien", "sp": "perro" },
    { "en": "man", "de": "Mann", "fr": "homme", "sp": "hombre" },
    { "en": "woman", "de": "Frau", "fr": "femme", "sp": "mujer" },
    { "en": "boy", "de": "Junge", "fr": "garcon", "sp": "chico" },
    { "en": "girl", "de": "Madchen", "fr": "fille", "sp": "niña" },
    { "en": "house", "de": "Haus", "fr": "maison", "sp": "casa" },
    { "en": "car", "de": "Auto", "fr": "voiture", "sp": "coche" },
    { "en": "plane", "de": "Fleugzug", "fr": "avion", "sp": "avión" },
    { "en": "butterfly", "de": "Schmetterling", "fr": "papillon", "sp": "mariposa" },
  ]
}

class App extends Component {
  constructor() {
    super();
    this.state = initState
    this.flashCardEnglish = this.flashCardEnglish.bind(this);
    this.flashCardGerman= this.flashCardGerman.bind(this);
    this.flashCardFrench= this.flashCardFrench.bind(this);
    this.flashCardSpanish= this.flashCardSpanish.bind(this);
    }

  flashCardEnglish() {
    let english = [];
    for (var i = 0; i < 11; i++) {
      english.push(this.initState.words[i].en);
    }
    this.setState({
      english:this.state.englishCards
    },this);
  }
  flashCardGerman(){
    let german = [];
    for (var i = 0 ; i < 11; i++){
      german.push(initState.words[i].de)
    }
    this.setState({
      german:this.germanCards
    },this);
  }
  flashCardFrench(){
    let french = [];
    for (var i = 0 ; i < 11; i++){
      french.push(initState.words[i].fr)
    }
    this.setState({
      french:this.frenchCards
    },this);
  }
  flashCardSpanish(){
    let spanish = [];
    for (var i = 0 ; i < 11; i++){
      spanish.push(initState.words[i].sp)
    }
    this.setState({
      spanish:this.spanishCards
    },this);
  }

  render() {
    return (
      <div>
      <Question
      english={this.state.englishCards}
      spanish={this.state.spanishCards}
      german={this.state.germanCards}
      french={this.state.frenchCards}
           />
      <Results />
      </div>
    );
  }
}

export default App;
