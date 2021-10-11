import React, {useState, useEffect} from 'react'
import firebaseApp from './firebase'
import './App.css'
import Login from './components/Login'
import Hero from './components/Hero'

const App = () => {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)

  const clearInput = () =>{
    setEmail('');
    setPassword('');
  }

  const clearError = () => {
    setEmailError('');
    setPasswordError('')
  }

 const handleLogin = () => {
   clearError()
   firebaseApp
   .auth()
   .signInWithEmailAndPassword(email, password)
   .catch(err => {
     switch(err.code){
       case "auth/invalid-email":
       case "auth/user-disable":
       case "auth/user-not-found":
         setEmailError(err.message);
         break;
      case "auth/wrong-password":
        setPasswordError(err.message);
        break;
      default:
        console.log('Email ans password are correct')
     }
   })
 }

 const handleSignup = () => {
   clearError()
  firebaseApp
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .catch(err => {
    switch(err.code){
      case "auth/email-already-in-use":
      case "auth/invalid-email":
        setEmailError(err.message);
        break;
      case "auth/weak-password":
       setPasswordError(err.message);
       break;
      default:
        console.log('Email and password worked')
    }
  })
 }

 const handleLogout = () => {
   firebaseApp.auth().signOut();
 } 

 const authListener = () =>{
   firebaseApp.auth().onAuthStateChanged((user) => {
     if(user){
       clearInput();
       setUser(user);
     }
     else{
       setUser("");
     }
   })
 }

 useEffect( () => {
   authListener();
 }, [])

  
  return (
    <div className="App">
    {user ?
     ( <Hero handleLogout={handleLogout}/>) :(
      <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignup={handleSignup} hasAccount={hasAccount} setHasAccount={setHasAccount}
      emailError={emailError} passwordError={passwordError} />
    )
    }
    </div>
  );
}

export default App;
