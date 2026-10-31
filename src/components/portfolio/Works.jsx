import React, { useCallback, useEffect, useRef, useState } from 'react'
import { projectsData } from './Data';
import WorkItems from './WorkItems';
import './portfolio.css';

const projects = [...projectsData].reverse();

// Distance from one card to the next: card width plus the gap.
const cardStep = (track) => {
    const card = track?.firstElementChild;
    if (!card) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return card.offsetWidth + gap;
};

const Works = () => {
    const trackRef = useRef(null);
    const [active, setActive] = useState(0);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const [positions, setPositions] = useState(projects.length);

    const updateState = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;
        const step = cardStep(track);
        if (step) {
            const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
            const visible = Math.max(1, Math.round((track.clientWidth + gap) / step));
            setPositions(Math.max(1, projects.length - visible + 1));
            setActive(Math.round(track.scrollLeft / step));
        }
        setAtStart(track.scrollLeft <= 1);
        setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
    }, []);

    useEffect(() => {
        updateState();
        window.addEventListener('resize', updateState);
        return () => window.removeEventListener('resize', updateState);
    }, [updateState]);

    const scrollToIndex = (index) => {
        trackRef.current?.scrollTo({ left: index * cardStep(trackRef.current), behavior: 'smooth' });
    };

    const scrollByOne = (direction) => {
        trackRef.current?.scrollBy({ left: direction * cardStep(trackRef.current), behavior: 'smooth' });
    };

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

            <div className="work__track" ref={trackRef} onScroll={updateState}>
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
