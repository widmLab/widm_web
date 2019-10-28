import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/course.css';
import '../App.css';
const styles = {
    wrapper : {
        'marginBottom' : '10px',
    },
    courseWrapper : {
        'marginBottom' : '15px',
    },
    text : {
        'color' : '#34495e'
    }
}
var base_url = 'https://sites.google.com/site/';
const ListTeaching = ({CourseDate})=>{
    const courseBoot = CourseDate.length ? (
        CourseDate.map(data =>{
        return (
            //medium size screen use 
            <Col  key={data.id}  sm={6} md={6} lg={4} xl={4} style={styles.courseWrapper}>
                <div className="courseWrapper">
                    <div>
                        <p>{data.id}</p>
                        <p>{data.status}</p>
                        <a href={base_url+data.url} style={{color:'#337ab7'}}>{data.name}</a>
                    </div>
                </div>
            </Col>
        )
    })
    ):
    (
        <h1 className="center" >No Courses here</h1>
    )

    return (
        // <div className="collection" style={styles.wrapper}>
        //     {projectList}
        // </div>
        <Container className="containWrapper" style={styles.wrapper} id='course' fluid>
            <h1 className="titletext">Courses</h1>
            <Row >
                {courseBoot}
            </Row>
        </Container>
    )

}

export default ListTeaching;