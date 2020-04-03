import React from 'react'
import './TopHeader.css'

const TopHr = (props) =>{
    return(
        <div className='topHeader'>
    <h2>{props.heading}</h2>
            
        <hr id='topHr'/>

        </div>
    )
}

export default TopHr