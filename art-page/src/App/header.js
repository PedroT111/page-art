import React, {useState} from "react";
import {Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, 
NavLink} from "reactstrap";
import logo from "../img/logo.png"

const Items = [
    {
        name: "Home",
        link: ""

    },
    {
        name: "Obras",
        link:""
    },
    {
        name: "Exhibiciones",
        link: ""
    },
    {
        name: "Bio",
        link: ""
    },
    {
        name: "Contacto",
        link: ""
    }
];
const Header = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return(
       <Container className="container-header">
           <Row>
               <Col>
                <Navbar color="light" light  expand="md" className="navbar1">
                    <NavbarBrand className="logo" href="/"><img className="w-75" src={logo} alt="" /></NavbarBrand>
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