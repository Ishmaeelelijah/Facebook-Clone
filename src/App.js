import React,{useEffect, useState} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import {userRef, firebaseApp} from './firebase';
import signUp from './api/signUp';
import signIn from './api/signIn';
import SignUp from './components/SignUp'
import Feed from './components/Feed'
import Navbar from './Reusable/NavBar'

function App() {
 
  // const onSingIn = () => {
  //    const result = signIn(
  //      'ishmaeelelijah2@gmail.com',
  //       'password')
  //   console.log(result);
  // }
  const [stage, setStage] = useState("");
  const onSingUp = () => {
    const result = signUp(
      'ishmaeelelijah2@gmail.com',
       'password',
       'Elie',
       'Ishmaeel'
       );
   console.log(result);
 };

 firebaseApp.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(user.uid)
    setStage( 'loggedIn');
  } else {
    // No user is signed in.
    console.log('no user logged In')

    setStage('notloggedIn');
  }
});




  return (
    <div className="App">
      <Navbar stage={stage}/>
      {stage === 'loggedIn' &&  <Feed/>}
      {stage === 'notloggedIn' && <SignUp/>}
    </div>
  );
}

export default App;
  