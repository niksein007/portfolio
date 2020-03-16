import React from 'react';
import About from './sectionCom/About';
import Contact from './sectionCom/Contact';
import Designs from './sectionCom/Designs';
import './sectionStyle/Section.css';

const Section = (props) => {
	// console.log(props.switch);
	return (
		<section className="section">
			{/* <img src={props.bulbs} alt="bulbs" /> */}

			<props.switch>
				<props.route
					path="/"
					exact
					component={() => {
						return <Designs iframes={props.iframes} />;
					}}
				/>
				<props.route path="/about" component={About} />
				<props.route path="/contact" component={Contact} />
			</props.switch>
		</section>
	);
};

export default Section;
