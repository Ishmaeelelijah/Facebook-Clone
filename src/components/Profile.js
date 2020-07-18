import React, { useState } from "react";
import {Icon} from 'react-materialize';
import profilepic from '../images/Screenshot (60).png'
import EditProfile from "./EditProfile";

export default () =>{
    const [editMode, setEditMode] = useState(false);



    const changeToFalse = () => {
        setEditMode(false);
    }

    return(
        <div className='outerBox' m10 style={{width:"300px",height:"190px"}}>
            {editMode ? (<div> <EditProfile changeToFalse={changeToFalse}    />   </div>) : ( 
                <div>
            <div style={{display: "flex", marginBottom:10}}>
                <div style={{width:40, height:40,borderRadius:30,overflow:'hidden'}}>
                    <img src={profilepic}
                    alt='profile-pic'
                    height='100%'/>

                </div>
                <div style={{marginLeft:10, flex:1}}>Ray Senda</div>
            <div style={{cursor:'pointer'}} onClick={()=> setEditMode(true)}> 
            <Icon>edit</Icon>
            </div>
            </div>
            <div style={{ borderTop:"1px soild lightgray"}}>
           
        </div><hr></hr>
        <div style={{color:"darkblu", fontFamily:'fantasy', marginTop:10}}>
                About Me:
            </div>
            <div style={{ fontSize:12}}>
                Software Programmer, loves dogs and love tomplay games every day
            </div></div>
            )}
           
        </div>
        
    )
}