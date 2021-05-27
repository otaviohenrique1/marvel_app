import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Button } from 'reactstrap';
import '../../styles/scss/home_button/style.scss';

interface HomeBotaoProps {
  to: any;
  className?: string;
  color?: string;
  label?: string;
  icon?: any;
}

export default function HomeBotao({
  to,
  className,
  color,
  label,
  icon
}: HomeBotaoProps) {
  return (
    <Col md={4} className={className}>
      <Link to={to} className="mr4">
        <Button
          className="btn-home"
          color={color}
        >
          {icon}
          <p>{label}</p>
        </Button>
      </Link>
    </Col>
  );
}

/*
  <Col md={4} className="mt-3">
    <Link to="/quadrinhos" className="mr4">
      <Button
        className="btn-home"
        color="primary"
      >
        <BsBook
          size={40}
          className="mb-1"
        />
        <p>Quadrinhos</p>
      </Button>
    </Link>
  </Col>
*/