import React, {useState} from "react";
import {Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, 
NavLink} from "reactstrap";
import logo from "../img/logo.png"

const Items = [
    {
        name: "Home",
        link: "/"

    },
    {
        name: "Obras",
        link:"/obras"
    },
    {
        name: "Exhibiciones",
        link: "/galeria"
    },
    {
        name: "Bio",
        link: "/bio"
    },
    {
        name: "Contacto",
        link: "/contacto"
    }
];
const Header = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return(
       <Container className="container-header p-0">
           <Row className="row align-items-center">
               <Col className="p-0">
                <Navbar light  expand="md" className="navbar1">
                    <NavbarBrand className="logo" href="/"><img className="logo-img" src={logo} alt="" /></NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} />
                    <Collapse isOpen={isOpen} navbar className="conteinerNav">
                        <Nav className=" nav" navbar>
                            {
                                Items.map(item =>(
                                    <NavItem className="navItem">
                                        <NavLink className ="navLink" href={item.link}>{item.name}</NavLink>
                                    </NavItem>
                                ))
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
               </Col>
           </Row>
       </Container>
    )
}

export default Header;