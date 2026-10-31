import React from 'react';
import './home.css';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className='home section' id='home'>
        <div className="home__container container grid">
            <div className="home__content grid">
                <Data />
                <div className="home__visual">
                    <div className="home__img" role="img" aria-label="Portrait of Sangye Tengkhar"></div>
                    <span className="home__tag home__tag--location">
                        <i className='uil uil-map-marker'></i> Greensboro, NC
                    </span>
                    <span className="home__tag home__tag--stack">
                        <i className='uil uil-brackets-curly'></i> React · Django · SwiftUI
                    </span>
                </div>
            </div>
            <ScrollDown />
        </div>
    </section>
  )
}

export default Home
