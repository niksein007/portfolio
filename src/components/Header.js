import React from "react";
import { IoMdMenu } from "react-icons/io";
import "./headerStyle/Header.css";
import { Link } from "react-router-dom";

class Header extends React.Component  {

  //method to activate the active class
  //Note LiNK is an anchor tag
  
  active = (e)=>{
     let exclude = e.target.id
     // making sure the event doesn't select other div or tags 
if (exclude !== 'menuContent'&&exclude !== 'menu'&& exclude !== 'linkCon'&&exclude !== 'nav') {

  let anchors =document.getElementsByClassName('anchor')
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].className =anchors[i].className.replace(" active","")
  }
 e.target.className += " active"
// console.log('mark wats wrong');

}

   
 
  }

  render(){
  return (
    <header>
      <nav  id='nav' onClick={this.active}>
        
      

        <Link to="/"  id="logo"  className='anchor' >
          Home
        </Link>
{/* using the window.innerWidth to get the viewport width */}
        <div  id ='linkCon' className={this.props.display?'showLinksCon':'hideLinksCon'} 
            onClick={ window.innerWidth <=600? this.props.linksHandler2:undefined}
            
            >
            
          <Link to="/" className='anchor links one '>
            {" "}
            PHome
          </Link>
          
          <Link to="designs" className='anchor links'>
            Designs 

          </Link>

          <Link to="about" className='anchor links' >
            {" "}
            About
          </Link>

          <Link to="contact"  className='anchor links' >
            {" "}
            Contact
          </Link>

        </div>

        <button id="menu" onClick={this.props.linksHandler}>
          <div className='menuContent'></div>
          {/* <div className='menuContent'></div> */}
          <div className='menuContent'></div>
        </button>
      </nav>
    </header>
  );
};
}

export default Header;
