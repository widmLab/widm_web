import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'
import {useMappedState} from 'redux-react-hook';
export default function Users(props){
    //console.log(props)
    const phd = useMappedState(state=>state.userReducer.phd);
    const master = useMappedState(state => state.userReducer.master)
    const students = phd.concat(master)
    let empty = {};
    return(
        <Container>
            <Table responsive>
            <thead>
                <tr>
                <th>Name</th>
                <th>Sid</th>
                <th>Email</th>
                <th>Sex</th>
                <th>Img</th>
                <th>Program</th>
                <th>Degree</th>
                <th>Hobby</th>
                <th>Group</th>
                <th>Update</th>
                </tr>
            </thead>
            <tbody>
            {students.length? (students.map(member=>{
                return (
                    <tr key={member.id}>
                    <td>{member.name}</td>
                    <td>{member.sid}</td>
                    <td>{member.email}</td>
                    <th>{member.sex}</th>
                    <td>{member.img}</td>
                    <td>{member.program}</td>
                    <td>{member.degree}</td>
                    <td>{member.hobby}</td>
                    <td>{member.group}</td>
                    <td>
                        <Button  variant="outline-primary">
                            <Link to={{pathname:"/backapp/Member",state:member}}>
                                Update
                            </Link>
                        </Button>
                    </td>
                    </tr>
                )
            })):(
                null
            )
            }
            </tbody>
            </Table>
            <Button  variant="outline-primary">
                <Link to={{pathname:"/backapp/Member",state:empty}}>   
                    Add User
                </Link>
            </Button>
        </Container>
    )
}