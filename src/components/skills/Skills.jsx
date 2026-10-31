import React from 'react';
import './skills.css';

const skillGroups = [
  {
    title: 'Frontend & Mobile',
    skills: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'Redux' },
      { name: 'HTML & CSS' },
      { name: 'Bootstrap' },
      { name: 'React Native' },
      { name: 'Swift & SwiftUI' },
      { name: 'Figma' },
    ],
  },
  {
    title: 'Backend & Cloud',
    skills: [
      { name: 'Python' },
      { name: 'Java' },
      { name: 'Django' },
      { name: 'FastAPI' },
      { name: 'Spring Boot' },
      { name: 'PostgreSQL' },
      { name: 'REST APIs' },
      { name: 'Docker' },
      { name: 'AWS S3' },
      { name: 'Git & GitHub' },
    ],
  },
  {
    title: 'Data & AI',
    skills: [
      { name: 'Python' },
      { name: 'SQL' },
      { name: 'pandas' },
      { name: 'NumPy' },
      { name: 'Jupyter' },
      { name: 'LLM APIs' },
    ],
  },
];

const SkillCard = ({ title, skills }) => (
  <div className="skills__content">
      <h3 className='skills__title'>{title}</h3>

      <ul className="skills__tags">
          {skills.map((skill) => (
              <li className="skills__tag" key={skill.name}>{skill.name}</li>
          ))}
      </ul>
  </div>
);

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className='section__title'>Skills</h2>
        <span className='section__subtitle'>Tools and technologies I work with</span>

        <div className="skills__container container grid">
            {skillGroups.map((group) => (
                <SkillCard key={group.title} {...group} />
            ))}
        </div>
    </section>
  )
}

export default Skills
