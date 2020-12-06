/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './Block.module.scss';
import { playAnimation } from '../../utils/playAnimation';
import { useScrollTrigger } from '../../utils/hooks/useScrollTrigger';

type BlockProps = {
    fullHeight?: boolean;
    children?: React.ReactNode;
}

export const Block = React.forwardRef<HTMLDivElement, BlockProps>(({children, fullHeight = false}, ref: React.Ref<HTMLDivElement>) => {
    const { blockRef, isActive, direction } = useScrollTrigger();

    useEffect(() => {
        const animation = isActive ? 'blockEnter' : 'blockExit';
        playAnimation<HTMLDivElement>(blockRef.current, animation, direction);
    }, [isActive]);

    return <div ref={ref || blockRef} className={classNames(styles.block, {[styles.fullHeight]: fullHeight})}>
        {children}
    </div>
});