import { Animations, animations } from './animations';

export const playAnimation = <T extends HTMLElement>(element: T | null, direction: number, animation: keyof Animations) => {
    animations[animation](element, direction);
}