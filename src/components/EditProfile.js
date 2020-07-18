import React, { useState } from 'react'
import {Button} from 'react-materialize'
import { firebaseApp } from '../firebase'
import editUser from '../api/editUser';

export default ({ changeToFalse  }) => {

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("")


        const onSubmit = () =>{
            const uid = firebaseApp.auth().currentUser.uid;

            const data = {
                uid,
                firstName,
                lastName
            }

          const result = editUser(data); 

          if (result === true) {
              console.log('User Info Edited')
          }

          if (result === false) {
            console.log('Error')
        }

        }
   


    return (
        <div>
            <div onClick={() => changeToFalse()}>Go Back</div>
            <input value={firstName} onChange={event=>setFirstName(event.target.value)}/>
            <input value={lastName}onChange={event=>setLastName(event.target.value)} />
            <Button onClick={onSubmit}   >Submit</Button>
        </div>
    )
}
