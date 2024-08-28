import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../portfolio/Data';
import './project.css';

const Project = () => {
  const { itemId } = useParams()
  const project = projectsData.find(item => item.id === parseInt(itemId, 10))
  return (
    <div className='project section'>
      <h2 className="project__title">{project.title} ({project.year})</h2>
      <span className="project__subtitle">{project.subtitle}</span>
      <div className="project__container container">
        <video controls>
          <source src={project.video} type='video/mp4'/>
        </video>
        <h3 className='project__subheading'>Project Overview</h3>
        <p className='project__subheading_text'>{project.project_overview}</p>
        <h3 className='project__subheading'>Technologies</h3>
        <p className='project__subheading_text'>{project.technologies}</p>
        {/* <h3 className='project__subheading'>Year</h3>
        <p className='project__subheading_text'>{project.year}</p> */}
        <a href={project.github}><i class='bx bxl-github project__subheading_icon' ></i></a>
        {project.link ? <a href={project.link}><i class='bx bx-link-external project__subheading_icon'></i></a> : ''}
      </div>
    </div>
  )
}

export default Project