import React from 'react';
import styles from './Page.module.scss';
import { Block } from '../Block/Block';
import { MainBlock } from '../MainBlock/MainBlock';

type PageProps = {}

export const Page: React.FC<PageProps> = () => {

    return <div className={styles.page}>
        <MainBlock />
        <Block />
    </div>
}