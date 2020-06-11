import React from 'react'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'
import { Link } from 'react-router-dom'
import '../PagesCss/Barch.css'


const Barch = () => {
    return (
        <div>
            <Navigationbar />
            <div className="barech_navigation_bar_sub">
                <Link to="/brech" className="active">B.Arch</Link>
                <Link to="/prospecting" className="inactive">Prospecting Students</Link>
            </div>

            <div className="barch-container">
                <div className="barch-title">
                    <strong>ABOUT FLORA</strong>
                    <div className="barch-line"></div>
                </div>
                <div>
                    <p>
                        The degree provided by Flora is Bachelor of Architecture, completed in the time span of five years. The institute is recognized by the council of Architecture and Affiliated to Savitribai Phule Pune University.
                        During the study period, the course provides a foundation in design, aesthetics and complete building science. The students undergo practical training under the supervision of senior professionals aimed at
                         providing them hands-on experience.
                    </p>
                    <br></br>
                    <p>
                        The students apply knowledge gained so for in a professional environment. For the detailed course structure please click the link:<a href="http://www.coa.gov.in"> http://www.coa.gov.in</a>
                    </p>
                    <div className="barch-sub-container">
                        <span>Course Outline of B. Arch. 2015 Pattern (Revised in 2018)</span>
                    </div>
                    <p>
                        FIVE YEARS DEGREE COURSE
                    </p>
                    <br></br>
                    <br></br>
                    <p>
                        BACHELOR OF ARCHITECTURE
                                        </p>
                    <br></br>
                    <br></br>
                    <p>
                        This course is affiliated to the Savitribai Phule Pune University (SPPU), and approved by the Council of Architecture (COA), New Delhi and All India Council For Technical Education, New Delhi(AICTE). The structure of Course for Bachelor of Architecture is as mentioned below.
                 </p>
                    <br></br>
                    <br></br>
                    <span className="barch-sub-container-title">
                        1. FIRST YEAR B.ARCH
                   </span>
                    <br></br>
                    <br></br>
                    <p>
                        First-year of this course provides basic foundations in aesthetics, const. technology and design. It also aims at developing visualization and drafting skills.
                    </p>
                    <br></br>
                    <br></br>
                    <p>Term I</p>
                    <br></br>
                    <br></br>
                    <p>1. Design I. </p>
                    <p>2. Building Technology & Materials I</p>
                    <p>3. Theory of Structures I</p>
                    <p>4. Architectural Drawing & Graphics I.</p>
                    <p>5.Humanities</p>
                    <p>6.Introduction to Architecture.</p>
                    <p>7. Workshop I</p>
                    <br></br>
                    <br></br>
                    <p>Term II</p>
                    <br></br>
                    <br></br>
                    <p>1. Design II</p>
                    <p>2. Building Technology & Materials II</p>
                    <p>3. Theory of Structures II </p>
                    <p>4. Architectural Drawing & Graphics II</p>
                    <p>5. History of Architecture I</p>
                    <p>6. Climatology</p>
                    <p>7. Workshop II</p>
                    <br></br>
                    <br></br>
                    <span className="barch-sub-container-title">
                        2. SECOND YEAR B.ARCH
                                      </span>
                    <br></br>
                    <br></br>
                    <p>
                        This course continues setting up and consolidation of the foundations. The emphasis is on integration and application of basic subjects in design, where the focus is on working details and presentation of the design.
                    </p>
                    <br></br>
                    <br></br>
                    <p>Term I</p>
                    <br></br>
                    <br></br>
                    <p>1. Design III</p>
                    <p>2. Building Technology & Materials III </p>
                    <p>3. Theory of Structures III</p>
                    <p>4. Building Services I</p>
                    <p>5. History of Architecture II</p>
                    <p>6. Architectural Drawing & Graphics III</p>
                    <p>7. Surveying & Levelling</p>
                    <br></br>
                    <br></br>
                    <p>Term II</p>
                    <br></br>
                    <br></br>
                    <p>1. Design IV</p>
                    <p>2. Building Technology & Materials IV</p>
                    <p>3. Theory of Structures IV</p>
                    <p>4. Building Services II</p>
                    <p>5. History of Architecture III</p>
                    <p>6. Technical Communication</p>
                    <p>7. Working Drawing I</p>
                    <br></br>
                    <br></br>
                    <span className="barch-sub-container-title">
                        3. THIRD YEAR B.ARCH                                      </span>
                    <br></br>
                    <br></br>
                    <p>This year introduces the advanced knowledge of the subjects of Const. & Materials Services, Structures, and Landscape etc. The application of this knowledge in the design of complex projects.</p>
                    <br></br>
                    <br></br>
                    <p>1. Architectural Design III</p>
                    <p>2. Building Technology& Materials III</p>
                    <p>3.Theory of Structures III</p>
                    <p>4. Building Services II</p>
                    <p>5. Landscape Architecture & Environmental Sciences</p>
                    <p>6. Seminar on Contemporary Architecture</p>
                    <p>7. Working Drawing</p>
                    <p>8. Technical Communication</p>
                    <br></br>
                    <br></br>
                    <span className="barch-sub-container-title">
                        4. FOURTH YEAR B.ARCH                                     </span>
                    <br></br>
                    <br></br>
                    <p>This year is aimed at increasing the depth and scope of knowledge in the design and supporting subjects. New subjects are introduced as electives in four streams – Design, Technology management & allied. A dissertation is to be submitted by students based on the architectural topic after conducting research on the same. </p>
                    <br></br>
                    <br></br>
                    <p>1. Architectural Design IV</p>
                    <p>2. Advanced Building Technology& Services</p>
                    <p>3. Design &Technical Elective</p>
                    <p>4. Quantity Surveying and Estimation</p>
                    <p>5. Specification Writing</p>
                    <p>6. Town Planning</p>
                    <p>7. Professional Practice</p>
                    <p>8. Dissertation & Architectural Project Part I</p>
                    <br></br>
                    <br></br>
                    <span className="barch-sub-container-title">
                        5. FIFTH YEAR B.ARCH
                    </span>
                    <br></br>
                    <br></br>
                    <p>TERM I</p>
                    <br></br>
                    <br></br>
                    <p>The students undergo 6 months of practical training in a professional office aimed at providing those hands-on experience. The students apply knowledge gained so far in a professional environment. </p>
                    <br></br>
                    <br></br>
                    <p>1. Practical Training</p>
                    <br></br>
                    <br></br>
                    <p>TERM II</p>
                    <br></br>
                    <br></br>
                    <p>Design thesis is a culmination of knowledge and skills gained during 4 & 1/2 years of Architectural education. It is a springboard to the professional world.</p>
                    <br></br>
                    <br></br>
                    <p>1. Architectural Project (Part II)</p>
                    <br></br>
                    <br></br>
                    <p>2. Management Elective</p>
                    <br></br>
                    <br></br>
                    <p>3. Allied Elective</p>
                    <br></br>
                    <br></br>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Barch

