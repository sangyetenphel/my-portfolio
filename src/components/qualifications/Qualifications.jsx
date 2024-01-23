import React, { useState } from 'react';
import './qualifications.css';

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualifications section" id='qualifications'>
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualifications__container container">
                <div className="qualifications__tabs">
                    <div className={toggleState === 1 ? "qualifications__button qualifications__active button--flex" : "qualifications__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className='uil uil-graduation-cap qualifications__icon'></i>
                        Education
                    </div>

                    <div className={toggleState === 2 ? "qualifications__button qualifications__active button--flex" : "qualifications__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className='uil uil-briefcase-alt qualifications__icon qualifications__icon'></i>
                        Experience
                    </div>
                </div>

                <div className="qualifications__sections">
                    <div className={toggleState === 1 ? "qualifications__content qualifications__content-active" : "qualifications__content"}>
                        <div className="qualifications__data">
                            <div>
                                <h3 className='qualifications__title'>Meta Front-End Developer Professional Certificate</h3>
                                <span className='qualifications__subtitle'>Meta - Online</span>
                                <div className="qualifications__calendar">
                                    <i className='uil uil-calendar-alt'></i> Jan 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualifications__rounder"></span>
                                <span className="qualifications__line"></span>
                            </div>
                        </div>

                        <div className="qualifications__data">
                            <div></div>

                            <div>
                                <span className="qualifications__rounder"></span>
                                <span className="qualifications__line"></span>
                            </div>

                            <div>
                                <h3 className='qualifications__title'>Google IT Support Certificate</h3>
                                <span className='qualifications__subtitle'>Google - Online</span>
                                <div className="qualifications__calendar">
                                    <i className='uil uil-calendar-alt'></i> Jun 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualifications__data">
                            <div>
                                <h3 className='qualifications__title'>Web Programming with Python and JavaScript</h3>
                                <span className='qualifications__subtitle'>Harvard University - Online</span>
                                <div className="qualifications__calendar">
                                    <i className='uil uil-calendar-alt'></i> May 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualifications__rounder"></span>
                                <span className="qualifications__line"></span>
                            </div>
                        </div>

                        <div className="qualifications__data">
                            <div></div>

                            <div>
                                <span className="qualifications__rounder"></span>
                                <span className="qualifications__line"></span>
                            </div>

                            <div>
                                <h3 className='qualifications__title'>Bachelor's Degree, Computer Science</h3>
                                <span className='qualifications__subtitle'>University Of North Bengal - India</span>
                                <div className="qualifications__calendar">
                                    <i className='uil uil-calendar-alt'></i> 2015 - 2018
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualifications__content qualifications__content-active" : "qualifications__content"}>
                        <div className="qualifications__data">
                            <div>
                                <h3 className='qualifications__title'>IT Technician</h3>
                                <span className='qualifications__subtitle'>Mercy Drive - New York</span>
                                <div className="qualifications__calendar">
                                    <i className='uil uil-calendar-alt'></i> Sep 2022 - Jul 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualifications__rounder"></span>
                                <span className="qualifications__line"></span>
                            </div>
                        </div>

                        <div className="qualifications__data">
                            <div></div>

                            <div>
                                <span className="qualifications__rounder"></span>
                                <span className="qualifications__line"></span>
                            </div>

                            <div>
                                <h3 className='qualifications__title'>Sushi Server</h3>
                                <span className='qualifications__subtitle'>Temakase Handroll Bar - New York </span>
                                <div className="qualifications__calendar">
                                    <i className='uil uil-calendar-alt'></i> Aug 2021 - May 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualifications__data">
                            <div>
                                <h3 className='qualifications__title'>Web Development and SEO Intern</h3>
                                <span className='qualifications__subtitle'>Screenshop(Acquired by Snapchat) - New York</span>
                                <div className="qualifications__calendar">
                                    <i className='uil uil-calendar-alt'></i> Apr 2020 - May 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualifications__rounder"></span>
                                <span className="qualifications__line"></span>
                            </div>
                        </div>

                        <div className="qualifications__data">
                            <div></div>

                            <div>
                                <span className="qualifications__rounder"></span>
                                <span className="qualifications__line"></span>
                            </div>

                            <div>
                                <h3 className='qualifications__title'>Whole Foods Shopper</h3>
                                <span className='qualifications__subtitle'>Amazon - New York </span>
                                <div className="qualifications__calendar">
                                    <i className='uil uil-calendar-alt'></i> Aug 2019 - Feb 2020
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualifications