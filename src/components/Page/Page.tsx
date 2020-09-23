import React from 'react';
import { useAppCopies } from '../../context/appCopiesContext';
import { useAppGenericModal } from '../../context/appGenericModalContext';
import { Button } from '../Button/Button';
import styles from './Page.module.scss';

type PageProps = {}

export const Page: React.FC<PageProps> = () => {
    const { title, description, successModalButton, errorModalButton, errorModal, successModal } = useAppCopies();
    const setIsModalOpen = useAppGenericModal.useSetGenericModalData();

    const handleOpenErrorModal = () => {
        setIsModalOpen({
            isOpen: true,
            onClose: () => setIsModalOpen(false),
            onConfirm: () => console.log('confirmed'),
            copies: errorModal,
        });
    }

    const handleOpenSuccessModal = () => {
        setIsModalOpen({
            isOpen: true,
            onClose: () => setIsModalOpen(false),
            copies: successModal,
        });
    }

    return <div className={styles.page}>
        <header>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </header>
        <Button
            onClick={handleOpenErrorModal}>
            {errorModalButton}
        </Button>
        <Button
            onClick={handleOpenSuccessModal}>
            {successModalButton}
        </Button>
    </div>
}