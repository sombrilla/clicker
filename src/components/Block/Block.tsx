/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './Block.module.scss';
import { playAnimation } from '../../utils/playAnimation';
import { useScrollTrigger } from '../../utils/hooks/useScrollTrigger';
import { Animations } from '../../utils/animations';

type BlockProps = {
    fullHeight?: boolean;
    children?: React.ReactNode;
    className?: string;
    playsAnimation?: boolean;
    enterAnimation?: keyof Animations;
    exitAnimation?: keyof Animations;
    offset?: number;
}

export const Block = React.forwardRef<HTMLDivElement, BlockProps>(
    (
        {
            children,
            className,
            fullHeight = false,
            playsAnimation = true,
            enterAnimation = "blockEnter",
            exitAnimation = "fadeOut",
            offset,
        },
        ref: React.Ref<HTMLDivElement>,
    ) => 
    {
        const { blockRef, isActive, direction } = useScrollTrigger(offset);

        useEffect(() => {
            if(!playsAnimation) return;
            playAnimation<HTMLDivElement>(blockRef.current, direction, isActive ? enterAnimation : exitAnimation);
        }, [isActive]);

        return <div ref={ref || blockRef} className={classNames(styles.block, {[styles.fullHeight]: fullHeight}, className)}>
            {children}
        </div>
    }
);