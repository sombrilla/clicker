
import gsap from 'gsap';
import { Animations, animations } from './animations';

export const playAnimation = <T extends HTMLElement>(element: T | null, animation: keyof Animations, direction: number) => {
    switch(animation) {
        case 'blockEnter':
            animations.blockEnter(element, direction);
            break;
        case 'blockExit':
            gsap.to(element, { autoAlpha: 0 })
            break;
    }
}