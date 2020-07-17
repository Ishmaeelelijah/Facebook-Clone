import React,{ useState} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import {firebaseApp} from './firebase';
// import signUp from './api/signUp';
// import signIn from './api/signIn';
import SignUp from './components/SignUp'
import Feed from './components/Feed'
import Navbar from './Reusable/NavBar'
import SignIn from './components/SignIn';


function App() {
 

  
 
  const [stage, setStage] = useState("");
  const [signUpsignIn, setSignUpSignIn] = useState("SI")


 firebaseApp.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(user.uid)
    setStage('loggedIn');
    setSignUpSignIn('SI');

  } else {
    // No user is signed in.
    console.log('no user logged In')

    setStage('notloggedIn');
  }
});

 const changeState = (value) =>{

  // SI OR SU
   setSignUpSignIn(value);
 }


  return (
    <div className="App">
      <Navbar stage={stage}/>
      
      {stage === 'loggedIn' &&  <Feed />}
      {stage === 'notloggedIn' && signUpsignIn === 'SI' &&  <SignIn changeState={changeState} /> }
      {stage === 'notloggedIn' && signUpsignIn === 'SU' &&  <SignUp changeState={changeState} /> }
    </div>
  );
}

export default App;
  