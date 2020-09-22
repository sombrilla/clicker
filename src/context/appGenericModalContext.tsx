import React from 'react';
import { createDynamicDataContext } from '../utils/createDynamicDataContext';
import { GenericModal } from '../components/GenericModal/GenericModal';

const { DynamicDataProvider, useDynamicData, useSetDynamicData } = createDynamicDataContext<boolean>();

const useDataGenericModalData = useDynamicData;
const useSetGenericModalData = useSetDynamicData;

export const useAppGenericModal = { useDataGenericModalData, useSetGenericModalData };

export const AppGenericModalProvider: React.FC = ({ children }) => {
    return <DynamicDataProvider>
        {children}
        <GenericModal
            onConfirm={() => console.log('confirmed')}
            copies={{ title: 'test', description: 'test', confirm: 'confirm', cancel: 'cancel' }}
        />
    </DynamicDataProvider>
};
