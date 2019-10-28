import React from 'react';
import {Link} from 'react-scroll';
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import Scrollchor from 'react-scrollchor';
const styles=
{
    navbar:
    {
        backgroundColor:'#333333',
        margin:0,
        overflow:'hidden',
        padding:0,
        position:'fixed',
        top:'0px',
        width:'100%',
        zIndex:999
    },
    title:
    {
        color:'#9D9D9D',
        float:'left',
        fontSize:25,
        lineHeight:2,
        marginLeft:50,
        marginRight:50,
        textAlign:'center',
        'font-family':'Comic Sans MS',
    },
    nav:
    {
        cursor:'grab',
        fontSize:20,
        lineHeight:3,
        textAlign:'center'
    }
}

const Navbars=()=>
{
    return(
        <Navbar bg="dark " expand="lg" fixed="top">
        <Navbar.Brand href="#home" style={styles.title}>WIDM LAB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" >
            <Scrollchor style={styles.title} to="#home" animate={{offset: -90, duration: 300}} className="nav-link">Home</Scrollchor>
            <Scrollchor style={styles.title} to="#twitter" animate={{offset: -90, duration: 300}} className="nav-link">Twitter</Scrollchor>
            <Scrollchor style={styles.title} to="#member" animate={{offset: -90, duration: 300}} className="nav-link">Member</Scrollchor>
            {/* <Nav.Link duration={500} offset={-25}  smooth={true} spy={true} to='project' style={styles.title}>Projects</Nav.Link> */}
            <Scrollchor style={styles.title} to="#project" animate={{offset: -90, duration: 300}} className="nav-link">Projects</Scrollchor>
            <Scrollchor style={styles.title} to="#course" animate={{offset: -90, duration: 300}} className="nav-link">Course</Scrollchor>
            <Scrollchor style={styles.title} to="#publication" animate={{offset: -90, duration: 300}} className="nav-link">Publication</Scrollchor>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbars;