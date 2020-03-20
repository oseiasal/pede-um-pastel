import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function Header({ orders, register, warehouse }) {
    return (
        <Navbar bg='dark' expand='lg'>
            <Navbar.Brand href="#home">Pede Pastel</Navbar.Brand>

            <Nav>
                <Nav.Link>
                    {orders}
                </Nav.Link>
                <Nav.Link>
                    {register}
                </Nav.Link>
                <Nav.Link>
                    {warehouse}
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}
