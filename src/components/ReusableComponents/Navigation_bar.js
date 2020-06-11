import React from 'react'
import logo from '../../assets/logo.png'
import '../ReusableComponentCss/Navigation_bar.css'
import down from '../../assets/back.svg'
import { Link } from 'react-router-dom'


const Navigation_bar = () => {
    return (
        <div className="navigationbar" style={{ height: 120 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className="logo" src={logo} alt="logo" />
                <div>
                    <span className="title">FLORA COLLEGE OF ARCHITECTURE</span>
                    <div className="sub-title">Architecture is an art we live in</div>
                </div>
            </div>
            <div className="navbar">
                <Link to="/">HOME</Link>
                <div className="dropdown">
                    <button className="dropbtn">ABOUT
                      <img src={down} alt="down" />
                    </button>
                    <div className="dropdown-content">
                        <Link to="/about">About us</Link>
                        <Link to="/vision">Vision</Link>
                        <Link to="/mission">Mission</Link>
                        <Link to="/notefromdirector">Note from Director</Link>
                        <Link to="/principlemessage">Principals Message</Link>
                        <Link to="/governingcounsil">Governing Council</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">FACULTY
                      <img src={down} alt="down" />
                    </button>
                    <div className="dropdown-content">
                        <Link to="/faculty">Faculty</Link>
                        <Link to="/staff">Staff Activity</Link>
                        <Link to="/adminstaff">Admin Staff</Link>
                        <Link to="/previousstaff">Previous Staff</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">COURSES
                      <img src={down} alt="down" />
                    </button>
                    <div className="dropdown-content">
                        <Link to="/barch">B.Arch</Link>
                        <Link to="/prospecting">Prospecting Students</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">ADMISSION
                      <img src={down} alt="down" />
                    </button>
                    <div className="dropdown-content">
                        <Link to="/overview">Overview</Link>
                        <Link to="/grants">Grants & Scholarships</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">NEWS/EVENTS
                      <img src={down} alt="down" />
                    </button>
                    <div className="dropdown-content">
                        <a href="#1">Students Activity</a>
                        <a href="#1">Upcoming Events</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">STUDENT CORNER
                      <img src={down} alt="down" />
                    </button>
                    <div className="dropdown-content">
                        <a href="#1">ICT Enabled Activities</a>
                        <a href="#1">Hostel</a>
                        <a href="#1">Library</a>
                         <a href="#1">Sports</a>
                        <a href="#1">Transport</a>
                        <a href="#1">Computer Lab</a>
                        <a href="#1">Creative Room</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">COMITTEE
                      <img src={down} alt="down" />
                    </button>
                    <div className="dropdown-content">
                        <a href="#1">Anti-Ragging Committee</a>
                        <a href="#1">Vishaka Committee</a>
                        <a href="#1">Internal Compliance Committee</a>
                        <a href="#1">SC/ST Committee</a>
                        <a href="#1">Student Affair Comitee</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation_bar
