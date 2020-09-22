import React from 'react';
import { Button } from '../Button/Button';
import { useAppGenericModal } from '../../context/appGenericModalContext';


export type GenericModalProps = {
    isOpen: boolean
    onConfirm: () => void;
    onClose: () => void;
    copies: {
        title: string;
        description: string;
        confirm: string;
        cancel: string;
    }
}

export const GenericModal: React.FC = () => {
    const genericModalContext = useAppGenericModal.useDataGenericModalData() as GenericModalProps;

    if (!genericModalContext || !genericModalContext.isOpen) return null;

    const { copies, onConfirm, onClose } = genericModalContext;

    return <div>
        <h3>{copies.title}</h3>
        <p>{copies.description}</p>
        <Button onClick={onConfirm}>{copies.confirm}</Button>
        <Button onClick={onClose}>{copies.cancel}</Button>
    </div>;
}