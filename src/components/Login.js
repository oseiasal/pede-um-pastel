import React from 'react'
import { Dropdown, Form, Button } from 'react-bootstrap'

export default function Login() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" size="sm">
                Login
            </Dropdown.Toggle>

            <Dropdown.Menu className=" p-2">
                <Form onSubmit={event => {

                    event.preventDefault()
                    console.log(event)
                }}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Dropdown.Menu>
        </Dropdown>
    )
}
