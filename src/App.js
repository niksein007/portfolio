import React from 'react';
import logo from './images/logo.png';
import bulbs from './images/bulbs.jpg';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import './appStyle/App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

function App() {
	return (
		<div className="App">
		<BrowserRouter>
			<Header logo={logo} />
			<Section bulbs={bulbs} switch ={Switch} route ={Route}/>
			<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
