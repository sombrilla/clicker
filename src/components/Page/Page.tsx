import React from 'react';
import { useAppCopies } from '../../context/appCopiesContext';
import { Button } from '../Button/Button';

type PageProps = {}

export const Page: React.FC<PageProps> = () => {
    const { title, description, modalButton } = useAppCopies();

    return <>
        <header>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </header>
        <Button onClick={() => console.log(modalButton)}>
            {modalButton}
        </Button>
    </>
}