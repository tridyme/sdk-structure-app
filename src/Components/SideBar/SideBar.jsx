import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Nav,
  NavItem
} from 'reactstrap';
import './SideBar.css';

const SideBar = ({
  isOpenSideBar,
  itemSideBar
}) => {
  return (
    <div className={isOpenSideBar ? 'sidebar-open' : 'sidebar-close'}>
      <Nav id="sidebar-wrapper">
        <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
          {
            itemSideBar.map(item => (
              <NavItem key={item.title}>
                <Link to={item.path} id="sidebarItem">
                  <img src={item.img} alt={item.title} />
                  {item.title}
                </Link>
              </NavItem>
            ))
          }
        </ul>
      </Nav>
    </div>
  );
};

SideBar.propTypes = {
  isOpenSideBar: PropTypes.bool.isRequired,
  itemSideBar: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SideBar;