import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header className="fixed-top">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container fluid>
                    <LinkContainer to="/">
                        <Navbar.Brand >Tyagi Shop</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link >Products</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>

                            <LinkContainer to="/login">
                                <Nav.Link ><i className="fas fa-sign-in-alt" ></i> Sign in</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/register">
                                <Nav.Link eventKey={2}> <i className="fas fa-user-plus"></i>Sign up </Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
