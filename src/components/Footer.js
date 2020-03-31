import React from 'react'
import './footerStyle/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare} from '@fortawesome/free-brands-svg-icons'





const Footer = () => {
    return (
        <footer className='footer'>
        <a href='https://www.linkedin.com/in/mark-pearce-ba359996/'><FontAwesomeIcon icon={faLinkedin}  className='icon'/></a>
        <a href='https://github.com/niksein007'> <FontAwesomeIcon icon={faGithubSquare}   className='icon' /></a>
        <a href='https://twitter.com/niksein007'><FontAwesomeIcon icon={faTwitterSquare} className='icon'  /></a>



        </footer>
    )
}

export default Footer
