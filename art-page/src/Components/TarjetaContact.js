import React from "react";
import{Row, Col, Card, CardBody, CardTitle, CardText} from "reactstrap";

const TarjetaContact = () => {
    return(
        <Row className="mt-5">
            <Col xs="12" sm="10" className="d-flex justify-content-center">
                <Card className="bg-light border-0">
                    <CardBody className="d-flex flex-column">
                        <CardTitle className="fs-2">Contacto</CardTitle>
                        <CardText className="mt-5">Tel: +54 351 330 5151 |Email: gdeaneguia@gmail.com</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        
    );
}

export default TarjetaContact;