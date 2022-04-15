import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

const Header = () => {

    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">CV Builder</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a href="#login">Login</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header