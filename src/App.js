import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
// import TableauTest from './components/tableauReact.js';
// import Canvas from './components/Canvas';
// import AppLayout from './components/AppLayout';
import AppLayout from './components/AppLayout';
// const { SubMenu } = Menu;

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Canvas/> */}
				<AppLayout/>
			</div>
		);
	}
}

export default App;