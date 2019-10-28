import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useMappedState} from 'redux-react-hook';
import '../css/project.css';
import '../App.css';
const styles = {
    wrapper : {
        'marginBottom' : '10px'
    },
    projectWrapper : {
        'marginBottom' : '15px'
    },
    Ptag : {
        'margin' : '15px',
        'margin-bottom' : '0px',
    },
    description:{
        'fontSize' : '15px',
        'margin' : '15px',
        'margin-top' : '0px'
    }
}
var base_url = 'https://sites.google.com/site/nculab/';
const ListProject = ()=>{
    const ProjectData = useMappedState(state => state.projectReducer.project_data)
    const projectBoot = ProjectData.length ? (
        ProjectData.map(project =>{
        return (
            //medium size screen use 
            <Col  key={project.id} sm={6} md={6} lg={4} xl={4} style={styles.projectWrapper}>
                <div className="imageWrapper" onClick={()=>{window.location.href=base_url+project.url}}>
                    <Image className="project-Image" alt="This is a image" src={require("../assets/Image/ProjectIcon/" + project.img)}/>    
                    <p className="content" style={styles.Ptag}>{project.name}</p>
                    <div style={styles.description}>
                            <p>people use social network such as Facebook or blogs to post event news called EventGO!</p>
                    </div>
                </div>
            </Col>
        )
    })
    ):
    (
        <h1 className="center" >No Projects here</h1>
    )

    return (
        // <div className="collection" style={styles.wrapper}>
        //     {projectList}
        // </div>
        <Container className="containWrapper" style={styles.wrapper} fluid id='project'>
            <h1 className="titletext">Projects</h1>
            <Row >
                {projectBoot}
            </Row>
        </Container>
    )

}

export default ListProject;