import React from 'react'
import './asideStyle/Aside.css'
import {link} from 'react-router-dom'

const Aside = (props) => {
    return (
        <aside className={props.display ? "display":''} >
            <div>{props.href}</div>
        </aside>
    )
}

export default Aside
