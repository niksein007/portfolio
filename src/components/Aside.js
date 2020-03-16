import React from 'react'
import './asideStyle/Aside.css'

const Aside = (props) => {
    return (
        <aside className={props.display ? "display":''} >
            <div>{props.href}</div>
        </aside>
    )
}

export default Aside
