import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React,{Component} from 'react';
// Components
import Home from '../components/Home';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Contact from '../components/contact';
import Member from '../components/Member';
import Project from '../components/ListProject';
import ListTeaching from '../components/teaching';
//import Calendar from '../components/calendar';
import Twitter from '../components/Twitter';
import Publication from '../components/Publication';
//import Activities from '../components/Activities';
export default class MainPage extends Component
{
  state = {
    course_data : [
        {id : "CE6020",name : "Artificial Intelligence",intro : "this is AI course",url:'ncuaicourse',status:"Fall 2018"},
        {id : "CE5020",name : "Data Mining Course",intro : "this is Data Mining course",url:'dataminingcourse2009',status:"Spring 2016"},
        {id : "CE6102",name : "Machine Learning",intro : "this is Machine Learning course",url:'prmlintro',status:"Fall 2016"},
        {id : "CE5055",name : "Optimization",intro : "this is Optimization course",url:'nculab/course/course-optimization',status:"Fall 2008"},
        {id : "CE7023",name : "WEB IE & IR",intro : "this is WEB IE & IR course",url:'webirandie',status:"Spring 2019"},
    ]
  }
  render()
  {
      const styles = {
        wrapper : {
            'maxWidth' : '100%',
            'minWidth' : '538px',
            'height' : 'auto',
            'justifyContent' : 'center',
            'padding' : '0px',
        },
        containWrapper : {
            'height' : 'auto',
            'justifyContent' : 'center',
            'padding' : '0px',
        },
        Titletext : {
            'fontSize' : '40px',
            'fontWeight' : 'bold',
            'color' : '#ff5e15',
            'textAlign' : 'center',
            'fontFamily' : 'Courier',
        }
    }
    return(
      <div className='MainPage' style={styles.wrapper}>
        <Navbar/>
        <Home/>
        <About/>
        <Twitter/>
        <Member/>
        <Project/>
        <ListTeaching CourseDate={this.state.course_data}/>
        {/* <Calendar/> */}
        <Publication/>
        {/* <Activities/> */}
        <Contact/>
      </div>
    );
  }
}
