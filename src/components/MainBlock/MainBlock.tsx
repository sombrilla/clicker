import React from 'react';
import { useAppCopies } from '../../context/appCopiesContext';
import { Block } from '../Block/Block';
import styles from './MainBlock.module.scss';

type MainBlockProps = {}

export const MainBlock: React.FC<MainBlockProps> = () => {
    const { title, description } = useAppCopies();

    const scrollWindowHeight = () => {
        window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
    }

    return <Block playsAnimation={false} fullHeight>
        <img className={styles.background} src="/static/images/main-background.jpg" alt="background" />
        <div className={styles.mainBlock}>
            <header className={styles.header}>
                <h1>{title}</h1>
                {/* <h2>{description}</h2> */}
            </header>

            <button className={styles.button} onClick={scrollWindowHeight}>
                <img src="/static/icons/scroll.svg" alt="scroll icon" />
                Scroll down!
            </button>
        </div>
    </Block>
}