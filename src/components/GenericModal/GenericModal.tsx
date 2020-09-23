import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './GenericModal.scss';
import { Button } from '../Button/Button';
import { useAppGenericModal } from '../../context/appGenericModalContext';

export type GenericModalCopies = {
    title: string;
    description: string;
    confirm?: string;
    cancel?: string;
}

export type GenericModalProps = {
    isOpen: boolean
    onConfirm?: () => void;
    onClose: () => void;
    copies: GenericModalCopies;
}

export const GenericModal: React.FC = () => {
    const genericModalContext = useAppGenericModal.useDataGenericModalData() as GenericModalProps;

    const renderModalContent = () => {
        if (!genericModalContext) return;
        const { onConfirm, onClose, copies } = genericModalContext;

        return (
            <>
                <h3>{copies.title}</h3>
                <p>{copies.description}</p>
                {onConfirm && copies.confirm && <Button onClick={onConfirm}>{copies.confirm}</Button>}
                {copies.cancel && <Button onClick={onClose}>{copies.cancel}</Button>}
            </>
        );
    }

    return (
        <AnimatePresence>
            {(genericModalContext && genericModalContext.isOpen) &&
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="generic-modal"
                        onClick={genericModalContext.onClose}
                    >
                        <motion.div
                            initial={{ y: '100vh' }}
                            animate={{ y: '0' }}
                            exit={{ y: '100vh' }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            className="generic-modal-content"
                            onClick={(event) => event.stopPropagation()}
                        >
                            {renderModalContent()}
                        </motion.div>
                    </motion.div>
                </>
            }
        </AnimatePresence>
    );

}