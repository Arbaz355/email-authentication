import React from 'react'

const Login = (props) => {
    const {email, setEmail, password, setPassword, handleSignup, handleLogin, hasAccount,  setHasAccount, emailError, passwordError} = props;
    return (
        <section className="login">
            <div className="loginContainer">
             <label>Username</label>
             <input type="text" autofocus required value={email} onChange={(e) => setEmail(e.target.value)} />
             <p className="errorMsg">{emailError}</p>
             <label>Password</label>
             <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
             <p className="passwordError">{passwordError}</p>
             <div className="btnContainer">
                 {hasAccount ? (
                     <>
                        <button onClick={handleLogin}>Sign in</button>
                        <p>Don't have account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                     </>
                 ) : (
                    <>
                        <button onClick={handleSignup}>Sign up</button>
                        <p>Have a account ? <span onClick={()=> setHasAccount(!hasAccount)}>Sign in</span></p>
                    </>
                 )}
             </div>


            </div>
            
        </section>
    )
}

export default Login
