import React from 'react'
import '../PagesCss/Governingcounsil.css'
import ImageHeader from '../ReusableComponents/Header'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'

const Governingcounsil = () => {
    return (
        <div>
            <Navigationbar />
            <ImageHeader />
            <div className="note-from-director-conteiner" style={{padding:'5%'}}>
                <div className="note-from-director-title" style={{top:'-4%'}}>
                    <strong>PRINCIPAL's MESSAGE</strong>
                    <div className="about-line"></div>
                </div>
                <table>
                    <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Designation</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mrs. Madhuri Padalkar</td>
                        <td>Chairperson</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Dr. Atul Padalkar</td>
                        <td>Member</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Mr. Rajaram Padalkar</td>
                        <td>Member</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Mr. Ramesh Padalkar</td>
                        <td>Member</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Ar. Avinash Nawathe</td>
                        <td>Member</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Ar. Abhay Purohit</td>
                        <td>Member</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Dr. Anurag Kashyap</td>
                        <td>Member</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Dr. Anurag Kashyap</td>
                        <td>Member</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Ar. Ulhas Rane</td>
                        <td>Member</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Ar. Mahesh Bangad</td>
                        <td>Member</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Ar. Rahul Patil</td>
                        <td>Member Secretary</td>
                    </tr>
                </table>

            </div>
            <Footer />
        </div>
    )
}

export default Governingcounsil
