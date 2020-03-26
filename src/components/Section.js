import React from 'react';
import About from './sectionCom/About';
import Contact from './sectionCom/Contact';
import './sectionStyle/Section.css';
import Projects from './sectionCom/Projects';
import Designs from './sectionCom/Designs';


import { Switch, Route } from 'react-router-dom';

const Section = (props) => {
	// console.log(props.switch);
	return (
		<section className="section"
		//making the side nav disappear when the pointer is on the section
		onMouseOver = { window.innerWidth <=600 ?  props.linksHandler2:undefined}

		>
			{/* <img src={props.bulbs} alt="bulbs" /> */}

			<Switch>
				<Route
					path="/"
					exact
					component={() => {
						return <Projects iframes={props.iframes} />;
					}}
				/>
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				{/* this allows the indivial projects to be displayed underneat the header  */}
				<Route path = '/designs'  component={ ()=>{
					return <Designs href={props.href}/>
				}}/>
			</Switch>
		</section>
	);
};

export default Section;
