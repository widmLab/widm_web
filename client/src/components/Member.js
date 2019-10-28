import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image';
import '../css/member.css';
import git from '../img/git.png';
import '../App.css';
import gmail from '../img/gmail.png';
import {useMappedState} from 'redux-react-hook';
// import * as Members from '../imgmember';

let styles = {
    "wrapper" : {
        'marginBottom' : '10px',
        // 'border' : 'solid black 1px',
    },
    "flex":{
        'display': 'flex',
        'flexDirection':'column',
        'flexWrap': 'wrap',
        'justifyContent': 'center',
        position: 'absolute',
        bottom : '5px',
        left : '10px',
    },
    "imgbox":{
         margin: 'auto',
        'position': 'relative',
        'width':'200px',
        'height' : '300px',
        'overflow': 'hidden',
        //'border' : 'solid black 5px',
        'textAlign': 'center',
        'marginLeft': 'auto',
        'marginLight': 'auto',
    },
    "img":{
        'width' :  '200px',
        'height' : '300px',
         'zIndex': '-1',
    },
    "icon":{
        'height' : '30px',
        'width' : '30px',
        'display': 'flex',
        'flexDirection':'col',
        'flexWrap': 'wrap',
        'margin':'3px',
        'zIndex': '10',
        'cursor':'grab'
    }
 }
 const Member = ()=>{
    const master = useMappedState(state => state.userReducer.master)
    const phd = useMappedState(state => state.userReducer.phd)
    const masterBoot = master.length ?(
        master.map(member =>{
        return (
        <Col key={member.id}>
            <div style={styles.imgbox}>
                <Image className="member_image" style={styles.img} src={require("../imgmember/" + member.img)} alt='error'></Image>                             
                <div style={styles.flex}>
                    <a href={member.website}><Image  style={styles.icon} src={git} alt='error'></Image></a>
                    <a href={member.email}><Image  style={styles.icon} src={gmail} alt='error'></Image></a>
                </div>
            </div>  
            <div>
                <p className='content'>{member.name}</p>
            </div>
        </Col>
            )
    })):
    (
        <h1 className="center" >No Member here</h1>
    )

    const phdBoot = phd.length ?(
        phd.map(member =>{
        return (
        <Col key={member.id}>
            <div style={styles.imgbox}>
                <Image className="member_image" style={styles.img} src={require("../imgmember/" + member.img)} alt='error'></Image>                             
                <div style={styles.flex}>
                    <Image  style={styles.icon} src={git} alt='error'></Image>
                    <Image  style={styles.icon} src={gmail} alt='error'></Image>
                </div>
            </div>  
            <div>
                <p className='content'>{member.name}</p>
            </div>
        </Col>
            )
    })):
    (
        <h1 className="center" >No Member here</h1>
    )

    return(
        <Container className="containWrapper" style={styles.wrapper} id="member" fluid>
            <p className='titletext'> OUR TEAM</p>
            <p className='content'> Master</p>
            <Row>
               {masterBoot}
            </Row>
            <p className='content'>PHD</p>
            <Row>
               {phdBoot}
            </Row>
        </Container>
    );
 }

 


export default Member;

