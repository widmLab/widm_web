import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {useMappedState} from 'redux-react-hook';
const styles = {
    wrapper : {
        'opacity' :'0.8',
        'maxWidth' : '100%',
        'position': 'relative',
        'background':'black',
    },
    lab :{
        'color':'white',
        'textAlign': 'center',
        //'letterSpacing':'13px',
        'fontSize':'40px',
        'textDecorationColor':'#ff5e15',
        'padding' :'0px',
        'font-family':'Comic Sans MS',
    },
    title:{
        'textAlign': 'center',
        'font-family':'Comic Sans MS',
        'color':'white',
        'letterSpacing':'2px',
        'fontSize':'35px',
        'textDecoration':'underline',
        'textDecorationColor':'#ff5e15',
        'padding' :'0px',
    },
    content:{
        'textAlign': 'center',
        'font-family':'Comic Sans MS',
        'color':'white',
        //'letter-spacing':'2px',
        'fontSize':'25px',
        'padding' :'0px',
    },
    disclosure:{
        'textAlign': 'center',
        'color':'white',
        'fontSize':'15px',
        'padding' :'0px',
        'margin' : '0px',
    }
}
const Contact = () =>{
    const contact = useMappedState(state => state.contactReducer.information)
    return(
        <Container style={styles.wrapper} id='contact'>
            <p style={styles.lab}>WIDM LAB</p>
            <Row>
                <Col style={styles.title}>Phone</Col>
                <Col style={styles.title}>Email</Col>
                <Col style={styles.title}>Address</Col>
            </Row>
            <Row>
                <Col style={styles.content}>{contact.phone}</Col>
                <Col style={styles.content}>{contact.email}</Col>
                <Col style={styles.content}>{contact.address}</Col>
            </Row>
            <br></br>
            <Row>
                <Col style={styles.disclosure}>Copyright @2019 All rights reserved | this website is maded by widm_web</Col>
            </Row>
            <br></br>
        </Container>
    )
}

export default Contact;