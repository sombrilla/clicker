/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { Block } from '../Block/Block';
import styles from './AnimatedTitle.module.scss';
import gsap from 'gsap';
// import { SplitText } from 'gsap/dist/SplitText';

interface AnimatedTitleProps {
    title: string;
    offset: number;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({title, offset}) => {
    const { current: element } = useRef(null);

    const playTextAnimation = () => {

        // TweenLite.set(element, {css:{perspective:500, perspectiveOrigin:"50% 50%", transformStyle:"preserve-3d"}});
    
        // const numChars = splitText.chars.length;
    
        // for(var i = 0; i < numChars; i++){
        //     tl.from(splitText.chars[i], 0.8, { css:{ y:-100, x: 0, autoAlpha:0 }, ease:Back.easeOut }, i * 0.02);
        // }

        // tl.staggerTo(splitText.chars, 4, {css:{transformOrigin:"50% 50% -30px", rotationY:-360, rotationX:360, rotation:360}, ease:Elastic.easeInOut}, 0.02, "+=1");
    }

    useEffect(() => {
        if (!element) return;
        playTextAnimation();
    }, [element]);



    return <Block ref={element} offset={offset} className={styles.animatedTitle} enterAnimation="fadeOut" exitAnimation="fadeIn">
        <h1>{title}</h1>
    </Block>;
}