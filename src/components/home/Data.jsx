import React from 'react';
import CV from '../../assets/Sangye_Tenphel_Resume.pdf';
import Social from './Social';

const stats = [
  { value: '3.87', label: 'GPA' },
  { value: '8', label: 'Projects' },
  { value: "M.S. '27", label: 'Data Science' },
];

const Data = () => {
  return (
    <div className='home__data'>
        <span className='home__badge'>
            <span className='home__badge-dot'></span>
            Open to software engineering roles
        </span>

        <p className='home__greeting'>Hi, I'm</p>
        <h1 className='home__title'>Sangye Tengkhar</h1>
        <h2 className='home__subtitle'>Full-Stack Software Engineer</h2>

        <p className='home__description'>
            I build products end to end, from the database to the interface. Recently that's
            meant a tour-booking platform for North Carolina, a multiplayer Hangman game, and an
            iOS app with an AI companion for my senior capstone. I'm finishing my CS degree at
            UNC Greensboro and continuing into an accelerated M.S. in Data Science.
        </p>

        <ul className='home__stats'>
            {stats.map(({ value, label }) => (
                <li className='home__stat' key={label}>
                    <span className='home__stat-value'>{value}</span>
                    <span className='home__stat-label'>{label}</span>
                </li>
            ))}
        </ul>

        <div className='home__actions'>
            <a href='#portfolio' className='button button--flex'>
                View my work
                <i className='uil uil-arrow-right button__icon'></i>
            </a>
            <a download='Sangye_Tengkhar_Resume.pdf' href={CV} className='button button--flex button--ghost'>
                Resume
                <i className='uil uil-import button__icon'></i>
            </a>
            <Social />
        </div>
    </div>
  )
}

export default Data
