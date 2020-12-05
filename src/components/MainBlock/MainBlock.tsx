import React from 'react';
import { useAppCopies } from '../../context/appCopiesContext';
import { Block } from '../Block/Block';
import styles from './MainBlock.module.scss';

type MainBlockProps = {}

export const MainBlock: React.FC<MainBlockProps> = () => {
    const { title, description } = useAppCopies();

    return <Block fullHeight>
        <div className={styles.mainBlock}>
            <header>
                <h1>{title}</h1>
                <h2>{description}</h2>
            </header>
        </div>
    </Block>
}