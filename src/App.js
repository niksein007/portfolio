import React from 'react';
import logo from './images/logo.png';
import bulbs from './images/bulbs.jpg';
import Header from './components/Header';
import Aside from './components/Aside';
import Section from './components/Section';
import Footer from './components/Footer';
import './appStyle/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
	state = {
		links: [
			 {
				name:"Calculator",
			    url:'https://niksein007.github.io/calculator/'},
		
		{
			name:"Dice Game",
			url:'https://niksein007.github.io/dicegame/'} 
		],


		display:false
	};
	asideHandler = () => {
		
		this.state.display ?
		this.setState({
			display:false
		})
		:this.setState({
			display:true
		})

		
	};
	render() {
		const iframes = this.state.links.map((link, index) => {
			return (
				<iframe key={index} title={`num${index}`} src={link.url}>
				</iframe>
			);
		});

		const href = this.state.links.map((link, index) => {
			return (
				<a key={index}  href={link.url}>{link.name}
				</a>
			);
		});

		return (
			<div className="App">
				<BrowserRouter>
					<div className="appGrid">
						<div className="header">
							{' '}
							  <Header asideHandler={this.asideHandler} logo={logo} /> {' '}
						</div>{' '}
						<div className="aside">
							{' '}
							  <Aside display = {this.state.display} href = {href}/>
						</div>{' '}
						<div className="section">
							{' '}
							  <Section bulbs={bulbs} switch={Switch} route={Route} iframes={iframes} /> {' '}
						</div>{' '}
						<div className="footer">
							{' '}
							  <Footer />  {' '}
						</div>{' '}
					</div>{' '}
				</BrowserRouter>{' '}
			</div>
		);
	}
}

export default App;
