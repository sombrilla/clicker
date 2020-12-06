import gsap from 'gsap';
import {blockEnter} from './blockEnter';

export type AnimationNames = 'blockEnter' | 'fadeOut' | 'fadeIn';

export type Animations = Record<AnimationNames, (element: any, direction?: number) => void>;

export const animations: Animations = {
    blockEnter,
    fadeIn:  (element) => gsap.to(element, { autoAlpha: 1 }),
    fadeOut:  (element) => gsap.to(element, { autoAlpha: 0 }),
}