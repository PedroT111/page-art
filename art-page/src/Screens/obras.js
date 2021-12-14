import React from "react";
import { Container, Row, Col } from "reactstrap";
import ImgList from "../Components/ImgList";
import img1 from "../img/foto1.png";
import img2 from "../img/foto2bis.png";
import img3 from "../img/foto3bis.png";
import img4 from "../img/foto4.png"
import img5 from "../img/foto5.png"
import img6 from "../img/te extraño.png"
import img7 from "../img/se repsiran las cenizas.png"

const Items = [
    {
        img: img1,
        title: "img1"
    },
    {
        img: img2,
        title: "img1"
    },
    {
        img: img3,
        title: "img1"
    },
    {
        img: img4,
        title: "img1"
    },
    {
        img: img5,
        title: "img1"
    },
    {
        img: img6,
        title: "img1"
    },
    {
        img: img7,
        title: "img1"
    },
]
const Obras = () => {
    return(
        <Container className="mt-2">
            <Row>
                <Col>
                <ImgList itemData = {Items} />
                </Col>
            </Row>
        </Container>
    );
}

export default Obras;