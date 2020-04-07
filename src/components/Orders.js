import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

export default function Orders() {
    return (
        <>
            <Container className='bg-info' style={{height: '90vh'}} fluid>
                <Row>
                    <Col className='m-2'>
                        <Card text={'dark'} style={{ width: '18rem' }}>
                            <Card.Header>Pedido: 4 x Frango com Cheddar</Card.Header>
                            <Card.Body>
                                <Card.Title> Guilherme </Card.Title>
                                <Card.Subtitle>#0012</Card.Subtitle>
                                <Card.Text className="pt-2">
                                    Rua Alberto de Oliveira, 29
                            </Card.Text>
                                <Card.Text className="pt-2">
                                    <ul>
                                        Pagamento: R$27,00
                                        <li>Dinheiro</li>
                                        <li>R$24,75 de troco</li>
                                    </ul>
                            </Card.Text>

                            <Row>
                                <Button className="btn btn-primary" role="button">Entregue</Button>
                            <Button className="btn btn-primary bg-danger" role="button">Cancelar</Button>
                            </Row>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
