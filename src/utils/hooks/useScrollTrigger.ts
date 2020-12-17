/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useScrollTrigger = (offset?: number) => {
    const blockRef = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        if (!blockRef.current) return;

        ScrollTrigger.create({
            trigger: blockRef.current,
            start: offset && `${'50%+=' + offset + 'px'} center`,
            // end: offset && `${'50%-=' + offset + 'px'} center`,
            onToggle: (state: any) => {
                const { isActive, direction } = state;
                setIsActive(isActive);
                setDirection(direction);
            },
          });
    }, [blockRef]);

    return { blockRef, isActive, direction };
}