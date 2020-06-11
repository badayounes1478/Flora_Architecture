import React from 'react'
import '../PagesCss/Faculty.css'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import ImageHeader from '../ReusableComponents/Header'
import Footer from '../ReusableComponents/Footer'

const Faculty = () => {
    return (
        <div>
            <Navigationbar />
            <ImageHeader title="FACULTY" />
            <div className="principle-grid">
                <div className="principle">
                    <div className="principle-title">
                        <strong>Principal</strong>
                        <div className="principle-line"></div>
                    </div>
                    <div className="image-container">

                    </div>
                </div>
                <div className="vice-principle">
                    <div className="vice-principle-title">
                        <strong>Vice Principal</strong>
                        <div className="principle-line"></div>
                    </div>
                    <div className="image-container">

                    </div>
                </div>
            </div>

            <div className="faculty">
                <div className="faculty-title">
                    <strong>Vice Principal</strong>
                    <div className="principle-line"></div>
                </div>
                <div className="faculty-grid">
                    <div className="image">hi</div>
                    <div className="image"> hi</div>
                    <div className="image">hi</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Faculty
