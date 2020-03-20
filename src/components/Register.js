import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export default function Register() {
    return (
        <>
            <Container className='bg-warning' fluid>
                <Row className="justify-content-center">
                    <Form className="col-xl-6 m-xl-5">
                        <Form.Group as={Row} controlId="formSabor" >
                            <Form.Label column xl="2">Sabor</Form.Label>
                            <Col xl="10"><Form.Control type="string" placeholder="e.g. Pizza com Peperoni" xl="10" /></Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPreco">
                            <Form.Label column xl='2'>R$</Form.Label>
                            <Col xl="10">
                                <Form.Control type="string" placeholder="R$5,00" />

                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formQtd">
                            <Form.Label column xl='2'>Qtd.</Form.Label>
                            <Col xl="10">
                                <Form.Control type="string" placeholder="Total de produto no estoque" />

                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formDescricao">
                            <Form.Label column xl="2">Descrição:</Form.Label>
                            <Col xl="10">
                                <Form.Control as="textarea" rows="3" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col xl={{ span: 10, offset: 2 }}>
                                <Button type="submit">Gravar</Button>
                            </Col>
                        </Form.Group>

                    </Form>


                </Row>
            </Container>
        </>
    )
}
