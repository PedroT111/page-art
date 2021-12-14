import React,{useState} from "react";
import {Container, Row, Col, Modal, Button} from "reactstrap";
import img1 from "../img/foto1.png";
import img2 from "../img/foto2bis.png";
import img3 from "../img/foto3bis.png";
import img4 from "../img/foto4.png"
import img5 from "../img/foto5.png"
import img6 from "../img/te extraño.png"
import img7 from "../img/se repsiran las cenizas.png"
import GalleryImages from "../Components/GalleryImages";

const Items = [
    {
        img: img1,
        title: "img1",
        className: "img-gallery"
    },
    {
        img: img2,
        title: "img1",
        className: "img-gallery"
    },
    {
        img: img3,
        title: "img1",
        className: "img-gallery"
    },
    {
        img: img4,
        title: "img1",
        className: "img-gallery"
    },
    {
        img: img5,
        title: "img1",
        className: "img-gallery"
    },
    {
        img: img6,
        title: "img1",
        className: "img-gallery"
    },
    {
        img: img7,
        title: "img1",
        className: "img-gallery"
    },
]

const Gallery = () => {
    const [modal, setModal] = useState(false);
    const[url, setUrl] = useState("");
    const toggleOpen = (url) => {
        setModal(true);
        setUrl(url)
    };
    const toggleClose = () => {
        setModal(false);
        setUrl("");
    }

    console.log(url);

    return(
        <>
        <Container className="mt-4 mb-5">
            <Row>
                    {Items.map(item =>(
                        <Col  sm="6" md="3" xl="3" className="icon-open mb-2" onClick={()=>toggleOpen(item.img)}>
                            <GalleryImages Items ={item}/>
                        </Col>
                        
                    ))}
            </Row>
        </Container>
        <Row>
            <Modal
            isOpen={modal} 
            toggle={()=>toggleClose()}
            className="modal-img"
            >
                <img src={url}/>
            </Modal>
        </Row>
        </>
    );
}

export default Gallery;