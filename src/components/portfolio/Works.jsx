import React from 'react'
import { projectsData } from './Data';
import WorkItems from './WorkItems';
import useSlider from '../../hooks/useSlider';
import './portfolio.css';

const projects = [...projectsData].reverse();

const Works = () => {
    const { trackRef, active, atStart, atEnd, positions, update, scrollToIndex, scrollByOne } = useSlider(projects.length);

    return (
        <div className="work__slider container">
            <button
                type="button"
                className="work__arrow work__arrow--prev"
                onClick={() => scrollByOne(-1)}
                disabled={atStart}
                aria-label="Previous project"
            >
                <i className="uil uil-angle-left"></i>
            </button>

            <div className="work__track" ref={trackRef} onScroll={update}>
                {projects.map((item) => {
                    return <WorkItems item={item} key={item.id}/>
                })}
            </div>

            <button
                type="button"
                className="work__arrow work__arrow--next"
                onClick={() => scrollByOne(1)}
                disabled={atEnd}
                aria-label="Next project"
            >
                <i className="uil uil-angle-right"></i>
            </button>

            <div className="work__dots">
                {projects.slice(0, positions).map((item, index) => (
                    <button
                        type="button"
                        key={item.id}
                        className={`work__dot ${active === index ? 'work__dot--active' : ''}`}
                        onClick={() => scrollToIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    )
}

export default Works
