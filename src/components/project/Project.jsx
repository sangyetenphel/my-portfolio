import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { projectsData } from '../portfolio/Data';
import './project.css';

const Project = () => {
  const { itemId } = useParams()
  const project = projectsData.find(item => item.id === parseInt(itemId, 10))

  if (!project) {
    return (
      <div className='project section'>
        <h2 className="project__title">Project not found</h2>
        <span className="project__subtitle">
          <Link to='/#projects'>Back to all projects</Link>
        </span>
      </div>
    )
  }

  return (
    <div className='project section'>
      <h2 className="project__title">{project.title} ({project.status ? `${project.status}, ${project.year}` : project.year})</h2>
      <span className="project__subtitle">{project.subtitle}</span>
      <div className="project__container container">
        {project.video ? (
          <video controls preload='metadata' poster={project.image}>
            <source src={project.video} type='video/mp4'/>
          </video>
        ) : (
          <img src={project.image} alt={project.title} className='project__image' />
        )}
        <h3 className='project__subheading'>Project Overview</h3>
        <p className='project__subheading_text'>{project.project_overview}</p>
        <h3 className='project__subheading'>Technologies</h3>
        <p className='project__subheading_text'>{project.technologies}</p>
        {/* <h3 className='project__subheading'>Year</h3>
        <p className='project__subheading_text'>{project.year}</p> */}
        {project.github ? <a href={project.github} target='_blank' rel='noreferrer' aria-label={`${project.title} on GitHub`}><i className='bx bxl-github project__subheading_icon' ></i></a> : ''}
        {project.link ? <a href={project.link} target='_blank' rel='noreferrer' aria-label={`Open ${project.title}`}><i className='bx bx-link-external project__subheading_icon'></i></a> : ''}
      </div>
    </div>
  )
}

export default Project