import React from "react";
import { Container, Row, Col } from "reactstrap";
import Carrousel from "../Components/Carrousel";
import img1 from "../img/foto1.png";
import img2 from "../img/foto2bis.png";
import img3 from "../img/foto3bis.png"

const Items = [
    {
        src: img2,
        altText: "img1"
    },
    {
        src: img3,
        altText:"img1"
    }    
]
const Home = () => {
    return(
        <Container>
            <Row >
                <Col>
                   <Carrousel items={Items}/>
                </Col>
            </Row>
        </Container>
            
    );
}

export default Home;