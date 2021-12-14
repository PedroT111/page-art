import React from "react";
import { Container, Row, Col, ButtonGroup} from "reactstrap";
import{BsInstagram, BsLinkedin} from "react-icons/bs"

const Footer = () => {
    return(
        <Container className="mt-2 p-0 conteiner">
            <Row className="align-items-center border-top border-dark border-3 py-2">
                <Col className="p-0">
                    <Col className="col d-flex align-items-center justify-content-between">
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