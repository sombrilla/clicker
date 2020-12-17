import React from 'react';
import { useAppCopies } from '../../context/appCopiesContext';
import styles from './GameInterface.module.scss';

interface GameInterfaceProps {}

export const GameInterface: React.FC<GameInterfaceProps> = () => {
    const { stats } = useAppCopies();

    return <div className={styles.gameInterface}>
            <ul className={styles.stats}>
                {Object.values(stats).map(stat => {
                    return <li>{stat}</li>
                })}
            </ul>
    </div>
}