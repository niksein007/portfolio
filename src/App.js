import React from 'react';
import logo from './images/logo.png';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import './appStyle/App.css';

function App() {
	return (
		<div className="App">
			<Header logo={logo} />
			<Section />
			<Footer />
		</div>
	);
}

export default App;
