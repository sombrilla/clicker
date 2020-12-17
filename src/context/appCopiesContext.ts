import { createStaticDataContext } from '../utils/createStaticDataContext';

export type AppCopies = {
    stats: {
        level: string;
        perClick: string;
        perSecond: string;
        army: string;
    }
};

const { StaticDataProvider, useStaticData } = createStaticDataContext<AppCopies>();

export const AppCopiesProvider = StaticDataProvider;
export const useAppCopies = useStaticData;