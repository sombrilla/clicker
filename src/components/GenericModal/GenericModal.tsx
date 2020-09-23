import React from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import './GenericModal.scss';
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
                            <h3>{genericModalContext.copies.title}</h3>
                            <p>{genericModalContext.copies.description}</p>
                            <Button onClick={genericModalContext.onConfirm}>{genericModalContext.copies.confirm}</Button>
                            <Button onClick={genericModalContext.onClose}>{genericModalContext.copies.cancel}</Button>
                        </motion.div>
                    </motion.div>
                </>
            }
        </AnimatePresence>
    );

}