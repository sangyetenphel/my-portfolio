import React from 'react'

const Social = () => {
  return (
    <div className='home__social'>
        <a href='https://www.linkedin.com/in/sangyetenphel' className='home__social-icon' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
            <i className='uil uil-linkedin'></i>
        </a>

        <a href='https://github.com/sangyetenphel' className='home__social-icon' target='_blank' rel='noreferrer' aria-label='GitHub'>
            <i className='uil uil-github-alt'></i>
        </a>

        <a href='mailto:sangyetengkhar@gmail.com' className='home__social-icon' aria-label='Email'>
            <i className='uil uil-envelope'></i>
        </a>
    </div>
  )
}

export default Social
