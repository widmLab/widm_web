import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
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
    const publication = useMappedState(state => state.publicationReducer)
    const subtitle = (Object.keys(publication).length) ?
    (Object.entries(publication).map(([key,value])=>{
        return(
            value.map(p =>{
                console.log(p)
                return(
                    <div> 
                        {p.id === 1 ? (<Row><p className='content'>{key}</p></Row>) : null}
                        <Row>
                            <p>{p.id}.{p.name}</p>
                            {p.date?(<p> ,{p.date}</p>):null}
                        </Row>
                    </div>
                )
            })
        )
    })):    
    (<p>No publication</p>)

    return(
        <Container className="containWrapper" style={styles.wrapper} fluid id='publication'>
            <p className='titletext'>Publication</p>
               {/* {subtitle} */}
            {/* <iframe src="https://bibbase.org/show?bib=https%3A%2F%2Fdblp.uni-trier.de%2Fpers%2Fhb%2Fc%2FChang%3AChia%3DHui.html"></iframe> */}
            <ResponsiveEmbed aspect="a16by9">
                <embed  src="https://bibbase.org/show?bib=https%3A%2F%2Fdblp.uni-trier.de%2Fpers%2Fhb%2Fc%2FChang%3AChia%3DHui.html" />
            </ResponsiveEmbed>
        </Container>
        
    )
}
export default Publication;