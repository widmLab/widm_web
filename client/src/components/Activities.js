import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {useMappedState} from 'redux-react-hook';
const styles = {
    "wrapper" : {
        'marginBottom' : '10px',
        // 'border' : 'solid black 1px',
    },
    "morestyle" : {
        'text-align': 'right',
        // 'border' : 'solid black 1px',
    },
}
const Publication = () =>{
    const activities = useMappedState(state => state.activitiesReducer)
    const subtitle = (Object.keys(activities).length) ?
    (Object.entries(activities).map(([key,value])=>{
        return(
            value.map(p =>{
                console.log(p)
                return(
                    <div> 
                        {p.id === 1 ? (<Row><p className='content'>{key}</p></Row>) : null}
                        <Row>
                            <p>{p.id}. {p.name}</p>
                            {p.date?(<p> ,{p.date}</p>):null}
                        </Row>
                    </div>
                )
            })
        )
    })):    
    (<p>No Activites</p>)

    return(
        <Container className="containWrapper" style={styles.wrapper} fluid id='activitie'>
            <p className='titletext'>Activities</p>
            <div>
               {subtitle}
            </div>
            <div style={styles.morestyle}>
                <a href="https://sites.google.com/site/jahuichang/academic-activities">more...</a>
            </div>
        </Container>
    )
}
export default Publication;