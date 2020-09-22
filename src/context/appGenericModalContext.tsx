import React from 'react';
import { createDynamicDataContext } from '../utils/createDynamicDataContext';
import { GenericModal, GenericModalProps } from '../components/GenericModal/GenericModal';

const { DynamicDataProvider, useDynamicData, useSetDynamicData } = createDynamicDataContext<GenericModalProps | boolean>();

const useDataGenericModalData = useDynamicData;
const useSetGenericModalData = useSetDynamicData;

export const useAppGenericModal = { useDataGenericModalData, useSetGenericModalData };

export const AppGenericModalProvider: React.FC = ({ children }) => {
    return <DynamicDataProvider>
        {children}
        <GenericModal />
    </DynamicDataProvider>
};
