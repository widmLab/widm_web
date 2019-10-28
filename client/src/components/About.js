import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import React from 'react';
import {useMappedState} from 'redux-react-hook';
const styles=
{
    wrapper:
    {
        marginBottom:'10px',
        textAlign:'center',
    },
    imgWrapper:
    {
        maxWidth:'100%',
        height:'auto',
    }
};
const About=()=>
{
    const Experience = useMappedState(state => state.aboutReducer.Experience)
    const Professor = useMappedState(state => state.aboutReducer.Professor)
    const WordCloud = useMappedState(state => state.aboutReducer.WordCloud)
    const subtitle = (Experience.length) ?
    (Experience.map(p=>{
        console.log(p)
        return(
                <div style={{textAlign:'center'}}> 
                    {p.id === 1 ? (<p className='content'>Experience</p>) : null}
                    <p>{p.time+' - '+p.name}</p>
                </div>
        )
    })):    
    (<p>There is nothing here.</p>)
    return(
        <Container style={styles.wrapper} id='about'>
            <h1 className='titletext'>About</h1>
            <img alt='Chia-Hui Chang' src={Professor.url}></img>
            <br/><br/>
            <p style={{fontSize:35}}><a href={WordCloud.url} style={{color:'black'}}>Chia-Hui Chang</a></p>
            <p style={{fontSize:25}}>Professor Department of Computer Science and Information Engineering,</p>
            <br/>
            <p style={{fontSize:25,marginTop:-30}}>National Central University, Taiwan</p>
            <p style={{fontSize:20}}>{subtitle}</p>
            <br/>
            {/* <Image style={styles.imgWrapper} alt='word cloud' src='https://i.imgur.com/5aEBaCo.png'></Image> */}
        </Container>
    )
}
    
export default About;