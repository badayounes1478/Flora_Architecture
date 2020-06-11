import React, { useState } from 'react'
import '../PagesCss/Home.css'
import Fixnavigationbar from '../ReusableComponents/Fix_navigation_bar'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Info from '../../assets/commerce-and-shopping.svg'
import LineTitle from '../ReusableComponents/Line_Title'
import Student from '../../assets/student1.png'
import Button from '../ReusableComponents/Button'
import Card from '../ReusableComponents/Card'
import Card2 from '../ReusableComponents/Card2'
import Footer from '../ReusableComponents/Footer'
import Social from '../../assets/social.svg'


const Home = () => {

    const [flag, setflag] = useState(false)

    const showForm = () => {
        setflag(!flag)
    }
    return (
        <div>
            <Fixnavigationbar />
            <Navigationbar />
            <div className="image-back">
                <div className="block">
                    <div className="one">We are Changing the</div>
                    <div className="second">World & our Weapon is</div>
                    <div className="third">Quality Education</div>
                </div>
                <div className="content-block">
                    <div className="title">
                        <div>Quick</div>
                        <div>Facts</div>
                    </div>
                    <div>
                        <div className="number">25</div>
                        <div className="sub-title">Silver Jubilee year of Architecture Dept.</div>
                    </div>
                    <div>
                        <div className="number">47</div>
                        <div className="sub-title">College Ranks from 1992-2010</div>
                    </div>
                    <div>
                        <div className="number">2nd</div>
                        <div className="sub-title">Archumen Quiz 2016, South Zone</div>
                    </div>
                    <div>
                        <div className="number">2nd</div>
                        <div className="sub-title">Runner up, ZONASA</div>
                    </div>
                </div>

                {
                    flag === false ? <div class="circle" onClick={showForm}>
                        <img src={Info} alt="info" />
                    </div> : <div className="form">
                            <div className="head">
                                <div></div>
                                <div>Admission</div>
                                <div onClick={showForm} style={{ cursor: 'pointer' }}>X</div>
                            </div>
                            <div className="form-content">
                                <div className="icon-container">
                                    <span className="icon">
                                        <img src={Social} alt="social" />
                                    </span>
                                    <span className="text-content">
                                        Hello! Welcome to Flora college
                              </span>
                                </div>
                                <div className="icon-container1">
                                    <span className="icon">
                                        <img src={Social} alt="social" />
                                    </span>
                                    <span className="text-content" style={{ display: 'flex', flexDirection: 'column' }}>
                                        Please Tell a bit about yourself.
                              <div style={{ marginTop: 15, width: '70%' }}>
                                            <div>Your Name</div>
                                            <input type="text" placeholder="full name" />
                                        </div>
                                        <div style={{ marginTop: 15, width: '70%' }}>
                                            <div>Your E-mail Address</div>
                                            <input type="text" placeholder="E-mail" />
                                        </div>
                                        <div style={{ marginTop: 15, width: '70%' }}>
                                            <div>Contact Number</div>
                                            <input type="text" placeholder="Contact Number" />
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div className="submit">
                                SUBMIT
                   </div>
                        </div>
                }




            </div>
            <div className="vision" style={{ marginTop: 150 }}>
                <div className="grid">
                    <LineTitle title="FLORA COLLEGE OF ARCHITECTURE" />
                    <p className="left">
                        Flora College of Architecture is a place where
                        brilliant minds assemble and collaborate,
                        where they pool together their individual
                        talents across disciplines in service of big
                        projects and big ideas. It is a vibrant
                        community teaming with students
                        collaborating with experts and specialists:
                        a place of innovation and creativity. It is an
                        intersection of disciplines, a launching pad
                        for a brilliant career, and a highly unique state
                        of mind. It is a perfectenvironment to pursue
                        your passion. Here, the future is envisioned
                        each day.
                           </p>
                </div>
                <div className="grid2">
                    <img src={Student} alt="student" />
                </div>
            </div>

            <div className="brech" style={{ marginTop: 50, marginLeft: '5%' }}>
                <LineTitle title="COURSES OFFERED" styles={{ width: '5%' }} />
                <div className="title left1">
                    <div>
                    Bachelor of Architeture
                    </div>
                </div>
                <p className="left1">
                The College offers an undergraduate degree in Architecture (intake – 40 seats). The admission 
                processes are governed by the guidelines of Council of Architecture, New Delhi (COA) and the 
                Savitribai Phule Pune University.
                </p>
                <div className="left1">
                    <Button title="Learn More" />
                </div>
            </div>

            <div className="quote">
               <div className="quote-title">FLORA COLLEGE OF ARCHITECTURE</div>
                   <div className="quote-subtitle">Architecture is an art we live in</div>
            </div>


            <div className="news-events">
                <div>
                    <LineTitle title="EVENTS" />
                    <div>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <div className="left2">
                            <Button title="More Events" />
                        </div>
                    </div>
                </div>
                <div>
                    <LineTitle title="NEWS & UPDATE" />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <div className="left2">
                        <Button title="More News" />
                    </div>
                </div>
            </div>

            <div className="placement">
                <LineTitle title="GALLARY" styles={{ width: '5%' }} />
                <div className="grid">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className="student-stories" style={{ marginTop: 50 }}>
                <div>
                    <LineTitle title="OUR STUDENT STORIES" />
                    <div className="student-image">
                    </div>
                </div>
                <div className="student-content">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <strong>
                        NEHA SINGH
                    </strong>
                </div>
            </div>

            <Footer />

        </div>


    )
}

export default Home
