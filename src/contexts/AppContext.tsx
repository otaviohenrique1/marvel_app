import React, { ReactNode, useState, useContext, createContext } from 'react';

type Usuario = {
  id: string;
  nome: string;
  email: string;
}

type AppContextData =  {
  usuarioData: Usuario[];
  addUsuarioData: (value: []) => void;
}

export const AppContext = createContext({} as AppContextData);

type AppContextProviderProps = {
  children: ReactNode;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [usuarioData, setUsuarioData] = useState([]);

  function addUsuarioData(value: []) {
    setUsuarioData(value);
  }
  
  return (
    <AppContext.Provider
      value={{
        usuarioData,
        addUsuarioData
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};