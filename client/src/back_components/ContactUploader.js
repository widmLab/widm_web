import React,{Component} from 'react';

const styles=
{
    button:
    {
        backgroundColor:'#212529',
        borderRadius:10,
        color:'#fff',
        fontSize:25,
        height:65,
        marginBottom:30,
        marginTop:100,
        width:200
    }
}

export default class ContactUploader extends Component
{
    render()
    {
        return(
            <div style={{textAlign:'center'}}>
                <p style={{fontSize:35}}>Contact Uploader</p>
                Phone :<br/><input style={{marginTop:10}}/><br/>
                Email :<br/><input style={{marginTop:10}}/><br/>
                Address :<br/><input style={{marginTop:10}}/><br/>
                <button style={styles.button}>Submit</button>
            </div>
          );
    }
}