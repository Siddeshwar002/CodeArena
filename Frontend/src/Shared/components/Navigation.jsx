import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Navigation.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  // NavbarText,
} from "reactstrap";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="MainNav sticky-top">
      <Navbar className="NavSize" expand="md">
        <NavbarBrand className="NavPos" href="/">
          <p>
            Code Arena
            <span class="Subtitle">&nbsp; - &nbsp;Coders live and encore</span>
          </p>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <div className="NavItemsPos">
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem className="NavItemPos">
                <NavLink className="NavLinksStyle" href="/components/">
                  Home
                </NavLink>
              </NavItem>

              <NavItem className="NavItemPos">
                <NavLink className="NavLinksStyle" href="/components/">
                  About Us
                </NavLink>
              </NavItem>

              <NavItem className="NavItemPos">
                <NavLink className="NavLinksStyle" href="/components/">
                  Contact us
                </NavLink>
              </NavItem>

              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="NavLinksStyle " nav caret>
                  Options
                </DropdownToggle>

                <DropdownMenu right className="NavToggleBarStyle">
                  <DropdownItem className="NavLinksStyle">
                    Option 1
                  </DropdownItem>

                  <DropdownItem className="NavLinksStyle">
                    Option 2
                  </DropdownItem>

                  <DropdownItem divider />

                  <DropdownItem className="NavLinksStyle">Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>

            {/* <NavbarText>Simple Text</NavbarText> */}
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
