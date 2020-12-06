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

    return <Block fullHeight>
        <div className={styles.mainBlock}>
            <header className={styles.header}>
                <h1>{title}</h1>
                <h2>{description}</h2>
            </header>

            <button className={styles.button} onClick={scrollWindowHeight}>
                Scroll!
            </button>
        </div>
    </Block>
}