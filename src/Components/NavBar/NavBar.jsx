import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  NavbarBrand,
  Col,
} from 'reactstrap';
import './navbar.css';

class NavBar extends React.Component {
  render() {
    const {
      REACT_APP_LOGO,
      REACT_APP_COMPANY
    } = process.env;
    return (
      <Col col={12} className="navbarapp">
        <Navbar dark color="light" expand="md" fixed="top">
          <NavbarBrand
            id="navbarTitle1"
            to="/dashboard"
            href="https://app.triazur.com/"
            style={{ backgroundImage: `url(${REACT_APP_LOGO})` }}
          >
            <img src={require("" + REACT_APP_LOGO)} alt='logo' />

            {`${REACT_APP_COMPANY}`}
          </NavbarBrand>
        </Navbar>
      </Col>
    );
  }
}

NavBar.propTypes = {
  apptitle: PropTypes.string.isRequired,
  isOpenSideBar: PropTypes.bool.isRequired
};


export default NavBar;
