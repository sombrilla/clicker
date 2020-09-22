import React from 'react';
import { Button } from '../Button/Button';
import { useAppGenericModal } from '../../context/appGenericModalContext';


export type GenericModalProps = {
    onConfirm: () => void;
    onClose?: () => void;
    copies: {
        title: string;
        description: string;
        confirm: string;
        cancel: string;
    }
}

export const GenericModal: React.FC<GenericModalProps> = ({ onConfirm, onClose, copies }) => {
    const isOpen = useAppGenericModal.useDataGenericModalData();
    const setIsOpen = useAppGenericModal.useSetGenericModalData();

    if (!isOpen) return null;

    return <div>
        <h3>{copies.title}</h3>
        <p>{copies.description}</p>
        <Button onClick={onConfirm}>{copies.confirm}</Button>
        <Button onClick={() => (onClose && onClose()) || setIsOpen(false)}>{copies.cancel}</Button>
    </div>;
}