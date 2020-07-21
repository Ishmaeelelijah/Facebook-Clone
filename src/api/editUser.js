import {userRef} from '../firebase'


export default ({uid,firstName,lastName, imageURL, email}) => {
    console.log(uid);
   userRef.child(uid).set({
       email,
       firstName,
       lastName,
       imageURL: imageURL ? imageURL :""
   });
}