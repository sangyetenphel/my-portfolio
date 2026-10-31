import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            {/* <h1 className="footer__title">Smith</h1> */}

            {/* <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul> */}

            <div className="footer__social">
                <a href='https://www.linkedin.com/in/sangyetenphel' className='footer__social-link' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
                    <i className='uil uil-linkedin'></i>
                </a>

                <a href='https://github.com/sangyetenphel' className='footer__social-link' target='_blank' rel='noreferrer' aria-label='GitHub'>
                    <i className='uil uil-github-alt'></i>
                </a>

                <a href='mailto:sangyetengkhar@gmail.com' className='footer__social-link' aria-label='Email'>
                    <i className='uil uil-envelope'></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; {new Date().getFullYear()} Sangye Tengkhar
            </span>
        </div>
    </footer>
  )
}

export default Footer