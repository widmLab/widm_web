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

export default class CourseUploader extends Component
{
    render()
    {
        return(
            <div style={{textAlign:'center'}}>
                <p style={{fontSize:35}}>Course Uploader</p>
                Course Name :<br/><input style={{marginTop:10}}/><br/>
                Course ID :<br/><input style={{marginTop:10}}/><br/>
                Teaching Assistant :<br/><input style={{marginTop:10}}/><br/>
                Starting Time :<br/><input style={{marginTop:10}}/><br/>
                Delete Course ID :<br/><input style={{marginTop:10}}/><br/>
                <button style={styles.button}>Submit</button>
            </div>
          );
    }
}