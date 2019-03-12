import React, { Component } from 'react';
import './App.css';

import CardFlipper from './components/CardFlipper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CardFlipper />
        </header>
      </div>
    );
  }
}

export default App;
