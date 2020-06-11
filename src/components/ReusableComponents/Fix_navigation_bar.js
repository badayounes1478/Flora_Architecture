import React from 'react'
import '../ReusableComponentCss/Fix_navigation_bar.css'
import Email from '../../assets/multimedia.svg'

const Fix_navigation_bar = () => {
    return (
        <nav className="fix_navigation_bar">
            <div style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
                <img src={Email} alt="email" style={{marginRight:10}} />
                <span>principal@flora.in</span>
            </div>
            <div style={{marginLeft:'5%'}}>
                Admission open 2020-2021
           </div>
            <div >
                <a href="#news">News</a>
                <a href="#events">Events</a>
                <a href="#admission">Admission</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}

export default Fix_navigation_bar
