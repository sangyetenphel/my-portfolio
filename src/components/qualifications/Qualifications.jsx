import React, { useState } from 'react';
import useSlider from '../../hooks/useSlider';
import './qualifications.css';

const education = [
    { title: "Master's Degree, Computer Science", subtitle: "UNC Greensboro - Accelerated Master's Program", date: 'Expected Dec 2027' },
    { title: "Bachelor's Degree, Computer Science", subtitle: 'UNC Greensboro - GPA 3.87/4.00', date: 'Aug 2024 - Dec 2026' },
    { title: 'Meta Front-End Developer Professional Certificate', subtitle: 'Meta - Online', date: 'Jan 2024' },
    { title: 'Google IT Support Certificate', subtitle: 'Google - Online', date: 'Jun 2022' },
    { title: 'Web Programming with Python and JavaScript', subtitle: 'Harvard University - Online', date: 'May 2020' },
    { title: "Bachelor's Degree, Computer Science", subtitle: 'University Of North Bengal - India', date: '2015 - 2018' },
];

const experience = [
    { title: 'Data Systems Analyst Intern', subtitle: 'UNCG Center for Youth, Family & Community Partnerships - Greensboro', date: 'Apr 2026 - Aug 2026' },
    { title: 'IT Technician', subtitle: 'Mercy Drive - New York', date: 'Sep 2022 - Jul 2023' },
    { title: 'Sushi Server', subtitle: 'Temakase Handroll Bar - New York', date: 'Aug 2021 - May 2022' },
    { title: 'Web Development and SEO Intern', subtitle: 'Screenshop(Acquired by Snapchat) - New York', date: 'Apr 2020 - May 2020' },
    { title: 'Whole Foods Shopper', subtitle: 'Amazon - New York', date: 'Aug 2019 - Feb 2020' },
];

const Timeline = ({ items }) => {
    const { trackRef, atStart, atEnd, update, scrollByOne } = useSlider(items.length);

    return (
        <div className={`qualifications__timeline${atStart && atEnd ? ' qualifications__timeline--fits' : ''}`}>
            <button
                type="button"
                className="qualifications__arrow qualifications__arrow--prev"
                onClick={() => scrollByOne(-1)}
                disabled={atStart}
                aria-label="Scroll timeline back"
            >
                <i className="uil uil-angle-left"></i>
            </button>

            <ol
                className={`qualifications__track${atStart ? '' : ' qualifications__track--fade-left'}${atEnd ? '' : ' qualifications__track--fade-right'}`}
                ref={trackRef}
                onScroll={update}
            >
                {items.map((item, index) => (
                    <li
                        className={`qualifications__data ${index % 2 === 0 ? 'qualifications__data--top' : 'qualifications__data--bottom'}`}
                        key={`${item.title}-${item.date}`}
                    >
                        <span className="qualifications__rounder"></span>
                        <div className="qualifications__info">
                            <h3 className='qualifications__title'>{item.title}</h3>
                            <span className='qualifications__subtitle'>{item.subtitle}</span>
                            <div className="qualifications__calendar">
                                <i className='uil uil-calendar-alt'></i> {item.date}
                            </div>
                        </div>
                    </li>
                ))}
            </ol>

            <button
                type="button"
                className="qualifications__arrow qualifications__arrow--next"
                onClick={() => scrollByOne(1)}
                disabled={atEnd}
                aria-label="Scroll timeline forward"
            >
                <i className="uil uil-angle-right"></i>
            </button>
        </div>
    );
};

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);

    return (
        <section className="qualifications section" id='qualifications'>
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualifications__container container">
                <div className="qualifications__tabs">
                    <button type="button" className={toggleState === 1 ? "qualifications__button qualifications__active button--flex" : "qualifications__button button--flex"} aria-pressed={toggleState === 1} onClick={() => setToggleState(1)}>
                        <i className='uil uil-graduation-cap qualifications__icon'></i>
                        Education
                    </button>

                    <button type="button" className={toggleState === 2 ? "qualifications__button qualifications__active button--flex" : "qualifications__button button--flex"} aria-pressed={toggleState === 2} onClick={() => setToggleState(2)}>
                        <i className='uil uil-briefcase-alt qualifications__icon'></i>
                        Experience
                    </button>
                </div>

                {toggleState === 1
                    ? <Timeline key="education" items={education} />
                    : <Timeline key="experience" items={experience} />}
            </div>
        </section>
    )
}

export default Qualifications
