import React, { useState, useEffect } from 'react';
import {Dropdown,Icon,Button} from 'react-materialize'
import { userRef } from '../firebase';
import moment from  'moment'
import profilepic from '../images/Screenshot (60).png'
import deletePost from '../api/deletePost';


export default  ({details , myUID}) => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");

    useEffect(() =>{
        const getName = () =>{
            userRef.child(details.createdBy).once("value",snap=>{
                // setFirstName(snap.val()["firstName"]);
                // setLastName(snap.val()["lastName"]);
            })
        }
        if (details&&details.createdBy) {
            getName();
        }
    },[]);

    const onPostDelete = (event,postKey) =>{
        event.preventDefault();
        const result = deletePost(postKey);
        console.log(result)
    }



    return (
        <div>
            <div className='outerBox m10' style={{width: '600px'}}>
                <div>
                    
                    <div>
                        <div style={{ display:'flex',marginBottom:10}}>
                            <div style={{width:40, height:40,borderRadius:30,overflow:'hidden'}}>
                                <img src={profilepic} alt='profilepic' height='100%'/>
                            </div>
                            <div style={{color:'#385898', fontWeight:600}}>
                             {firstName} {lastName}
                             </div>
                             {myUID === details.createdBy && (
                                 <div>
                                 <Dropdown options={{
                                     alignment: 'left',
                                     autoTrigger:true,
                                     closeOnClick:true,
                                     constrainWidth:true,
                                     container:null,
                                     hover:false,
                                     inDuration:150,
                                     onCloseEnd:null,
                                     onCloseStart:null,
                                     onOpenEnd:null,
                                     onOpenStart:null,
                                     outDuration:250
                                 }}
                                 
                                 trigger={
                                     <Button flat node='button' >
                                         <Icon>more_vert</Icon>
                                     </Button>
                                 }
                                 >
                                     <a href="w" style={{color:"black"}}>
                                         Edit
                                     </a>
                                     <a href="w" style={{color:"black"}} onClick={(event) => {onPostDelete(event,details.postKey)}}     >
                                         Delete
                                     </a>
                                     </Dropdown>
                                     </div> 
                             )}
                            
                      
                        </div>
                        <div style={{ fontSize:12,color:"grey"}}>{moment(details.createdAt).fromNow()}   </div>
                    <div>
                        {details&&details.content? details.content:""}
                     </div>
                    </div>
                </div>
            </div>
        </div>
    )
}