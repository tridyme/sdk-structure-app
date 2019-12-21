import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Col,
  Row,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Spinner
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';
import MenuBook from '@material-ui/icons/MenuBook';
import Business from '@material-ui/icons/Business';

const NavBar = ({

}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const {
    REACT_APP_LOGO,
    REACT_APP_COMPANY
  } = process.env;
  return (
    <Navbar dark color="light" expand="md" fixed="top" className="navbarapp">
      <NavbarBrand
        className="navbarTitle"
        to="/"
        style={{ backgroundImage: `url(${REACT_APP_LOGO})`, color: 'white' }}
      >
        <img src={require("" + REACT_APP_LOGO)} alt='logo' />
        {`${REACT_APP_COMPANY}`}
      </NavbarBrand>
      <NavbarToggler onClick={toggle} style={{ color: 'white' }}>
        <span className="navbar-toggler-icon" />
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="ml-auto">
          <NavItem>
            <Link className="nav-link" to="/myapp">
              <Business className="material-icons d-inline-block" />
              MyApp
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/page1">
              <MenuBook className="material-icons d-inline-block" />
              Page 1
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );

}

export default NavBar;
