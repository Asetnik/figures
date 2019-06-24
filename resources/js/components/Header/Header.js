import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <NavLink to='/' className="navbar-brand">Figures</NavLink>
                        <Nav className="mr-auto">
                            <NavLink to='/' exact={true} activeClassName='active' className="nav-link">Add figure</NavLink>
                            <NavLink to='/statistics' activeClassName='active' className="nav-link">Figures statistics</NavLink>
                            <NavLink to='/figuresList' activeClassName='active' className="nav-link">Figures list</NavLink>
                        </Nav>
                    </Container>
                </Navbar>
                <br />
            </div>
        );
    }
}

export default Header;