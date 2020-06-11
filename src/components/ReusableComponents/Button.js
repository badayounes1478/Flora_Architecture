import React from 'react'
import next from '../../assets/back3.svg'
import '../ReusableComponentCss/Button.css'

const Button = (props) => {
    return (
        <div className="button">
            <span>{props.title}</span>
            <span>
                <img src={next} alt="next" />
            </span>
        </div>
    )
}



export default Button
