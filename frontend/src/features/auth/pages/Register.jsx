import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router';
import { useAuth } from "../hooks/useAuth.js"

const Register = () => {

  const navigate = useNavigate()

  const {loading, handleRegister} = useAuth()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const Handlesubmit = async (e)=>{
    e.preventDefault();
    await handleRegister({username, email, password})
    navigate("/")
  }

  if(loading){
    return(
      <main><h1>Loading.....</h1></main>
    )
  }

  return (
    <main>

      <div className="form-container">

        <h1>Register</h1>

        <form onSubmit={Handlesubmit}>
          <div className="input-group">
            <label htmlFor="username">Username: </label>
            <input type="text" onChange={(e)=>setUsername(e.target.value)} name="username" id="username" value={username} placeholder='Enter username' />
          </div> 
          <div className="input-group">
            <label htmlFor="email">Email: </label>
            <input type="text" onChange={(e)=>setEmail(e.target.value)}  name="email" id="email" value={email} placeholder='Enter Your Email' />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password: </label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" id="password" value={password} placeholder='Enter Your Password' />
          </div>
          <button className='button primary-button'>Register</button>
        </form>

       <p>Already Have An Account? <Link to={"/Login"}>Login</Link></p>

      </div>

    </main>
  )
}

export default Register