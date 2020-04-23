import React from 'react';
import './App.css';
import {nouns, actions} from './constants.js'

class App extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
    
    }
  }
  
  shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  render(){
    let random_action = this.shuffle(actions);
    let list = []
    random_action.forEach(obj => {
      let noun = nouns[Math.floor(Math.random() * nouns.length)];
      list.push(
        <p>{obj} como se fosse {noun}</p>
      )
    })
    
    return (
      <div className="App">
        <header className="App-header">
          {list}
        </header>
      </div>
    );
  }
}

export default App;
