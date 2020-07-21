import React, { useState } from "react";
import {Icon} from 'react-materialize';
import EditProfile from "./EditProfile";




export default ( {userDetails}) =>{
    const [editMode, setEditMode] = useState(false);



    const changeToFalse = () => {
        setEditMode(false);
    }

    return(
        <div className='outerBox' m10 style={{width:"300px",height:"260px"}}>
            {editMode ? (<div> <EditProfile changeToFalse={changeToFalse} userDetails={userDetails}   />   </div>) : ( 
                <div>
            <div style={{display: "flex", marginBottom:10}}>
                <div style={{width:40, height:40,borderRadius:30,overflow:'hidden'}}>
                    <img src={ userDetails && userDetails.imageURL ? userDetails.imageURL :"https://unsplash.com/photos/UfNTj_4DOOc"}
                    alt='profile-pic'
                    height='100%'/>

                </div>
            <div style={{marginLeft:10, flex:1}}>
                {userDetails ? `${userDetails.firstName} ${userDetails.lastName}` : 'Loading'}
            </div>
            <div style={{cursor:'pointer'}} onClick={()=> setEditMode(true)}> 
            <Icon>edit</Icon>
            </div>
            </div>
            <div style={{ borderTop:"1px soild lightgray"}}>
           
        </div><hr></hr>
        <div style={{color:"darkblue", fontFamily:'fantasy', marginTop:10}}>
                About Me:
            </div>
            <div style={{ fontSize:12}}>
                Software Programmer, loves dogs and love tomplay games every day
            </div></div>
            )}
           
        </div>
        
    )
}