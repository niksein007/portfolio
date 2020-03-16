import React from 'react'
import './headerStyle/Header.css'
import {Link} from 'react-router-dom'

  const Header = (props) => {
    return (
        <header>
       <nav className="header">
       <div id="logo">niksein</div>

       <Link to='/'> <div>projects</div></Link>

       <Link to='about'> <div>about</div></Link>

       <Link to='contact'> <div> contact</div></Link>
       <div onClick={props.asideHandler} >project links</div>
           </nav>
       </header>

    ) 
}


export default Header
