import React, { Component } from 'react'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';



export default class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#">Ellen Haas</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#intr">About Me</Nav.Link>
                    <Nav.Link href="#stor">Curiculum Vitae</Nav.Link>
                    {/*<Nav.Link href="#cont">Contact</Nav.Link>
                    <Nav.Link href="#down">Downloads</Nav.Link>*/}
                    </Nav>
                </Navbar.Collapse>
          </Navbar>
        )
    }
}

