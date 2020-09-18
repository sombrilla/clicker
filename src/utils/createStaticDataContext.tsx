import React, { useContext } from 'react';

export const createStaticDataContext = <T extends {}>() => {
  const DataContext = React.createContext<T>({} as T);

  const useStaticData = () => {
    return useContext<T>(DataContext);
  };

  const StaticDataProvider: React.FC<{ data: T }> = ({ children, data }) => {
    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
  };

  return {
    StaticDataProvider,
    useStaticData,
  };
};
