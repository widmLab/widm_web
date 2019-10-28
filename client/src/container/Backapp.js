import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React,{Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Member from '../back_components/Member';
import Navbar from '../back_components/Navbar';
import AboutUploader from '../back_components/AboutUploader';
import CourseUploader from '../back_components/CourseUploader';
import ContactUploader from '../back_components/ContactUploader';
import ProjectUploader from '../back_components/projectUploader';
import NavbarCheckbox from '../back_components/NavbarCheckbox';
import Overview from '../back_components/Dashboard';
import Twitter from '../back_components/Twitter';

export default class Backapp extends Component{
    render(){

        var styles = {
            wrapper : {
                'maxWidth' : '100%',
            },
        }

        return(
            <div className="backapp-container" style={styles.wrapper}>
                <Navbar/>
                <Switch>
                    <Route path="/backapp/dashboard" component={Overview}/>
                    <Route path="/backapp/project" component={ProjectUploader}/>
                    <Route path="/backapp/member" component={Member}/>
                    <Route path="/backapp/about" component={AboutUploader}/>
                    <Route path="/backapp/course" component={CourseUploader}/>
                    <Route path="/backapp/contact" component={ContactUploader}/>
                    <Route path="/backapp/navbarChecked" component={NavbarCheckbox}/>
                    <Route path="/backapp/twitter" component={Twitter}/>
                </Switch>
            </div>
        )
    }
};