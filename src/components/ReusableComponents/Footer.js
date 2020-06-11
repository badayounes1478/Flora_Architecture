import React from 'react'
import '../ReusableComponentCss/Footer.css'
import facebook from '../../assets/facebook-3.svg'
import instagram from '../../assets/instagram-2-1.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin-icon.svg'
import copyright from '../../assets/copyright.svg'


const Footer = () => {
    return (
        <React.Fragment>
            <footer id="footer">
                <div className="grid2">
                    <div>
                        <strong>ABOUT FLORA INSTITUTE</strong>
                        <p>
                            At FCOA, you will have amazing opportunities to
                            explore architectural work by studying it in a
                            friendly and professional environment using modern
                             equipment and resources.
                          </p>
                        <div className="icons">
                            <img src={facebook} alt="facebook" />
                            <img src={instagram} alt="instagram" />
                            <img src={twitter} alt="twitter" />
                            <img src={linkedin} alt="linkedin" />
                        </div>
                    </div>
                    <div className="center">
                        <strong>QUICK LINKES</strong>
                        <div className="link">
                            <span><a href="#home">Home</a></span>
                            <span><a href="#admission">Admission</a></span>
                            <span><a href="#courses">Flora Institutes</a></span>
                            <span><a href="#achivements">Achivements</a></span>
                            <span className="no-border"><a href="#gallary">Establishment</a></span>
                        </div>
                    </div>

                    <div>
                        <strong>GET IN TOUCH</strong>
                        <div className="getintouch">
                            <p>Flora Institiute of Architecture</p>
                            <p>Near Khed Shivapur Toll Plaza,</p>
                            <p>  Khopi, Pune - 412205</p>
                            <p>Contact no- 9890-673-701</p>
                            <p>7030-719-401</p>
                            <p >7978-513-867</p>
                            <p style={{ marginTop: 50 }}>www.flora.in</p>
                        </div>
                    </div>

                    <div>
                        <strong>REACH US OUT</strong>
                        <div className="reachus" />
                    </div>

                </div>
            </footer>
            <div className="copyright">
                <img src={copyright} alt="copyright" />
                <strong>Flora institute 2020</strong>
            </div>
        </React.Fragment>
    )
}

export default React.memo(Footer)
