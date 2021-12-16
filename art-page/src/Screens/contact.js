import React from "react";
import ContactForm from "../Components/ContactForm";
import {Container, Row, Col} from "reactstrap";
import TarjetaContact from "../Components/TarjetaContact";
import img1 from "../img/foto5.png"

const Items = [
    {
        label: "Nombre y Apellido"

    },
    {
        label: "Telefono"

    },
    {
        label: "Email"

    },
    {
        label: "Mensaje"

    }
]
const Contact = () => {
    return(
        <Container className="mb-4" >
            <Row className="contact-row">
                    <Col className="bg-primary p-0">
                    <img src={img1} alt="img" className="img-contact w-100 h-100"></img>
                    </Col>
                    <Col className="bg-light p-0">
                        <TarjetaContact/>                      
                        <ContactForm/>
                    </Col>
            </Row>
        </Container>
        
    );
}

export default Contact;