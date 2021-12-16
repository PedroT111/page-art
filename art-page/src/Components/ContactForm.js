import React from "react";
import {Button, Form, FormGroup, Label, Input, Container, Row, Col} from "reactstrap";

const ContactForm = () => {
    return(
        <Container>
             <Row className="mt-2œ">
                <Col xs="12" sm="12" className="d-flex justify-content-center">
                    <Col xs="12" sm="10" className="d-flex justify-content-center">
                        <Form className="w-100">
                            <FormGroup>
                                <Label>Nombre y Apellido</Label>
                                <Input/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Telefono</Label>
                                <Input/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Mensaje</Label>
                                <Input type="textarea"/>
                            </FormGroup>
                            <Button className="w-100 mt-2">Enviar</Button>
                        </Form>
                    </Col>
                </Col>
               
            </Row>
        </Container>
           
    );
}

export default ContactForm;