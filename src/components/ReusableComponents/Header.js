import React from 'react'
import '../ReusableComponentCss/Header.css'


const Header = (props) => {
    return (
        <div className="header-image">
           <div>
            <span className="header-line"></span>
            <span className="header-title">{props.title}</span>
            </div>
        </div>
    )
}

export default React.memo(Header)
