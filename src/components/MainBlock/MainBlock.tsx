import React from 'react';
import { useAppCopies } from '../../context/appCopiesContext';
import { Block } from '../Block/Block';
import styles from './MainBlock.module.scss';
import { AnimatedTitle } from '../AnimatedTitle/AnimatedTitle';

type MainBlockProps = {}

export const MainBlock: React.FC<MainBlockProps> = () => {
    const { title, secondTitle, scrollLabel } = useAppCopies();

    const scrollWindowHeight = () => {
        window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
    }

    return <Block playsAnimation={false} fullHeight>
        <img className={styles.background} src="/static/images/main-background.jpg" alt="background" />
        <div className={styles.mainBlock}>
            <header className={styles.header}>
                <AnimatedTitle title={title} offset={0} />
                {/* <AnimatedTitle title={secondTitle} offset={0} /> */}
                {/* <Block className={styles.title} offset={0} enterAnimation="fadeOut" exitAnimation="fadeIn">
                    <h1>{title}</h1>
                </Block>
                <Block className={styles.title} offset={0} enterAnimation="fadeIn">
                    <h1>{secondTitle}</h1>
                </Block> */}
            </header>

            <button className={styles.button} onClick={scrollWindowHeight}>
                <img src="/static/icons/scroll.svg" alt="scroll icon" />
                {scrollLabel}
            </button>
        </div>
    </Block>
}