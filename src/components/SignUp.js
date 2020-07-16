import React, { useState } from 'react'
import {TextInput, Icon} from 'react-materialize'
import signUp from '../api/signUp'



export default (props) => {

    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        email:'',
        password:"",

    })

    const onSubmit = async () => {
       const result =   signUp(data);
       if (result === true) {
           console.log("Welcome to my facebook")
       }else if ( result === false){
           console.log("You did not make it ")
       }
    }

    const onChangeText = (key,value) => {
        const newData = {...data}
        newData[key] = value;
        setData(newData);
    }


    return (
        <div  style={{display:'flex', justifyContent:'center'}} >
        
           <div className="outerBox">
               <h4>Sign Up</h4>
           <TextInput id="TextInput-4"label="First Name" onChange={e =>onChangeText('firstName',e.target.value)} />
           <TextInput id="TextInput-4"label="Last Name" onChange={e =>onChangeText('lastName',e.target.value)} />
           <TextInput id="TextInput-4"label="Email Address" onChange={e =>onChangeText('email',e.target.value)} />
           <TextInput id="TextInput-4"label="Password" onChange={e =>onChangeText('password',e.target.value)} />
           <button  className="btn waves-effect waves-"   onClick={onSubmit}>
          Submit 
          <Icon right>send</Icon>
           </button>
           <p>Already have an account? <span onClick={() => {props.changeState('SI')}}>Sign In</span></p>
            </div> 
        </div>
    )
}
 