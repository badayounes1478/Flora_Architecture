import React from 'react'
import ImageHeader from '../ReusableComponents/Header'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'

const Mission = () => {
    return (
        <div>
        <Navigationbar />
        <ImageHeader title="ABOUT US" />
        <div className="about-border">
            <div className="about-title" style={{top:'-7%'}}>
                <strong>MISSION</strong>
                <div className="about-line"></div>
            </div>
            <span>
            We believe architecture to be a conceptually based intellectual endeavour and a form of critical inquiry that addresses the built and natural environments from the scale of the city to the scale 
            of the detail.
            </span>
            <span>
            The department is committed to producing conceptual thinkers and skilled makers 
            who are versed in the techniques and knowledge of the discipline and who are cognizant
             of: critical theory, history, science and progressive social values.
            </span>
            <span>
            To realize these objectives, design is taught as a critical, speculative and
             creative endeavour embracing both the humanities and the sciences.
            </span>
            <span>
            The College of Architecture strives to use design thinking and creative
             problem solving to address the issues faced by contemporary society.
            </span>
            <span>
            We integrate this approach into how we teach our students, the research that
             we produce, and the services that we provide to our communities.
            </span>
            <span>
            The overarching vision for the College of Architecture is to prepare our graduates to actively participate in the contemporary environment, 
            encourage and anticipate paradigm shifts, and respond to change in the local, national and international communities.
            </span>
        </div>
      
        <Footer />
    </div>
    )
}

export default Mission
