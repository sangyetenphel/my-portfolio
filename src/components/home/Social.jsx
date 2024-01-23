import React from 'react'

const Social = () => {
  return (
    <div className='home__social'>
        {/* <a href='mailto:sangyetenphel@gmail.com' className='home__social-icon'>
            <i className='uil uil-envelope'></i>
        </a> */}

        <a href='https://www.linkedin.com/in/sangyetenphel' className='home__social-icon' target='_blank' rel='noreferrer'>
            <i className='uil uil-linkedin'></i>
        </a>

        <a href='https://github.com/sangyetenphel' className='home__social-icon' target='_blank' rel='noreferrer'>
            <i className='uil uil-github-alt'></i>
        </a>
    </div>
  )
}

export default Social