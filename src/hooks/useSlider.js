import { useCallback, useEffect, useRef, useState } from 'react';

// Distance from one item to the next: item width plus the gap.
const itemStep = (track) => {
    const item = track?.firstElementChild;
    if (!item) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return item.offsetWidth + gap;
};

// Shared logic for the horizontally scrolling sliders: tracks the scroll
// position and exposes helpers for arrow buttons and dots.
const useSlider = (itemCount) => {
    const trackRef = useRef(null);
    const [active, setActive] = useState(0);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const [positions, setPositions] = useState(itemCount);

    const update = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;
        const step = itemStep(track);
        if (step) {
            const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
            const visible = Math.max(1, Math.round((track.clientWidth + gap) / step));
            setPositions(Math.max(1, itemCount - visible + 1));
            setActive(Math.round(track.scrollLeft / step));
        }
        setAtStart(track.scrollLeft <= 1);
        setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
    }, [itemCount]);

    useEffect(() => {
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, [update]);

    const scrollToIndex = (index) => {
        trackRef.current?.scrollTo({ left: index * itemStep(trackRef.current), behavior: 'smooth' });
    };

    const scrollByOne = (direction) => {
        trackRef.current?.scrollBy({ left: direction * itemStep(trackRef.current), behavior: 'smooth' });
    };

    return { trackRef, active, atStart, atEnd, positions, update, scrollToIndex, scrollByOne };
};

export default useSlider;
