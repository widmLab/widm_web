import React,{Component} from 'react';
import Previews from './UploadFile';

const styles=
{
    previews:
    {
        height:'100%',
        marginTop:30,
        width:'100%'
    },
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

export default class AboutUploader extends Component
{
    render()
    {
        return(
            <div style={{textAlign:'center'}}>
                <p style={{fontSize:35}}>About Uploader</p>
                <p style={{fontWeight:'bold'}}>Professor</p>
                <br/><Previews style={styles.previews}/><br/>
                <p style={{fontWeight:'bold'}}>Word Cloud</p>
                <br/><Previews style={styles.previews}/><br/>
                About :<br/><textarea cols='50' rows='5' style={{marginTop:10}}/><br/>
                <button style={styles.button}>Submit</button>
            </div>
          );
    }
}