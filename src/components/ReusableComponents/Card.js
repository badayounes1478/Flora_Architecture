import React from 'react'
import '../ReusableComponentCss/card.css'

const Card = () => {
    return (
        <div style={{display:'flex', marginLeft:'12%', marginTop:15}}>
            <div className="box">
              <div style={{marginBottom:'15%'}}>20</div>
              <div>MAY</div>
            </div>
            <div className="box-content">
              <p>Report on Expert Lecture on Graphical Representation and Design of HVAC</p>
              <span>Venue: Auditorium</span>
            </div>
        </div>
    )
}

export default Card
