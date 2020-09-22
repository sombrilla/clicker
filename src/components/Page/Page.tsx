import React from 'react';
import { useAppCopies } from '../../context/appCopiesContext';
import { useAppGenericModal } from '../../context/appGenericModalContext';
import { Button } from '../Button/Button';

type PageProps = {}

export const Page: React.FC<PageProps> = () => {
    const { title, description, modalButton } = useAppCopies();
    const setIsModalOpen = useAppGenericModal.useSetGenericModalData();


    return <>
        <header>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </header>
        <Button
            onClick={() => setIsModalOpen({
                isOpen: true,
                onClose: () => setIsModalOpen(false),
                onConfirm: () => console.log('confirmed'),
                copies: {
                    title: 'Test',
                    description: 'test',
                    confirm: 'confirm',
                    cancel: 'cancel'
                }
            }
            )}>
            {modalButton}
        </Button>
    </>
}