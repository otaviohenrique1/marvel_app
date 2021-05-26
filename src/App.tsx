import React from 'react';
import { Container } from 'reactstrap';
import Routes from './pages/routes';
import './styles/scss/App.scss';

function App() {
  return (
    <Container className="App">
      <Routes />
    </Container>
  );
}

export default App;
