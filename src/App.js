import React from 'react';
import logo from './images/logo.png';
import bulbs from './images/bulbs.jpg';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import './appStyle/App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

class App extends React.Component {

	state ={
		iframes:[
			'https://niksein007.github.io/calculator/',
			'https://niksein007.github.io/',
			'https://niksein007.github.io/dicegame/'
			
	]
	}

	render(){
	const iframes = this.state.iframes.map((iframe,index)=>{
		return <iframe key={index} title={`num${index}`} src={iframe}> </iframe>
	})

	return (
		<div className="App">
		<BrowserRouter>
			<Header logo={logo} />
			<Section
			 bulbs={bulbs} 
			 switch ={Switch}
			 route ={Route}
			 iframes={iframes}
			 />
			<Footer />
			</BrowserRouter>
		</div>
	);
	}
}

export default App;
