import React from 'react';
import { AppContextProvider } from './contexts/AppContext';
import Routes from './pages/routes';
import './styles/scss/App.scss';

function App() {
  return (
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  );
}

export default App;
