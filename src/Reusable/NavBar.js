import React from 'react'
import {Navbar,Icon, NavItem , Container} from 'react-materialize'
import {firebaseApp} from "../firebase"

export default ({stage})  =>{
    return (
        <div style={{background: 'black'}}>
            <Container>
            <Navbar
  alignLinks="right"
  brand={<a className="brand-logo" href="www.google.com">Logo</a>}
 
  id="mobile-nav"
  className="custom-navbar"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250, 
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
  {stage ==="loggedIn" && (
    <NavItem 
    onClick={event => {
   event.preventDefault();
   firebaseApp.auth().signOut();
   }}>
     Log Out
   </NavItem>
  )}
  
</Navbar>
</Container>

 </div>
    )
}
