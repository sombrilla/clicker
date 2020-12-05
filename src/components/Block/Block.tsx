import React from 'react';
import classNames from 'classnames';
import styles from './Block.module.scss';

type BlockProps = {
    fullHeight?: boolean;
}

export const Block: React.FC<BlockProps> = ({children, fullHeight = false}) => {
    return <div className={classNames(styles.block, {[styles.fullHeight]: fullHeight})}>
        {children}
    </div>
}