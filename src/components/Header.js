import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function Header({ home, login, orders, register, warehouse }) {
    return (
        <Navbar bg='dark' expand='lg'>
            <Navbar.Brand href="#home">Pede Pastel</Navbar.Brand>

            <Nav>
                
                <Nav.Link>
                    {home}
                </Nav.Link>


                <Nav.Link>
                    {orders}
                </Nav.Link>
                <Nav.Link>
                    {register}
                </Nav.Link>
                <Nav.Link>
                    {warehouse}
                </Nav.Link>
                {login}
            </Nav>
        </Navbar>
    )
}
