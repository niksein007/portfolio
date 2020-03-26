import React from 'react';
 import './designsStyle/Designs.css'
import { BrowserRouter, Switch ,Route} from 'react-router-dom';

function Designs(props) {
	return <div className="designs">

		<p>Below is a list of my projects. Click on the links to go directly to the website</p>
		
		{props.href}
		</div>;
}

export default Designs