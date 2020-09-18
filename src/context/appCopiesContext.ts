import { createStaticDataContext } from '../utils/createStaticDataContext';

export type AppCopies = {
    title: string;
    description: string;
    modalButton: string;
};
  
const { StaticDataProvider, useStaticData } = createStaticDataContext<AppCopies>();

export const AppCopiesProvider = StaticDataProvider;
export const useAppCopies = useStaticData;