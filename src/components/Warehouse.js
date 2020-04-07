import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'

export default function Warehouse() {
    return (
        <>
            <Container className=' bg-dark' style={{ height: '90vh' }} fluid>
                <Row className=" p-1 justify-content-center" >
                    <Card className="m-2" text={'dark'} style={{ width: 300 }}>
                        <Card.Header>Frango com Cheddar</Card.Header>
                        <Card.Body>
                            <Card.Title> Frango com Cheddar </Card.Title>
                            <Card.Subtitle>R$15,00 | 10un</Card.Subtitle>
                            <Card.Text className="pt-2">
                                20cm de pastel, 200g de frango desfiado, 100g de queijo cheddar derretido
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card className="m-2" text={'dark'} style={{ width: 300 }}>
                        <Card.Header>Frango com Cheddar</Card.Header>
                        <Card.Body>
                            <Card.Title> Frango com Cheddar </Card.Title>
                            <Card.Subtitle>R$15,00 | 10un</Card.Subtitle>
                            <Card.Text className="pt-2">
                                20cm de pastel, 200g de frango desfiado, 100g de queijo cheddar derretido
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}
