import { createStaticDataContext } from '../utils/createStaticDataContext';

export type AppCopies = {
    title: string;
    secondTitle: string;
    description: string;
    scrollLabel: string;
};

const { StaticDataProvider, useStaticData } = createStaticDataContext<AppCopies>();

export const AppCopiesProvider = StaticDataProvider;
export const useAppCopies = useStaticData;