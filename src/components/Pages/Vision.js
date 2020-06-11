import React from 'react'
import ImageHeader from '../ReusableComponents/Header'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'

const Vision = () => {
    return (
        <div>
        <Navigationbar />
        <ImageHeader title="ABOUT US" />
        <div className="about-border">
            <div className="about-title" style={{top:'-14%'}}>
                <strong>VISION</strong>
                <div className="about-line"></div>
            </div>
            <p>
            "Establisment of knowledge centre to impart quality quality education and build up technologies for 
            sustainable development."
            </p>
        </div>
      
        <Footer />
    </div>
    )
}

export default Vision
