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
      { name: 'LLM APIs', detail: 'Groq, Gemini' },
    ],
  },
];

const SkillCard = ({ title, skills }) => {
  // Split the list into two columns, filling the left one first.
  const half = Math.ceil(skills.length / 2);
  const columns = [skills.slice(0, half), skills.slice(half)];

  return (
    <div className="skills__content">
        <h3 className='skills__title'>{title}</h3>

        <div className="skills__box">
            {columns.map((column, index) => (
                <ul className="skills__group" key={index}>
                    {column.map((skill) => (
                        <li className="skills__data" key={skill.name}>
                            <i className='bx bx-badge-check'></i>
                            <div>
                                <span className='skills__name'>{skill.name}</span>
                                {skill.detail && <span className='skills__detail'>{skill.detail}</span>}
                            </div>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    </div>
  );
};

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
