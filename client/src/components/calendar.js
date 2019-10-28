import React from 'react';
import Container from 'react-bootstrap/Container';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

//style="border: 0" width="800" height="600" frameborder="0" scrolling="no"
const styles = {
    wrapper : {
        'height' : 'auto',
        'justifyContent' : 'center',
        'marginBottom' : '10px',
    },
}
const calendar_url = 'https://calendar.google.com/calendar/embed?src=gpq4ghafoa05a1cig7g5kk8alk%40group.calendar.google.com&ctz=Asia%2FTaipei';
const Calendar = ()=>{
    return(
        <Container className="containWrapper" style={styles.wrapper} fluid id='calendar'>
            <h1 className="titletext" style={styles.Titletext}>Calendar</h1>
            <ResponsiveEmbed aspect="a16by9">
                <embed  src={calendar_url} />
            </ResponsiveEmbed>
        </Container>
    )
}

export default Calendar;