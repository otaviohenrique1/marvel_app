import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Collapse, Nav, NavbarBrand, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem } from "reactstrap";
import { BsChatSquareDots, BsPersonFill } from "react-icons/bs";
import '../../styles/scss/header/style.scss'
import apiTeste4 from '../../services/api_teste/api_teste_4';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand>
          <Link className="nav-item-link" to="/home">
            <BsChatSquareDots className="mr-2" color="white"/>Marvel-App
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="mr-5 ml-4">
              <Link className="nav-item-link" to="/quadrinhos">Quadrinhos</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-item-link" to="/personagens">Personagens</Link>
            </NavItem>
          </Nav>
          <DropdownItem divider />
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <BsPersonFill size={20} color="gray" className="avatar-user" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link className="nav-item-link" to={`/usuario/${apiTeste4[0].id}`}>Perfil</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className="nav-item-link" to={`/favoritos/${apiTeste4[0].id}`}>Favoritos</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="nav-item-link" to="/">Sair</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}
