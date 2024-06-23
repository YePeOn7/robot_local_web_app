import React, { createContext, useState, useContext, ReactNode } from 'react';

interface DashboardContextType {
  serverIp: string;
  setServerIp: React.Dispatch<React.SetStateAction<string>>;
}

interface DashboardContextProviderProps {
  children: ReactNode; 
}

const DashboardContext = createContext<DashboardContextType>({
  serverIp: '',
  setServerIp: () => {},
});

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};

export const DashboardContextProvider: React.FC<DashboardContextProviderProps> = ({ children }) => {
  const [serverIp, setServerIp] = useState<string>('');

  const contextValue: DashboardContextType = {
    serverIp,
    setServerIp,
  };

  return (
    <DashboardContext.Provider value={contextValue}>
      {children}
    </DashboardContext.Provider>
  );
};
