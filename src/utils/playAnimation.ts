
import gsap from 'gsap';
import { Animations, animations } from './animations';

export const playAnimation = <T extends HTMLElement>(element: T | null, direction: number, animation?: keyof Animations) => {
    switch(animation) {
        case 'blockEnter':
            animations.blockEnter(element, direction);
            break;
        default:
            gsap.to(element, { autoAlpha: 0 })
            break;
    }
}