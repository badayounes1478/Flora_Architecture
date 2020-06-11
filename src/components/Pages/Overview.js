import React from 'react'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import '../PagesCss/Overview.css'
import Footer from '../ReusableComponents/Footer'
import multimedia from '../../assets/multimedia.svg'
import communications from '../../assets/communications.svg'
import location from '../../assets/location.svg'



const Overview = () => {
    return (
        <div>
            <Navigationbar />
            <div className="overview-container">
                <div className="overview-title">
                    <strong>OVERVIEW</strong>
                    <div className="about-line"></div>
                </div>
                <div className="overview-subtitle">
                    <div className="admission-line"></div>
                    <div className="admission-title">ADMISSIONS</div>
                </div>
                <p>
                    The College offers an undergraduate degree in Architecture (intake – 40 seats). The admission processes are governed by the guidelines of Council of Architecture, New Delhi (COA) and the Savitribai Phule Pune University. The course usually begins in the summer semester (June/July). Admission window opens when the students appear for the National Aptitude Test for Architecture (NATA) exams which are conducted by the Council of Architecture every year, and/or JEE (Paper-2). The application materials are made available to prospective applicants at this time.
                     </p>
                <table>
                    <tr>
                        <th>Programme</th>
                        <th>Intake</th>
                        <th>Count</th>
                    </tr>
                    <tr>
                        <td>B.Arch</td>
                        <td>40</td>
                        <td>691203210</td>
                    </tr>
                </table>

                <div className="bold-title">Admission Process</div>
                <br></br>
                <br></br>
                <p>Admission Process The Admission process for B. Arch. program consists of submission of application forms, declaration of merit list and counselling for application in the month of late June or early July.</p>
                <br></br>
                <br></br>
                <p>The counselling sessions are co-ordinated by the faculty members under the guidance of the principal.</p>
                <br></br>
                <br></br>
                <div className="bold-title">Eligibility Criteria:</div>
                <br></br>
                <br></br>
                <p>(A) Candidates with more than 50 % Marks aggregate in 10+2 scheme of Senior School Certificate Examination or equivalent with Mathematics as compulsory subject of examination at the 10+2 Level.</p>
                <p style={{ alignSelf: 'center' }}>Or</p>
                <p> 10+3 Diploma (Any stream) recognised by Central/State government with 50% aggregate marks.</p>
                <p style={{ alignSelf: 'center' }}>Or</p>
                <p>International Baccalaureate Diploma after 10 years of schooling, with not less than 50% marks in aggregate with Mathematics as compulsory subjects.</p>
                <br></br>
                <br></br>
                <p>(B) The institute shall admit only such students who have qualified in NATA (National Aptitude Test in Architecture) A candidate must score a minimum of 40% Marks.</p>
                <br></br>
                <br></br>
                <div className="bold-title">Affiliation:</div>
                <br></br>
                <br></br>
                <p>Savitribai Phule Pune University (SPPU)</p>
                <br></br>
                <br></br>
                <div className="bold-title">Recognition:</div>
                <br></br>
                <br></br>
                <p>Council of Architecture, New Delhi vide notification No.CA/5/Academic/MH97, dated August 8, 2016, and other subsequent extensions.</p>
                <br></br>
                <br></br>
                <p>
                    Instructions for First-year B. Architecture admissions 2019-20 At the time of reporting for admission through CAP rounds to Sinhgad College of Architecture the students should submit all the following original documents and five sets of attested Xerox copies as per the list given below. All the original copies of documents will be returned after the verification from Admission Regulating Authority.
                </p>
                <br></br>
                <br></br>
                <p>1 State Common Entrance Test Cell, Maharashtra State Allotment Letter</p>
                <br></br>
                <br></br>
                <p>2 S.S.C. Mark sheet</p>
                <br></br>
                <br></br>
                <p>3 H.S.C./Diploma Mark sheet</p>
                <br></br>
                <br></br>
                <p>4 NATA Score Card </p>
                <br></br>
                <br></br>
                <p>5 JEE Main (Paper-II) Score Card</p>
                <br></br>
                <br></br>
                <p>6 Leaving Certificate</p>
                <br></br>
                <br></br>
                <p>6 Leaving Certificate</p>
                <br></br>
                <br></br>
                <p>7 Nationality / Domicile certificate</p>
                <br></br>
                <br></br>
                <p>8 Nationality Certificate for OMS candidate only</p>
                <br></br>
                <br></br>
                <p>9 Birth Certificate - Maharashtra state (if no Nationality, Domicile certificate)</p>
                <br></br>
                <br></br>
                <p>10 Gap Certificate if Applicable</p>
                <br></br>
                <br></br>
                <p>11 Adhar Card </p>
                <br></br>
                <br></br>
                <p>12 Migration Certificate if Applicable</p>
                <br></br>
                <br></br>
                <p>13 4 Passport size Photographs</p>
                <br></br>
                <br></br>
                <p>14 Other documents if applicable (F.C.letter)</p>
                <br></br>
                <br></br>
                <p>15 Original Income Certificate/Form</p>
                <br></br>
                <br></br>
                <p>16-photocopy for the Financial year 2018-19 16 Caste Certificate</p>
                <br></br>
                <br></br>
                <p>17 Non Creamy layer Certificate valid up to 31/03/2020 (for VJNT/OBC/SBC/SEBC)</p>
                <br></br>
                <br></br>
                <p>18 Caste Validity Certificate</p>
                <br></br>
                <br></br>
                <p>19 Scholarship Form</p>
                <br></br>
                <br></br>
                <p>Photocopy of above documents - 5 sets</p>
                <br></br>
                <br></br>
                <div className="bold-title">Fees Structure:</div>
                <br></br>
                <br></br>
                <p>Fees for the Academic Year 2020–21.:-</p>
                <br></br>
                <br></br>
                <p>For Indian students Final Fees Rs. 1,00,000/- per annum.</p>
                <br></br>
                <br></br>
                <p>(As per Fee Regulating Authority)</p>
                <br></br>
                <br></br>
                <p>Fees to be paid by Demand Draft in Favour of</p>
                <br></br>
                <br></br>
                <p>"Flora College of Architecture," Payable at Pune. Unlike, many colleges FCOA does not apply for Caution Money</p>
                <br></br>
                <br></br>
                <p>For all first-year students activity fees Rs.1,000/-</p>
                <br></br>
                <br></br>
                <p>(1000/- Fees as per Circular No. 118 of 2013 from Savitribai Phule Pune University) Hostel</p>
                <br></br>
                <br></br>
                <div className="bold-title">Hostel:</div>
                <br></br>
                <div className="table-container">
                    <div className="mess">Hostel + Mess</div>
                    <div className="fees">Rs 45,000</div>
                </div>
            </div>

            <div className="admission-container">
                <div className="overview-subtitle">
                    <div className="admission-line"></div>
                    <div className="admission-title">FOR ADMISSIONS</div>
                </div>
                <div className="admission-grid">
                    <div className="admission-grid-column">
                        <img src={multimedia} alt="email" />
                        <br></br>
                        <br></br>
                        <strong>Email</strong>
                        <br></br>
                        <div>floraedu.arch@gmail.com</div>
                        <div>flora.education@gmail.com</div>
                    </div>
                    <div className="admission-grid-column">
                        <img src={communications} alt="call" />
                        <br></br>
                        <br></br>
                        <strong>Email</strong>
                        <br></br>
                        <div>Prof. Abhijeet S. Kure Patil</div>
                        <div>Head, Admissions</div>
                        <div>9766794442/9730422277</div>
                    </div>
                    <div className="admission-grid-column">
                        <img src={location} alt="location" />
                        <br></br>
                        <br></br>
                        <strong>Email</strong>
                        <br></br>
                        <div>A/P Khopi near Khedshivapur TollPlaza
                        Off Pune-Satara Highway TQ Bhor Ta:
                        Bhor Dist: Pune-412205</div>
                    </div>
                </div>
            </div>
            <div className="addmission">
            
                </div>
            <Footer />
        </div>
    )
}

export default Overview

