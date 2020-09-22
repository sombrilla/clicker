import React, { useContext, useState, Dispatch, SetStateAction } from 'react';

type SetStatehData<T> = Dispatch<SetStateAction<T>>;

export const createDynamicDataContext = <T extends {}>() => {
    const StateContext = React.createContext<T>({} as T);
    const DispatchContext = React.createContext<SetStatehData<T>>(() => ({}));

    const useDynamicData = () => {
        return useContext<T>(StateContext);
    };

    const useSetDynamicData = () => {
        return useContext<SetStatehData<T>>(DispatchContext);
    }

    const DynamicDataProvider: React.FC<{ data?: T }> = ({ children, data: initialData }) => {
        const [data, setData] = useState<T>(initialData as T);

        return (
            <StateContext.Provider value={data}>
                <DispatchContext.Provider value={setData}>
                    {children}
                </DispatchContext.Provider>
            </StateContext.Provider>
        );
    };

    return {
        DynamicDataProvider,
        useDynamicData,
        useSetDynamicData,
    };
};
