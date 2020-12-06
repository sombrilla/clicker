import gsap from 'gsap';

export const blockEnter = <T extends HTMLElement>(element: T | null, direction: number = 1) => {
    gsap.fromTo(element, {x: 0, y: -100 * direction, autoAlpha: 0}, {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
    });
};
