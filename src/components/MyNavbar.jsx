import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const MyNavbar = () => {
    return (
        <div>
            <Navbar
                color="dark"
                dark
                expand="md"
                light
            >
                <Link to="/" style={{ textDecoration: "none" }}>
                    <NavbarBrand  >
                        JSON bootstrap CRUD App
                    </NavbarBrand>
                </Link>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            {/* <NavLink href="/components/">
                                Add New User
                            </NavLink> */}
                        </NavItem>
                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                Options
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default MyNavbar