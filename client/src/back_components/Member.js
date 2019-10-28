import React,{Component} from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Container from 'react-bootstrap/Container';
import Previews from './UploadFile';
let styles = {
    "img":{
        'height' : '100%',
        'width' : '100%',
        'borderStyle':'solid',
        'borderWidth':'1px',
    },
    "row_container":{
        'height' : '100%',
        //'border-style':'solid',
    },
 }

export default class Member extends Component{
    constructor(props) {
        super(props);
        //console.log(props);
        props.location.state ? this.state = {
          sid:this.props.location.state.sid ,
          name:this.props.location.state.name ,
          email:this.props.location.state.email ,
          hobby:this.props.location.state.hobby ,
          degree:this.props.location.state.degree ,
          program:this.props.location.state.program,
          sex:this.props.location.state.sex ,
          img:this.props.location.state.img ,
          password:this.props.location.state.pwd
        } :
        this.state = {
            sid:'' ,
            name:'',
            email:'',
            hobby:'',
            degree:'',
            program:'',
            sex:'',
            img:'',
            password:'False'
        }
      }
    handleClearOnclick = (e)=>{
        e.preventDefault();
        this.setState({
            sid:'' ,
            name:'',
            email:'',
            hobby:'',
            degree:'',
            program:'',
            sex:'',
            img:'',
            password:'False'
        });
        //console.log(this.state);
    }
    render(){
        return(
            <Container>
                <Form>
                    <Row style={styles.row_container}>
                        <Col>
                            <Form.Group controlId="formBasicSID">
                                <Form.Label>Student ID</Form.Label>
                                <Form.Control type="SID" Value={this.state.sid} />
                            </Form.Group>
                            <Form.Group controlId="formBasicstart">
                                <Form.Label>Hobby</Form.Label>
                                <Form.Control type="start" Value={this.state.hobby} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" Value={this.state.name} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" Value={this.state.email} />
                            </Form.Group>
                        </Col>
                        <Col>
                            {/* <Image style={styles.img}/> */}
                            <Previews style={styles.img}/>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Sex</Form.Label>
                            <Form.Control as="select" Value={this.state.sex}>
                                <option>Female</option>
                                <option>Male</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState" Value={this.state.degree}>
                            <Form.Label>Degree</Form.Label>
                            <Form.Control as="select">
                                <option>Bachelor</option>
                                <option>Master</option>
                                <option>PhD</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Program</Form.Label>
                            <Form.Control as="select" Value={this.state.Previewsprogram}>
                                <option>一般組</option>
                                <option>軟體工程組</option>
                            </Form.Control>
                        </Form.Group>
                    </Row>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  disabled={this.state.pwd} placeholder="Enter Password" />
                    </Form.Group>
                    <ButtonToolbar>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={this.handleClearOnclick} style={{marginLeft:'5px'}}>
                        Clear
                    </Button>
                    </ButtonToolbar>
                </Form>  
            </Container>
        )
    }
};
