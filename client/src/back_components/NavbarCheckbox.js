import React,{Component} from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import '../css/navcheck.css';
import Users from './Users.js';
import Group from './Group.js';
import {Link} from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';
export default class Navbar_Checkbox extends Component{
    render(){
        // const user = new Users();
        // const result = user.render();
        let styles = {
            "Breadcrumb":{
                //'color':'black',
                'cursor':'grab',
            },
            "row_container":{
                'backgroundColor': 'red',
                //'height' : '100%',
            },
         }
        return(
            <Container>
            <Breadcrumb style={styles.row_container}>
                <Breadcrumb.Item style={styles.Breadcrumb}>
                    <Link to="/backapp/navbarchecked">
                        User
                    </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item style={styles.Breadcrumb}>
                    <Link to="/backapp/navbarchecked/group">
                        Group
                    </Link>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Switch>
                <Route exact path="/backapp/navbarchecked" component={Users} />
                <Route path="/backapp/navbarchecked/group" component={Group} />
            </Switch>
            </Container>
        )
    }
}
