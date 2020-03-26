import React from 'react'
import './footerStyle/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare} from '@fortawesome/free-brands-svg-icons'
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'





const Footer = () => {
    return (
        <footer className='footer'>
        <FontAwesomeIcon icon={faLinkedin}  className='icon'/>
        <FontAwesomeIcon icon={faGithubSquare}   className='icon' />
        <FontAwesomeIcon icon={faTwitterSquare} className='icon'  />
        <FontAwesomeIcon icon={faEnvelope}  className='icon' />



        </footer>
    )
}

export default Footer
