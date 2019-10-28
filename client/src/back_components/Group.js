import React,{Component} from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
export default class Users extends Component{
    constructor(props) {
        super(props)
        this.state = {
            students: [
            { id: 0 ,group:"A",A:true,B:false,C:true,D:false ,E:false},
            { id: 1 ,group:"AB",A:true,B:false,C:false,D:false,E:false },
            { id: 2 ,group:"ABC",A:true,B:true,C:true,D:false,E:false },
            { id: 3 ,group:"ABCD",A:false,B:true,C:false,D:false,E:true },
            { id: 4 ,group:"ABCDE",A:true,B:false,C:false,D:true,E:false },
            ]
        }
    }

    render(){
        function Example() {
            const [show, setShow] = useState(0);
          
            const handleClose = () => {setShow(0);};
            const handleShow = () => setShow(true);
          
            return (
              <>
                <Button variant="outline-primary" onClick={handleShow}>
                  Add Group
                </Button>
          
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Group</Modal.Title>
                  </Modal.Header>
                  <FormControl placeholder="Group Name"/>
                  <Table responsive>
                    <thead>
                    <tr>
                        <th>navA</th>
                        <th>navB</th>
                        <th>navC</th>
                        <th>navD</th>
                        <th>navE</th>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="A" /></td>
                        <td><input type="checkbox" name="B" /></td>
                        <td><input type="checkbox" name="C" /></td>
                        <td><input type="checkbox" name="D" /></td>
                        <td><input type="checkbox" name="E" /></td>
                    </tr>
                    </thead>
                    
                    {/* <CreateTable pp={table}/> */}
                    </Table>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      ADD
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            );
          }

        return(
            
            <Container>
                <Table responsive>
                <thead>
                    <tr>
                    <th>Group</th>
                    <th>navA</th>
                    <th>navB</th>
                    <th>navC</th>
                    <th>navD</th>
                    <th>navE</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.students.map(member=>{
                    return (
                        <tr>
                        <td>{member.group}</td>
                        <td><input type="checkbox" name="A" defaultChecked={member.A} /></td>
                        <td><input type="checkbox" name="AB" defaultChecked={member.B}/></td>
                        <th><input type="checkbox" name="ABC" defaultChecked={member.C}/></th>
                        <td><input type="checkbox" name="ABCD" defaultChecked={member.D}/></td>
                        <td><input type="checkbox" name="ABCDE" defaultChecked={member.E}/></td>
                        </tr>
                    )
                })}
                </tbody>
                </Table>
                <Example table={this.state.students}/>
                
                
            </Container>
        )
    }
}
