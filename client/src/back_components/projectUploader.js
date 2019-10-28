import React from 'react';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Previews from './UploadFile';
import Button from 'react-bootstrap/Button';
import {createProject} from '../actions/projectActions';
import {useDispatch} from 'redux-react-hook';
let styles = {
    "img":{
        'height' : '100%',
        'width' : '100%',
        'borderStyle':'solid',
        'borderWidth':'1px',
        "border":"solid grey 1px",
        'padding':'0px',
    },
    "img_div":{
        "display":"flex",
        "flexDirection":"column",
        "justifyContent":"center",
        "marginBottom":"15px"
    },
    "row_container":{
        'height' : '100%',
        //'border-style':'solid',
    },
 }
export default function ProjectUploader(){

    const dispatch = useDispatch();
    const addProject = (project)=>{
        dispatch(createProject(project))
    }
    const handleOnclick = (e) =>{
        e.preventDefault();
        addProject({name:'test',url:'testUrl'});
    }
    return(
        <Container>
        <Form>
        <Row>
            <Col sm={12} md={6} lg={6}>
                <div>
                <h3>Project ID</h3>
                <InputGroup className="mb-3"> 
                    <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                </div>
                <div>
                <h3>Project Name</h3>
                <InputGroup className="mb-3"> 
                    <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                </div>
                <div>
                <h3>Member</h3>
                <InputGroup className="mb-3"> 
                    <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                </div>
                <div>
                <h3>Link url</h3>
                <InputGroup className="mb-3"> 
                    <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                </div>
            </Col>
            <Col sm={12} md={6} lg={6} >
                <div style={styles.img_div}>
                    <h3>Image</h3>
                    <div className="imageUploader" style={styles.img}>
                        <Previews/>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button variant="primary" size="lg" block onClick={handleOnclick}>
                    Upload
                </Button>
            </Col>
        </Row>
        </Form>
        </Container>
    )
}