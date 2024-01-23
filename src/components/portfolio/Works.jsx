import React, { useEffect, useState } from 'react'
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';
import './portfolio.css';

const Works = () => {
    const [item, setItem] = useState({name: 'full-stack'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === 'full-stack') {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            })
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent.toLowerCase()});
        setActive(index);
    }

    return (
        <>
            <div className="work__filters">
                {projectsNav.map((item, index) => {
                    return (
                        <span onClick={(e) => {
                            handleClick(e, index)
                        }}
                        // className='work__item'
                        className={`${active === index ? 'active-work': ''} work__item`}
                        key={index}>{item.name}</span>
                    )
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorkItems item={item} key={item.id}/>
                })}
            </div>
        </>
    )
}

export default Works