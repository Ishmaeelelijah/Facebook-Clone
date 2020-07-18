import {userRef} from '../firebase'


export default ({uid,firstName,lastName}) => {
    console.log(uid);
   userRef.child(uid).set({
       firstName,
       lastName
   }).then(data =>{
       console.log(data)
       return true
   }).catch(err=>{
       console.log(err)
       return false
   })
}