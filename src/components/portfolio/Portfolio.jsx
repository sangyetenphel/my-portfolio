import React from 'react'
import Works from './Works'

const Portfolio = () => {
  return (
    <section className='work section' id='projects'>
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Most recent works</span>
        <Works />
    </section>
  )
}

export default Portfolio