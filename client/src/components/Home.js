import React from 'react';
import HomeImage from '../assets/Image/HOME_IMAGE.jpg';
// import Carousel from 'react-bootstrap/Carousel'
import '../css/home.css'
let styles = {
    "wrapper":{
        'maxWidth' : '100%',
        'position': 'relative',
        'marginBottom': '25px',
    },
    "welcome":{
        'color': 'black',
        'fontFamily': "Courier New",
    }
 }
const Home_new=()=>
{
    return(
        <div style={styles.wrapper} id='home'>
            <div className="Floater">
                <p >WIDM LAB</p>
                <p >Web Intelligence & Data Mining</p>
            </div>
            <img
                className="d-block w-100 picture" 
                src={HomeImage}
                alt="Home"
            />
        </div>
    )
}

export default Home_new;