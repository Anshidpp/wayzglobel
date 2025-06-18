import React from 'react'
import './About.css'
import aboutImage from './about-img/ab-img.jpg'

const About = () => {
    return (

        <div className="about-main" id='about'>
            <div className="about-content-main">
                <div className="about-img-main">
                    <img src={aboutImage} alt="" />
                </div>
                <div className="about-text-box-main">
                    <span>About Us</span>
                    <h2>Elevating Global Healthcare Through Talent Connection</h2>
                    <p>
                        We connect top-tier talents with leading organizations across the Middle East.
                        Our mission is to elevate global healthcare by bridging the gap between skilled professionals
                        and rapidly growing healthcare systems.
                        <br /><br />
                        Whether you're a nurse, doctor, or healthcare specialist, we are here to match your expertise
                        with institutions that value your contribution. With integrity, care, and transparency, we ensure
                        a reliable recruitment process for both healthcare workers and providers.
                    </p>
                    <div className="about-profile">
                        <div className="avatar">YC</div>
                        <div className='about-profile-content'>
                            <p className="profile-name">SIJINA ROSHAN</p>
                            <p className="profile-role">Founder & Director</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About