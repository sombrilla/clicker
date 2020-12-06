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
        const animation = isActive ? 'blockEnter' : undefined;
        playAnimation<HTMLDivElement>(blockRef.current, direction, animation);
    }, [isActive]);

    return <div ref={ref || blockRef} className={classNames(styles.block, {[styles.fullHeight]: fullHeight})}>
        {children}
    </div>
});