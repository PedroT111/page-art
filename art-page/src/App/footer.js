import React from "react";
import { Container, Row, Col, ButtonGroup, Button } from "reactstrap";
import{BsInstagram, BsLinkedin} from "react-icons/bs"

const Footer = () => {
    return(
        <Container className="mt-2 conteiner">
            <Row>
                <Col>
                    <Col className="col bg-light d-flex align-items-center justify-content-between">
                        <p className="text">&copy; {new Date().getFullYear()} Envelope, Inc. All rights reserved.</p>
                        <ButtonGroup className=" btns d-flex justify-content-around">
                            <BsInstagram size="25"/>
                            <BsLinkedin  size="25"/>
                        </ButtonGroup>
                    </Col>
                </Col>
                
            </Row>
        </Container>
    );
}

export default Footer;