import React from 'react'
import ImageHeader from '../ReusableComponents/Header'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'
/* using the notefromdirector css */
const Principlemessage = () => {
    return (
        <div>
            <Navigationbar />
            <ImageHeader title="ABOUS US" />

            <div className="note-from-director-conteiner">
                <div className="note-from-director-title">
                    <strong>PRINCIPAL's MESSAGE</strong>
                    <div className="about-line"></div>
                </div>
                <div className="note-from-director-grid">
                    <div className="note-from-director-image"></div>
                    <div className="note-from-director-content">
                        <div className="note-from-director-sub-title">PRINCIPAL's NAME</div>
                        <p>
                        The Flora Education Society's, College of Architecture, combines teaching and service to proactively develop the discipline of creative and innovative problem-solving to address the needs of our society. Graduates of the College of Architecture will participate in the contemporary environment, encourage, anticipate and respond to changes in the local, national and international communities. The College of Architecture, with program in Architecture is dedicated to accomplishing its mission through excellence in teaching, research and service by preparing graduates for leadership roles in rebuilding cities and improving the quality of the built environment. FCOA is dedicated to educating future generations of ethical professionals, creative designers and informed citizens. By offering an intense curriculum, led by an accomplished faculty, in a comprehensive studio and classroom environment, the College of Architecture program will educate students for significant roles as practitioners, developers and leaders in architecture, construction, community planning and community development. Students will be challenged to develop their abilities in problem-solving, creative thinking and informed decision making, as a focus of their professional education. They will accomplish this in a nurturing and student-centered environment that fosters personal development and professional excellence.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Principlemessage