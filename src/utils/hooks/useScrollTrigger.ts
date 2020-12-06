import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

export const useScrollTrigger = () => {
    const blockRef = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        if (!blockRef.current) return;
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: blockRef.current,
            start: "top center",
            end: 'bottom center',
            onToggle: (state: any) => {
                const { isActive, direction } = state;
                setIsActive(isActive);
                setDirection(direction);
            },
          });
    }, [blockRef]);

    return { blockRef, isActive, direction };
}