import React from "react";
import {Container, Navbar, Nav} from 'react-bootstrap';

const navbar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="https://combo.staticflickr.com/pw/images/flickr_logo_dots.svg"
                            height="10"
                            className="d-inline-block align-middle mr-5"
                        />{' '}
                        Flickr API React
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav.Link className="text-right text-white" href="/">Home</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default navbar;