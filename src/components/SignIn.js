import React, { useState } from 'react'
import {TextInput,Icon} from 'react-materialize'
import signIn from '../api/signIn'



export default ( props) => {

    const [data, setData] = useState({})

    const onChangeText = (key,value) => {
        const newData = {...data}
        newData[key] = value;
        setData(newData);
    };

    
    const onSubmit = async () => {
        const result =   signIn(data);
        if (result === true) {
            console.log("Welcome to my facebook");
        }else if ( result === false){
            console.log("You did not make it ")
        }
     }
 




    return (
        <div  style={{display:'flex', justifyContent:'center'}}>
            
           <div className="outerBox">
           <h4>Sign In</h4>
           <TextInput id="TextInput-4"label="Email Address" onChange={e =>onChangeText('email',e.target.value)} />
           <TextInput id="TextInput-4"label="Password" onChange={e =>onChangeText('password',e.target.value)} />
           <button  className="btn waves-effect waves-red"  onClick={onSubmit}>
          Submit 
          <Icon right>send</Icon>
           </button>
           <p>Do not have account? <span onClick={() => {props.changeState('SU')}}>Sign Up</span></p>
            </div> 
        </div>
    )
}
