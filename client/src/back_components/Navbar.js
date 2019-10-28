import React,{Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
// import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'
export default class Back_Navbar extends Component{
    render(){
        var styles={
            wrapper: {
                'maxWidth' : '100%',
                'margin' : '0px',
                'padding' : '0px',
                'marginBottom' : '15px',
            },
            selector: {
                'fontSize':'10px',
            },
        }
        return(
            <Container style={styles.wrapper} fluid>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'> 
            
            <Navbar.Brand className="nav_title"><Link to="/backapp/dashboard" style={{color:'white',textDecoration:'none'}}>WIDM WEB BACKEND SYSTEM</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
            <Navbar.Collapse  id="responsive-navbar-nav" >
                <Nav className="ml-auto">
                    <Col md={4}>
                        <NavDropdown title="Overview" >
                            <NavDropdown.Item componentClass='span'><Link to="/backapp/dashboard" style={{color:'black',textDecoration:'none'}}>Dashboard</Link></NavDropdown.Item>
                            <NavDropdown.Item componentClass='span'><Link to="/" style={{color:'black',textDecoration:'none'}}>MainPage</Link></NavDropdown.Item>
                            {/* <LinkContainer to="/backapp/dashboard" componentClass='span'><NavDropdown.Item >Dashboard</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/dashboard" componentClass='span'><NavDropdown.Item>MainPage</NavDropdown.Item></LinkContainer> */}
                        </NavDropdown>
                    </Col>
                    <Col md={4}>
                        <NavDropdown title="Uploader" >
                            <NavDropdown.Item componentClass='span'><Link to="/backapp/about" style={{color:'black',textDecoration:'none'}}>About</Link></NavDropdown.Item>
                            <NavDropdown.Item componentClass='span'><Link to="/backapp/twitter" style={{color:'black',textDecoration:'none'}}>Twitter</Link></NavDropdown.Item>
                            <NavDropdown.Item componentClass='span'><Link to="/backapp/project" style={{color:'black',textDecoration:'none'}}>Project</Link></NavDropdown.Item>
                            <NavDropdown.Item componentClass='span'><Link to="/backapp/member" style={{color:'black',textDecoration:'none'}}>Member</Link></NavDropdown.Item>
                            <NavDropdown.Item componentClass='span'><Link to="/backapp/course" style={{color:'black',textDecoration:'none'}}>Course</Link></NavDropdown.Item>
                            <NavDropdown.Item componentClass='span'><Link to="/backapp/contact" style={{color:'black',textDecoration:'none'}}>Contact</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                    <Col md={4}>
                        <NavDropdown title="Auth" >
                            <NavDropdown.Item componentClass='span'><Link to="/backapp/navbarChecked" style={{color:'black',textDecoration:'none'}}>Authorize</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                </Nav>
            </Navbar.Collapse>
            
            </Navbar>
            </Container>
        )
    }
};
