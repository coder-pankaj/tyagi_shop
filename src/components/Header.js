import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Header() {
    return (
        <header className="fixed-top">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container fluid>
                    <Navbar.Brand href="#home">Tyagi Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Products</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"><i className="fas fa-sign-in-alt" ></i> Sign in</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <i className="fas fa-user-plus"></i>
                                Sign up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
