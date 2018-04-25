import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
// import TableauTest from './components/tableauReact.js';
import Canvas from './components/Canvas';
// const { SubMenu } = Menu;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Canvas/>
      </div>
    );
  }
}

export default App;