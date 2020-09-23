import { createStaticDataContext } from '../utils/createStaticDataContext';
import { GenericModalCopies } from '../components/GenericModal/GenericModal';

export type AppCopies = {
    title: string;
    description: string;
    errorModalButton: string;
    successModalButton: string;
    errorModal: GenericModalCopies;
    successModal: GenericModalCopies;
};

const { StaticDataProvider, useStaticData } = createStaticDataContext<AppCopies>();

export const AppCopiesProvider = StaticDataProvider;
export const useAppCopies = useStaticData;