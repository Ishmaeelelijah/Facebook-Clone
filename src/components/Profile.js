import React from "react";
import {Icon} from 'react-materialize';

export default () =>{
    return(
        <div className='outerBox' m10 style={{width:"300px",height:"170px"}}>
            <div style={{display: "flex", marginBottom:10}}>
                <div style={{width:40, height:40,borderRadius:30,overflow:'hidden'}}>
                    <img src='https://images.app.goo.gl/eMgRqQybkRFrPViQA'
                    alt='profile-pic'
                    height='100%'/>

                </div>
                <div style={{marginLeft:10, flex:1}}>Ray Senda</div>
            <div style={{cursor:'pointer'}}> <Icon>edit</Icon>
            </div>
            </div>
            <div style={{ borderTop:"1px soild lightgray"}}>
           
        </div><hr></hr>
        <div style={{color:"darkblu", fontFamily:'fantasy', marginTop:10}}>
                About Me:
            </div>
            <div style={{ fontSize:12}}>
                Software Programmer, loves dogs and love tomplay games every day
            </div>
        </div>
        
    )
}