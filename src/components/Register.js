import React, { Component } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { addPastel } from '../API/PastelAPI'
import PropTypes from 'prop-types'; 

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.sabor = React.createRef();
        this.qtd = React.createRef();
        this.description = React.createRef();
        this.preco = React.createRef();

        this.sendRegister = this.sendRegister.bind()
    }

    sendRegister = () => {
        let { sabor, qtd, preco, description } = this;

        addPastel(sabor.current.value, qtd.current.value, preco.current.value, description.current.value);
    }


    render () {
        return (
            <>
                <Container className='bg-warning' style={{ height: '90vh' }} fluid>
                    <Row className="justify-content-center">
                        <Form className="col-xl-6 m-xl-5" onSubmit={(e) => {
                            e.preventDefault();
                            this.sendRegister()

                        }}>
                            <Form.Group as={Row} controlId="formSabor" >
                                <Form.Label column xl="2">Sabor</Form.Label>
                                <Col xl="10"><Form.Control ref={this.sabor} type="string" placeholder="e.g. Pizza com Peperoni" xl="10" /></Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPreco">
                                <Form.Label column xl='2'>R$</Form.Label>
                                <Col xl="10">
                                    <Form.Control ref={this.preco} id="preco" type="string" placeholder="R$5,00" />

                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formQtd">
                                <Form.Label column xl='2'>Qtd.</Form.Label>
                                <Col xl="10">
                                    <Form.Control ref={this.qtd} type="string" id="qtd" placeholder="Total de produto no estoque" />

                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formDescricao">
                                <Form.Label column xl="2">Descrição:</Form.Label>
                                <Col xl="10">
                                    <Form.Control ref={this.description} id="description" as="textarea" rows="3" />
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
}


Register.propTypes = {
    qtd: PropTypes.number.isRequired,

}