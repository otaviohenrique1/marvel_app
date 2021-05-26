import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/quadrinhos">
        <Button>Quadrinhos</Button>
      </Link>
      <Link to="/personagens">
        <Button>Personagens</Button>
      </Link>
    </div>
  );
}